'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/component/navbar";
import { Login } from "@/components/component/login";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest } from '../components/auth/config';

const msalInstance = new PublicClientApplication(msalConfig);

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      await msalInstance.loginPopup(loginRequest);
      const accounts = msalInstance.getAllAccounts();
      if (accounts.length > 0) {
        // User is authenticated, redirect to another page
        setIsLoggedIn(true);
        router.push("/dashboard"); // Replace "/dashboard" with the desired route
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  useEffect(() => {
    const accounts = msalInstance.getAllAccounts();
    if (accounts.length > 0) {
      // User is authenticated, redirect to another page
      setIsLoggedIn(true);
      router.push("/dashboard"); // Replace "/dashboard" with the desired route
    }
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <div>
          <Navbar isLoggedIn={isLoggedIn} />
          {/* Rest of your dashboard content */}
        </div>
      ) : (
        <>
          <Navbar isLoggedIn={isLoggedIn} />
          <Login onLogin={handleLogin} />
        </>
      )}
    </>
  );
}
