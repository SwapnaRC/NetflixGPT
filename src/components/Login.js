import React, { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUSer } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [isSignInform, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleToggleForm = () => {
    setIsSignInForm(!isSignInform);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleBtnClick = () => {
    // Validation for form data
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMessage(msg);
    if (msg) return;
    // signup / sign in logic is here
    if (!isSignInform) {
      // Signup logic is here
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: "Swapna",
            photoURL:
              "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg",
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUSer({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
              // Profile updated!
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          console.log(error);
          setErrorMessage("Invalid Email Id or password");
        });
    }
  };
  return (
    <div className=" overflow-auto">
      <Header />
      <div className="absolute  ">
        <img
          alt="background-login"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12  bg-black opacity-85 w-4/12 mt-10  mx-auto right-0 left-0 text-white"
      >
        <h1 className="font-bold text-4xl py-4">
          {isSignInform ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInform && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-700 border-white opacity-100 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="E-mail Address"
          className="p-4 my-2 w-full bg-gray-700 w-[250]px border-white opacity-100 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700 border-white opacity-100 rounded-lg"
        />
        <p className="text-red-600 py-3 text-sm">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-600 w-full rounded-lg"
          onClick={handleBtnClick}
        >
          {isSignInform ? "Sign In" : "Sign Up"}
        </button>
        <div className="p-4 m-4 cursor-pointer" onClick={handleToggleForm}>
          {isSignInform ? (
            <p>
              New to Netflix? <b className="hover:underline">Sign up now </b>
            </p>
          ) : (
            <p>
              User Already Exist ,
              <b className="hover:underline"> Sign In now </b>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
