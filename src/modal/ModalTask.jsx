import React from "react";
import noteLogos from "../assets/images/noteLogos.png";
import goalsLogo from "../assets/images/goalsLogo.png";
import vectorClose from "../assets/images/vectorClose.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/ModalTask.scss";
import { useDispatch } from "react-redux";
import { changeStep } from "../redux/action/global";

export default function CreateTask() {
  const dispatch = useDispatch();
  return (
    <div className="task__outside modal-backdrop">
      <div className="task__container position-relative">
        <div className="task__close position-absolute top-0 end-0">
          <button onClick={() => dispatch(changeStep(""))}>
            <img src={vectorClose} alt="" />
          </button>
        </div>
        <div className="task__wrapper">
          <h1>Which task you want to create?</h1>
          <div className="task__button__note">
            <button
              className="task__note"
              onClick={() => dispatch(changeStep("InputNote"))}
            >
              <img src={noteLogos} alt="" />
              Note
            </button>
          </div>
          <div className="task__button__goals">
            <button
              className="task__goals"
              onClick={() => dispatch(changeStep("CreateGoals"))}
            >
              <img src={goalsLogo} alt="" />
              Goals
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
