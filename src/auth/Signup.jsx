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

  const role = params.get("role"); // TEACHER | STUDENT
  const department = params.get("department");

  const submit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const attributes = [
      new CognitoUserAttribute({ Name: "email", Value: email }),
      new CognitoUserAttribute({ Name: "custom:role", Value: role }),
      new CognitoUserAttribute({ Name: "custom:department", Value: department }),
    ];

    pool.signUp(email, password, attributes, null, (err) => {
      if (err) return alert(err.message);

      alert("Account created. Check email to confirm.");
      navigate("/login");
    });
  };

  return (
    <form onSubmit={submit}>
      <h2>{role} Signup — {department}</h2>

      <input name="email" required />
      <input name="password" type="password" required />

      <button>Create Account</button>
    </form>
  );
}
