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
  const { login } = useAuth(); // ✅ FIX HERE

  const role = params.get("role");

  const submit = (e) => {
    e.preventDefault();

    const user = new CognitoUser({
      Username: e.target.email.value,
      Pool: pool,
    });

    const authDetails = new AuthenticationDetails({
      Username: e.target.email.value,
      Password: e.target.password.value,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (session) => {
        const decoded = decodeJWT(session.getIdToken().getJwtToken());

        const department = decoded["custom:department"];
        const groups = decoded["cognito:groups"];

        if (!groups || groups.length === 0) {
          alert("User has no role assigned");
          return;
        }

        login({
          role: groups[0],
          department,
        }); // ✅ FIX HERE

        navigate(groups[0] === "TEACHER" ? "/teacher" : "/student");
      },

      onFailure: (err) => {
        alert(err.message);
      },
    });
  };

  return (
    <form onSubmit={submit}>
      <h2>{role} Login</h2>
      <input name="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}
