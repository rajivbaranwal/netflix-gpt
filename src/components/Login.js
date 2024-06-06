import React, { useState } from "react";
import { Header } from "./Header";
export const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0  bg-black text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl font-bold py-4 my-2 mx-2 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 m-2 w-full bg-gray-900 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 m-2 w-full bg-gray-900 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 m-2 w-full bg-gray-900 rounded-md"
        />

        <button className="p-2 m-2 my-8 bg-red-600 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="px-2 cursor-pointer">
          {isSignInForm
            ? "New to Netflix Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
