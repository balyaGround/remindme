import React from "react";
import { Link } from "react-router-dom";
import pp from "../../img/Ellipse 34.png";
import "./editStyle.css";
export default function Edit() {
  return (
    <div>
      <div className="profile">
        <div className="text-black">
          <h1>Edit Profile</h1>
        </div>
        <div className="wrapper-edit">
          <div className="head">
            <img src={pp} alt="profile pictures" style={{ width: "200px" }} />
          </div>
          <div className="content-edit">
            <form>
              <div className="label">
                <h5 htmlfor="" className="">
                  First Name
                </h5>
                <input />
              </div>
              <div className="label">
                <h5 htmlfor="" className="">
                  Last Name
                </h5>
                <input />
              </div>
              <div className="label">
                <h5 htmlfor="" className="">
                  Username
                </h5>
                <input />
              </div>
              <div className="label">
                <h5 htmlfor="" className="">
                  Email
                </h5>
                <input />
              </div>
              <div>
                <h5 htmlfor="" className="">
                  Password
                </h5>
                <input type="password" className="input-password" />
              </div>
              <div>
                <Link to="/profile">
                  <button type="submit" className="btn-save">
                    Save
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
