import React, { useContext } from "react";
import { MyContext } from "../context";
const StageTwo = () => {
  const context = useContext(MyContext);
  return (
    <>
      <div className="result-wrapper">
        <h3>The Loser is:</h3>
        <div>{context.state.result}</div>
      </div>
      <div className="action_button">START OVER</div>
      <div className="action_button btn_2">GET NEW LOSER</div>
    </>
  );
};

export default StageTwo;
