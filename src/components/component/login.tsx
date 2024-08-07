import { Button } from "@/components/ui/button";

interface LoginProps {
  onLogin: () => Promise<void>;
}


export function Login({ onLogin }: LoginProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex flex-col items-center justify-center flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          Pest Control Management System
        </h2>
        <div className="mt-8 w-full max-w-md">
          <Button
            className="w-full h-12 bg-blue-500 text-white font-bold"
            onClick={onLogin}
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
