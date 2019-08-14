import React from "react";

const OperatorButton = (props) => {
  return (
    <button onClick={() => props.addOperator(props.operatorValue)} className="operatorButton">
      {props.buttonValue}
    </button>
  );
};

export default OperatorButton;