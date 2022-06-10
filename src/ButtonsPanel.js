import React from "react";
import "./ButtonsPanel.css";

function ButtonsPanel(props) {
  return (
    <div className="buttonsPanel">
      <button
        onClick={() => {
          props.buttonMethod("add");
        }}
      >
        Add 1
      </button>
      <button
        onClick={() => {
          props.buttonMethod("reinit");
        }}
      >
        ReInit
      </button>
      <button
        onClick={() => {
          props.buttonMethod("addX");
        }}
      >
        Add X
      </button>
      <button
        onClick={() => {
          props.buttonMethod("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default ButtonsPanel;
