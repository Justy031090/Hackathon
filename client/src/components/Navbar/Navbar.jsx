import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <a href="#">Home</a>
      <input type="text" placeholder="Input your keywords here...." />
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
