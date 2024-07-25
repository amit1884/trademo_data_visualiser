import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import "./sidebar.scss";
import {
  FaHamburger,
  FaProductHunt,
  FaShippingFast,
  FaSupple,
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <FaHamburger />
      </div>
      <div className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <img src={Logo} alt="" />
          <div className="company-name">Trademo</div>
        </div>
        <div className="top-menus">
          <Link to="/" className="menu-item">
            <div>
              <FaProductHunt />
            </div>
            <div className="menu-label">Products</div>
          </Link>
          <Link to="/supplies" className="menu-item">
            <div>
              <FaSupple />
            </div>
            <div className="menu-label">Supplies</div>
          </Link>
          <Link to="/shipment" className="menu-item">
            <div>
              <FaShippingFast />
            </div>
            <div className="menu-label">Shipments</div>
          </Link>
        </div>
        <div className="bottom-menu">
          <Link to="/setting" className="menu-item">
            <div>
              <FaGear />
            </div>
            <div className="menu-label">Settings</div>
          </Link>
          <div className="user-profile">
            <div className="user-image"></div>
            <div className="user-data">
              <p>
                Amit Raj <br />
                Software Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
