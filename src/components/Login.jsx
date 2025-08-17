import React, { useState, useRef } from "react";
import Header from "./Header";
import { isValidData } from "../utils/validation";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { NET_BODY_IMG, PHOTO_URL } from "../utils/constants";

const Login = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [validStatus, setValidStatus] = useState(null);
  const dispatch = useDispatch();

  const handleSignin = () => {
    setIsSignin(!isSignin);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const togleSigninForm = () => {
    const message = isValidData(email.current.value, password.current.value);
    setValidStatus(message);

    if (message) return;

    if (!isSignin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
        // name.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
        //name.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "" + errorMessage);
        });
    }
  };

  return (
    <div className="relative w-full h-screen">
      <Header />
      <img src={NET_BODY_IMG} alt="body_image" />
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] transform -translate-x-1/2 -translate-y-1/2 bg-black/55 p-6 rounded-md flex flex-col gap-4 text-white"
      >
        <h2 className="text-2xl mt-2 font-bold">
          {isSignin ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignin ? (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 rounded mt-4 bg-gray-500/50 h-[60px] focus:outline-none"
          />
        ) : null}
        <input
          ref={email}
          type="text"
          placeholder="Email Address.."
          className="p-2 rounded mt-2 bg-gray-500/50 h-[60px] focus:outline-none"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-1.5 rounded mt-2 bg-gray-500/50 h-[60px] focus:outline-none"
        />
        <p className="text-red-500 font-bold">{validStatus}</p>
        <button
          className="p-1.5 mt-4 bg-red-600 rounded hover:bg-red-700 cursor-pointer"
          onClick={togleSigninForm}
        >
          {isSignin ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex items-center space-x-1">
          <p className="p-2 text-gray-400">
            {isSignin ? "New to Netflix?" : "Already Registered!"}
          </p>
          <p className="cursor-pointer" onClick={handleSignin}>
            {isSignin ? "Sign Up" : "Sign In"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
