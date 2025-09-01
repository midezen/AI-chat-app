import { SignUp } from "@clerk/clerk-react";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <SignUp path="/sign-up" signInUrl="/sign-in" />
    </div>
  );
};

export default Register;
