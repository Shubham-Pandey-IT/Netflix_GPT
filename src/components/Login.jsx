import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignin,setIsSignin] = useState(true);
  const handleSignin = ()=>{
    setIsSignin(!isSignin);
  }

  return (
    <div className="relative w-full h-screen">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg"
        alt="body_image"
      />
      <form
        action=""
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] transform -translate-x-1/2 -translate-y-1/2 bg-black/55 p-6 rounded-md flex flex-col gap-4 text-white"
      >
        <h2 className="text-2xl mt-2 font-bold">{isSignin?"Sign In":"Sign Up"}</h2>
        {!isSignin?<input
          type="text"
          placeholder="Full Name"
          className="p-2 rounded mt-4 bg-gray-500/50 h-[60px] focus:outline-none"
        />:null}
        <input
          type="text"
          placeholder="Email Address.."
          className="p-2 rounded mt-2 bg-gray-500/50 h-[60px] focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-1.5 rounded mt-2 bg-gray-500/50 h-[60px] focus:outline-none"
        />
        <button className="p-1.5 mt-4 bg-red-600 rounded hover:bg-red-700">
          {isSignin?"Sign In":"Sign Up"}
        </button>
        <div className="flex items-center space-x-1">
          <p className="p-2 text-gray-400">{isSignin?"New to Netflix?":"Already Registered!"}</p>
          <p className="cursor-pointer" onClick={handleSignin}>{isSignin?"Sign Up":"Sign In"}</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
