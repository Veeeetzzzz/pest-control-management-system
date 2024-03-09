'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/component/navbar";
import { Login } from "@/components/component/login";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalInstance, loginRequest } from '../components/auth/config';

const handleLogin = async () => {
  try {
    await msalInstance.loginPopup(loginRequest);
  } catch (error) {
    console.error("Login error:", error);
  }
};


export default function Home() {
  const router = useRouter();
  const msalInstance = new PublicClientApplication(msalInstance);

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
