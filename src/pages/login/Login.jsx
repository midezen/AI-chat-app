import { SignIn } from "@clerk/clerk-react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl={"/dashboard"}
      />
    </div>
  );
};

export default Login;
