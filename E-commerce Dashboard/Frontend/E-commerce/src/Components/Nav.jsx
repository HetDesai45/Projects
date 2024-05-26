import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.jpeg"

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div className="container">
      <img src={logo} alt="logo" height="75px" width="100px" className="logo"/>
      {auth ? (
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
          <li>
            <Link to="/update">Update Product</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to="/signup">
              Logout({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="navbar">
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
