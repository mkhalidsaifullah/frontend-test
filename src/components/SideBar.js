import React from "react";
import { FaBell } from "react-icons/fa";
import "../styling/SideBar.css";
// import VButton from "./VButton";
const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="top-icon">
        <FaBell />
      </div>
      <div className="button-container">
        {/* <VButton /> */}
        {/* <button>Button 1</button>


        <button>Button 2</button>
        <button>Button 3</button> */}
      </div>
      <div className="bottom-icon">
        <FaBell />
      </div>
    </div>
  );
};

export default SideBar;
