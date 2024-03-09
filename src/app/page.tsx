'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/component/navbar";
import { Login } from "@/components/component/login";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest } from '../components/auth/config';
import { Dashboard } from "@/components/component/dashboard";

const msalInstance = new PublicClientApplication(msalConfig);

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = async () => {
    try {
      await msalInstance.loginPopup(loginRequest);
      const accounts = msalInstance.getAllAccounts();
      if (accounts.length > 0) {
        // User is authenticated, update the login state
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  useEffect(() => {
    const checkLoginStatus = async () => {
      const accounts = msalInstance.getAllAccounts();
      if (accounts.length > 0) {
        // User is authenticated, update the login state
        setIsLoggedIn(true);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <ManagerView /> // Render the ManagerView component when logged in
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}
