import React, { useState } from "react";
import pp from "../../assets/images/Ellipse 34.png";
import logout from "../../assets/images/logout.png";
import "./navbarStyle.css";
import * as FiIcons from "react-icons/fi";
import { Link } from "react-router-dom";
import CreateTask from "../../modal/CreateTask";
import PlusCreateTask from "../../assets/images/PlusCreateTask.png";
function Navbar({ ...props }) {
  const [open, setOpen] = useState(false);
  const { setStep } = props;
  return (
    <>
      <nav className="sidebar">
        <div className="sidebar__top">
          <div className="sidebarItems headers">
            <Link to="/newUser">
              <img src={pp} alt="" />
              <p>Amalia Nurlita</p>
            </Link>
          </div>
          <div className=" Task" onClick={() => setStep("CreateNote")}>
            <FiIcons.FiPlusCircle />
            <h5 style={{ marginTop: "5px", marginLeft: "4px" }}>Create a Task</h5>
          </div>
          <div className="sidebarItems content">
            <Link to="/AllNote">
              <p>All Notes</p>
            </Link>
          </div>
          <div className="sidebarItems content">
            <Link to="/allGoals">
              <p>All Goals</p>
            </Link>
          </div>
          <div className="sidebarItems content">
            <Link to="/Profile">
              <p>My Profile</p>
              {/* <div className="my-profile text-black">
                <p>My Profile</p>{" "}
                <span>
                  <FiIcons.FiArrowRight />
                </span>
              </div> */}
            </Link>
          </div>
        </div>
        <div className="sidebar__bottom">
          <li className="Logout">
            <Link to="/">
              <img src={logout} alt="logout" />
              <span>Logout</span>
            </Link>
          </li>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
