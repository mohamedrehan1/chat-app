import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <span className="logo">Lama Chat</span>
        <div className="user">
          <img alt="" />
          <button>logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
