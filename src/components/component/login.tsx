import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest } from "@/components/auth/config";

const msalInstance = new PublicClientApplication(msalConfig);

export function Login() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await msalInstance.loginPopup(loginRequest);
      const accounts = msalInstance.getAllAccounts();
      if (accounts.length > 0) {
        // User is authenticated, redirect to the dashboard or desired page
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex flex-col items-center justify-center flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <img
          alt="Microsoft Logo"
          className="h-18 w-18"
          height="72"
          src="/placeholder.svg"
          style={{
            aspectRatio: "72/72",
            objectFit: "cover",
          }}
          width="72"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          Pest Control Management System
        </h2>
        <div className="mt-8 w-full max-w-md">
          <Button
            className="w-full h-12 bg-blue-500 text-white font-bold"
            onClick={handleLogin}
          >
            Sign in with Microsoft
          </Button>
        </div>
      </main>
      <footer className="flex items-center justify-center h-16 bg-gray-200 dark:bg-gray-800">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          © 2024 Pest Control Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
