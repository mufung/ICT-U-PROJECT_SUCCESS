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

  const roleParam = params.get("role"); // TEACHER or STUDENT (from URL)

  const submit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const user = new CognitoUser({
      Username: email,
      Pool: pool,
    });

    const auth = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(auth, {
      onSuccess: (session) => {
        const decoded = decodeJWT(session.getIdToken().getJwtToken());

        const department = decoded["custom:department"];
        const groups = decoded["cognito:groups"] || [];

        // 🔐 SAFETY CHECK — prevents 400 / silent failures
        if (!groups.length) {
          alert("Account not fully provisioned yet. Please contact admin.");
          return;
        }

        const role = groups[0];

        setAuth({ role, department });

        navigate(role === "TEACHER" ? "/teacher" : "/student");
      },

      onFailure: (err) => {
        alert(err.message || "Login failed");
      },
    });
  };

  return (
    <form onSubmit={submit}>
      <h2>{roleParam} Login</h2>

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        required
      />

      <button type="submit">Login</button>
    </form>
  );
}
