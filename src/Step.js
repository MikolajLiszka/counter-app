import React from "react";

function Step (props) {
    return(<div className="stepDiv">
    {/* <input
      ref={(data) => {
        this._inputStep = data;
      }}
      type="number"
    /> */}

    <input onChange={(event) => props.changeStep(event.target.value)} type="number"/>
  </div>
  );
  
};

export default Step;
