import React from "react";
import { FaBell } from "react-icons/fa";
import "../styling/SideBar.css";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="top-icon">
        <FaBell />
      </div>
      <div className="button-container">
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
      </div>
      <div className="bottom-icon">
        <FaBell />
      </div>
    </div>
  );
};

export default SideBar;
