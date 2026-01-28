import { useSearchParams, useNavigate } from "react-router-dom";
import {
  CognitoUserPool,
  CognitoUserAttribute
} from "amazon-cognito-identity-js";
import { cognitoConfig } from "../config/config";

const pool = new CognitoUserPool({
  UserPoolId: cognitoConfig.userPoolId,
  ClientId: cognitoConfig.userPoolWebClientId,
});

export default function Signup() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const role = params.get("role");
  const department = params.get("department");

  const submit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const attributes = [
      new CognitoUserAttribute({ Name: "email", Value: email }),
      new CognitoUserAttribute({
        Name: "custom:department",
        Value: department
      }),
    ];

    pool.signUp(email, password, attributes, null, (err) => {
      if (err) return alert(err.message);

      alert("Signup successful. Confirm email.");
      navigate(`/login?role=${role}&department=${department}`);
    });
  };

  return (
    <form onSubmit={submit}>
      <h2>{role} Signup — {department}</h2>

      <input name="email" placeholder="Email" required />
      <input name="password" type="password" required />

      <button type="submit">Create Account</button>
    </form>
  );
}