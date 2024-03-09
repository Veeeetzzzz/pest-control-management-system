'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/component/navbar";
import { Login } from "@/components/component/login";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest } from '../components/auth/config';

const msalInstance = new PublicClientApplication(msalConfig);

export default function Home() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await msalInstance.loginPopup(loginRequest);
      const accounts = msalInstance.getAllAccounts();
      if (accounts.length > 0) {
        // User is authenticated, redirect to another page
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
      router.push("/dashboard"); // Replace "/dashboard" with the desired route
    }
  }, []);

  return (
    <>
      <Navbar />
      <Login onLogin={handleLogin} />
    </>
  );
}
