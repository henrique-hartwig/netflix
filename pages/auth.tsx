import AuthInput from "../components/AuthInput";
import "../app/globals.css";
import { ChangeEvent, useCallback, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [action, setAction] = useState<string>("login");

  const toggleAction = useCallback(() => {
    setAction(action === "login" ? "create" : "login");
  }, [action]);

  return (
    <div className="relative h-full w-full bg-netflix-wallpaper bg-center bg-no-repeat bg-fixed">
      <div className="bg-blue h-full w-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Netflix Logo" className="h-12" />
        </nav>
        <div className="flex justify-center ">
          <div className="bg-black bg-opacity-70 self-center p-16 mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full ">
            <header>
              <h1 className="text-white text-4xl font-semibold pb-4">
                {action === "login" ? "Sign In" : "Register"}
              </h1>
            </header>
            <div className="text-white flex flex-col gap-4">
              {action === "create" && (
                <AuthInput
                  id="userName"
                  label="userName"
                  value={userName}
                  type="userName"
                  onChange={(e) => setUserName(e.target.value)}
                />
              )}
              <AuthInput
                id="email"
                label="Email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <AuthInput
                id="password"
                label="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="bg-red-600 rounded-md py-3 mt-10 text-white hover:bg-red-700 transition">
                Login
              </button>
              <p className="text-neutral-500 self-center">
                Need new account?
                <span
                  className="text-white ml-1 hover:underline cursor-pointer"
                  onClick={toggleAction}
                >
                  Create one
                </span>
              </p>
            </div>
            <footer>
              <p className="text-neutral-600">aaaaaaaaa aaaaaaaaaa aaaaaa</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
