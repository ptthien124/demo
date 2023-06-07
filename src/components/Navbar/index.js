import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
    </div>
  );
}

export default Navbar;
