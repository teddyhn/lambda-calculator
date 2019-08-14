import React, { useState } from "react";

//import any components needed
import SpecialButton from "./SpecialButton";

//Import your array data to from the provided data file
import { specials } from "../../../data";

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecial] = useState(specials);

  return (
    <div className="specialContainer">
      {specials.map(item => (
        <SpecialButton specialFunction={props.specialFunction} buttonValue={item} />
      ))}
    </div>
  );
};

export default Specials;
