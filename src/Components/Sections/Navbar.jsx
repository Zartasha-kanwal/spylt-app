import React from "react";
import logo from "../Assets/images/nav-logo.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 z-50 md:p-9 p-3">
        <img src={logo} className="md:w-24 w-20" />
      </nav>
    </div>
  );
};

export default Navbar;
