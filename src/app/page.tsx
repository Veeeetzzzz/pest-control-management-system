import { Login } from "@/components/component/login";
import { Navbar } from "@/components/component/navbar";
//import { useMsal } from "@azure/msal-react";
//import { loginRequest } from './authConfig';
//import SignInButton from './SignInButton'; //

export default function Home() {
  const { instance } = useMsal();

  const handleLogin = (loginType) => {
    if (loginType === "popup") {
      instance.loginPopup(loginRequest).catch(e => {
        console.error(e);
      });
    } else if (loginType === "redirect") {
      instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
      });
    }
  };

  return (
    <>
      <Navbar />
      <Login />
      <SignInButton onLogin={handleLogin} />
    </>
  );
}
