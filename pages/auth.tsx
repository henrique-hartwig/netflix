import AuthInput from "../components/AuthInput"
import "../app/globals.css";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="relative h-full w-full bg-netflix-wallpaper bg-center bg-no-repeat bg-fixed">
      <div className="bg-blue h-full w-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src='/images/logo.png' alt='Netflix Logo' className="h-12"/>
        </nav>
        <div className="flex justify-center ">
          <div className="bg-black bg-opacity-70 self-center p-16 mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full ">
            <header>
              <h1 className="text-white text-4xl font-semibold pb-4">
                Sign in
              </h1>
            </header>
            <div className="text-white flex flex-col gap-4">
              <AuthInput
                id='email'
                label='Email'
                value={email}
                type='email'
                onChange={(e: Event) => setEmail(e?.target?.value)}
              />
              <AuthInput
                id='password'
                label='Password'
                value={password}
                type='password'
                onChange={(e: Event) => setPassword(e?.target?.value)}
              />
            </div>
            <footer>
              <p className="text-grey-600">
                aaaaaaaaa
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
