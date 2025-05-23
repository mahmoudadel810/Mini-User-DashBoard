import React from "react";
import SideMenu from "../../components/sideMenu/index.js";

const UsersLayout = ({ children }) => {
  return (
    <div className="flex">
      <SideMenu />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default UsersLayout;
