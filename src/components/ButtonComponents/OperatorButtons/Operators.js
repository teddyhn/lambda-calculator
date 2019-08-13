import React, { useState } from "react";

//import any components needed
import OperatorButton from "./OperatorButton";

//Import your array data to from the provided data file
import { operators } from "../../../data";

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperator] = useState(operators);

  // const changeOperator = (operator) => {
  //   setOperator(operatorState => this.value);
  // };

  return (
    <div className="operatorContainer">
      {operators.map(item => (
        <OperatorButton buttonValue={item.char} />
      ))}
    </div>
  );
};

export default Operators;