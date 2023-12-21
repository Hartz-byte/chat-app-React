import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img
          src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
          alt=""
        />
        <span>Harsh</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
