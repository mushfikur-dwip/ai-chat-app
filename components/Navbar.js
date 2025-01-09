// components/Navbar.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    <nav>
      <Link href="/">Home</Link>
      {isAuthenticated ? (
        <>
          <Link href="/dashboard">Dashboard</Link>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
