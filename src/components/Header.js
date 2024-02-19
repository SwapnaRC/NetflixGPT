import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { addUSer, removeUSer } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import DropDownBox from "./DropDownBox";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUSer({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUSer());
        navigate("/")
      }
    });
    // unsubscribe and component unmounts 
    return () => unsubscribe()
  }, []);
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between w-full">
      <img src={LOGO_URL} alt="netflix-logo" className="w-44" />
      {user && (
        <DropDownBox
        />
      )}
    </div>
  );
};

export default Header;
