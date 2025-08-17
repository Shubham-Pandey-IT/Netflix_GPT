import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGPTsearchView } from "../utils/GPTSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.GPT.showGPTsearch);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGPTsearchView());
  };

  return (
    <div className="absolute w-full bg-gradient-to-b from-black p-8 flex justify-between z-20">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center gap-2">
          <button
            className="py-3 px-6 mt-1 text-lg cursor-pointer hover:bg-neutral-700 bg-neutral-600 text-amber-300 rounded-2xl"
            onClick={handleGptSearch}
          >
            {showGPTSearch ? "🔙 Home" : "GPT_Search"}
          </button>
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="h-12 w-12 border-r-2 object-cover rounded-full"
          />
          <h2
            className="text-red-500 cursor-pointer font-bold p-2"
            onClick={handleSignout}
          >
            Sign Out
          </h2>
        </div>
      )}
    </div>
  );
};

export default Header;
