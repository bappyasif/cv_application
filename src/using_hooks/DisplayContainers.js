import React from "react";
import { EducationalData } from "./display_data/EducationalData";
import { GeneralData } from "./display_data/GeneralData";
import { PracticalData } from "./display_data/PracticalData";

export function DisplayContainers(props) {
  // let {name, email, mobile} = props.general;
  // console.log(props.general, name, email, mobile)
  return (
    <div className="cv-display" style={{marginBottom: "38px"}}>
      <p>Displaying CV After Submit</p>
      <GeneralData general={props.general} />
      <EducationalData educational={props.educational} />
      <PracticalData practical={props.practical} />
    </div>
  );
}
