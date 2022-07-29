import React from "react";
import { BsFillStopFill, BsFillPlayFill } from "react-icons/bs";
import { RiRestartLine } from "react-icons/ri";
function BtnComponent(props) {
  return (
    <div className="btn_box">
      {props.status == 1 && (
        <button
          className="stopwatch-btn stopwatch-btn-stop"
          onClick={props.stop}
        >
          <BsFillStopFill />
        </button>
      )}
      {props.status == 0 && (
        <button
          className="stopwatch-btn stopwatch-btn-resume"
          onClick={props.resume}
        >
          <BsFillPlayFill />
        </button>
      )}
      <button
        className="stopwatch-btn stopwatch-btn-reset"
        onClick={props.reset}
      >
        <RiRestartLine color="#fff" />
      </button>
    </div>
  );
}

export default BtnComponent;
