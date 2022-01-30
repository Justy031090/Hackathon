import React from "react";
import "./Dropdown.css";
const Dropdown = ({ children, defaultOption }) => {
  return (
    <select>
      {<option hidden>{defaultOption}</option>}
      {children}
    </select>
  );
};
export default Dropdown;
