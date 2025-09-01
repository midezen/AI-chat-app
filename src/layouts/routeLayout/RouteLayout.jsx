import { Link, Outlet } from "react-router-dom";
import "./routeLayout.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const RouteLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <div className="routeLayout">
        <header>
          <Link to={"/"} className="logo">
            <img src="/logo.png" alt="" />
            <span>midzen AI</span>
          </Link>
          <div className="user">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </ClerkProvider>
  );
};

export default RouteLayout;
