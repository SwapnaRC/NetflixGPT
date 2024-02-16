import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUSer, removeUSer } from "../utils/userSlice";
import Error from "./Error";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/error",
      element: <Error />,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
      } else {
        // User is signed out
        dispatch(removeUSer());
      }
    });
  }, []);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
