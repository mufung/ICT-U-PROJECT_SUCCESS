import { useSearchParams, useNavigate } from "react-router-dom";
import {
  CognitoUserPool,
  CognitoUserAttribute
} from "amazon-cognito-identity-js";
import { useEffect } from "react";
import { cognitoConfig } from "../config/config";

const pool = new CognitoUserPool({
  UserPoolId: cognitoConfig.userPoolId,
  ClientId: cognitoConfig.userPoolWebClientId,
});

export default function Signup() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const role = params.get("role"); // TEACHER | STUDENT
  const department = params.get("department"); // ICT | ENGINEERING | CHEMISTRY

  // 🚨 HARD GUARD — DO NOT ALLOW INVALID SIGNUPS
  useEffect(() => {
    if (!role || !department) {
      alert("Invalid signup flow. Please select role and department.");
      navigate("/");
    }
  }, [role, department, navigate]);

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
      if (err) {
        alert(err.message);
        return;
      }

      alert("Account created. Check email to confirm.");
      navigate("/login");
    });
  };

  return (
    <form onSubmit={submit}>
      <h2>{role} Signup — {department}</h2>

      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />

      <button type="submit">Create Account</button>
    </form>
  );
}
