import React from "react";
import Card from "../Card/Card";
import { FaBell, FaUser } from "react-icons/fa";

function Topbar() {
  return (
    <div className="topBar">
      <div className="left-area">Analytics</div>
      <div className="right-area">
        <div className="notification">
          <FaBell />
        </div>
        <div className="user">
          <div className="user-pic">
            <FaUser />
          </div>
          <div className="user-name">Amit Raj</div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
