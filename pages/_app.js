// pages/_app.js
import "../styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";
import Navbar from "../components/Navbar";


function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="dev-yplq7ifck3l8ssqc.us.auth0.com"
      clientId="iSiQpLmf7rFgxKf1VZul0YW4WXCWCJwA"
      redirectUri={typeof window !== "undefined" ? window.location.origin : ""}
    >
      <Navbar />
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;
