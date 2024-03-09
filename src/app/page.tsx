'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/component/navbar";
import { Login } from "@/components/component/login";
import { PublicClientApplication } from "@azure/msal-browser";

export default function Home() {
  const router = useRouter();
  const msalInstance = new PublicClientApplication(msalConfig);

  useEffect(() => {
    const accounts = msalInstance.getAllAccounts();
    if (accounts.length > 0) {
      // User is authenticated, redirect to another page
      router.push("/dashboard"); // Replace "/dashboard" with the desired route
    }
  }, []);

  const handleLogin = async () => {
    try {
      await msalInstance.loginPopup(loginRequest);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Login onLogin={handleLogin} />
    </>
  );
}
