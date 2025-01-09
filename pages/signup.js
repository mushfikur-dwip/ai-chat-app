// pages/signup.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Signup = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignup = () => {
    loginWithRedirect({
      screen_hint: "signup",
    });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up for AI Chat App</h2>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default Signup;
