/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import AuthInput from "../components/AuthInput";
import "../app/globals.css";
import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [action, setAction] = useState<string>("login");
  const router = useRouter();

  const toggleAction = useCallback(() => {
    setAction(action === "login" ? "create" : "login");
  }, [action]);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

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
                  id="name"
                  label="User"
                  value={name}
                  type="name"
                  onChange={(e) => setName(e.target.value)}
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
              <button
                className="bg-red-600 rounded-md py-3 mt-10 text-white hover:bg-red-700 transition"
                onClick={action === "login" ? login : register}
              >
                {action === "login" ? "Login" : "Register"}
              </button>
              <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                <div
                  className="
                    w-10
                    h-10
                    bg-white
                    rounded-full
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    hover:opacity-80
                    transition
                    "
                >
                  <FcGoogle size={30} />
                </div>
                <div
                  className="
                    w-10
                    h-10
                    bg-white
                    rounded-full
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    hover:opacity-80
                    transition
                    "
                >
                  <FaGithub size={30} />
                </div>
              </div>
              <p className="text-neutral-500 self-center">
                {action === "login"
                  ? "Need new account?"
                  : "Already have an account."}
                <span
                  className="text-white ml-1 hover:underline cursor-pointer"
                  onClick={toggleAction}
                >
                  {action === "login" ? "Create one" : "Back to Log in"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
