import { useSearchParams, useNavigate } from "react-router-dom";
import {
  CognitoUser,
  CognitoUserPool,
  AuthenticationDetails
} from "amazon-cognito-identity-js";
import { cognitoConfig } from "../config/config";
import { decodeJWT } from "./jwt";
import { useAuth } from "./AuthContext";

const pool = new CognitoUserPool({
  UserPoolId: cognitoConfig.userPoolId,
  ClientId: cognitoConfig.userPoolWebClientId,
});

export default function Login() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const role = params.get("role");

  const submit = (e) => {
    e.preventDefault();

    const user = new CognitoUser({
      Username: e.target.email.value,
      Pool: pool,
    });

    const auth = new AuthenticationDetails({
      Username: e.target.email.value,
      Password: e.target.password.value,
    });

    user.authenticateUser(auth, {
      onSuccess: (session) => {
        const decoded = decodeJWT(session.getIdToken().getJwtToken());

        const department = decoded["custom:department"];
        const groups = decoded["cognito:groups"];

        setAuth({ role: groups[0], department });

        navigate(groups[0] === "TEACHER" ? "/teacher" : "/student");
      },
      onFailure: err => alert(err.message),
    });
  };

  return (
    <form onSubmit={submit}>
      <h2>{role} Login</h2>
      <input name="email" />
      <input name="password" type="password" />
      <button>Login</button>
    </form>
  );
}