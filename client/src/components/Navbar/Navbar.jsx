import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <input type="text" placeholder="Input your keywords here...." />
      <button>
        <Link to="/search">Search</Link>
      </button>
      <Dropdown defaultOption="Select a Category">
        <option>Pop</option>
        <option>Rock</option>
        <option>EDM</option>
      </Dropdown>
      <Dropdown defaultOption="Select a Language">
        <option>Hebrew</option>
        <option>English</option>
        <option>Arabic</option>
      </Dropdown>
    </nav>
  );
};
export default Navbar;
