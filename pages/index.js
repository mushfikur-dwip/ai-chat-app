// pages/index.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ChatInterface from "../components/ChatInterface";

const Home = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="home-container">
      {isAuthenticated ? (
        <ChatInterface />
      ) : (
        <div>Please log in to use the chat.</div>
      )}
    </div>
  );
};

export default Home;
