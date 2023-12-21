import React from "react";
import Add from "../img/addAvatar.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        {/* top text */}
        <span className="logo">Chat App</span>
        <span className="title">Login</span>

        {/* form */}
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign In!!</button>
        </form>

        {/* login? text */}
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
