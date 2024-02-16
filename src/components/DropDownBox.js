import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const DropDownBox = () => {
    const navigate = useNavigate()
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropDownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error")
        // An error happened.
      });
  };
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={handleDropDownToggle}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <img
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            alt="user-logo"
            className="w-8 h-8"
          />
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      {showDropdown && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div className="py-1" role="none">
            <a
              href="/browse"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Account settings
            </a>
            <a
              href="/browse"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              Support
            </a>

            {/* <form method="POST" action="#" role="none"> */}
              <button
                onClick={handleSignout}
                type="submit"
                className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-3"
              >
                Sign out
              </button>
            {/* </form> */}
          </div>
        </div>
      )}
    </div>
  );
};
export default DropDownBox;
