import React from "react";
import { LOGO_URL } from "../utils/constants";
import DropDownBox from "./DropDownBox";
import { useSelector } from "react-redux";
const Header = () => {
  const user = useSelector((store) => store.user);
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between w-full">
      <img src={LOGO_URL} alt="netflix-logo" className="w-44" />
      {/* <img
        src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
        alt="user-logo"
        className="w-8 h-8"
      /> */}
      {user && <DropDownBox UserDisplayName={user.displayName ? user.displayName : user.email} />}
    </div>
  );
};

export default Header;
