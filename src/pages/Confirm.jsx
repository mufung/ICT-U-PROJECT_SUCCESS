import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { confirmSignUp } from "aws-amplify/auth";

export default function Confirm() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const username = params.get("username");
  const code = params.get("code");

  useEffect(() => {
    if (!username || !code) return;

    const confirm = async () => {
      try {
        await confirmSignUp({
          username,
          confirmationCode: code,
        });

        console.log("User confirmed successfully");
        navigate("/login");
      } catch (err) {
        console.error("Confirmation failed", err);
      }
    };

    confirm();
  }, [username, code, navigate]);

  return (
    <div>
      <h2>Confirming your account...</h2>
    </div>
  );
}