import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInform, setIsSignInForm] = useState(true);
  const handleToggleForm = () => {
    setIsSignInForm(!isSignInform);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          alt="background-login"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
      </div>
      <form className="absolute p-12  bg-black opacity-85 w-4/12 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-4xl py-4">
          {isSignInform ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInform && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-700 border-white opacity-100 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="E-mail Address"
          className="p-4 my-2 w-full bg-gray-700 w-[250]px border-white opacity-100 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700 border-white opacity-100 rounded-lg"
        />
        <button className="p-4 my-4 bg-red-600 w-full rounded-lg">
          {isSignInform ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 m-4 cursor-pointer" onClick={handleToggleForm}>
          {isSignInform ? (
            <p>
              New to Netflix? <b className="hover:underline">Sign up now </b>
            </p>
          ) : (
            <p>
              User Already Exist , <b className="hover:underline"> Sign In now </b>
            </p>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
