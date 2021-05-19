import React, { useState } from "react";
import { DisplayContainers } from "./DisplayContainers";
import { EducationalInfo } from "./educational_informations/EducationalInfo";
import { GeneralInfo } from "./general_informations/GeneralInfo";
import { PracticalInfo } from "./practical_informations/PracticalInfo";

export function CVApplicationUsingHooks() {
  let [general, setGeneral] = useState(null);
  let handleGeneral = (data) => {
    setGeneral(data);
  };
  let [educational, setEducational] = useState(null);
  let handleEducational = (data) => {
    setEducational(data);
  };
  let [practical, setPractical] = useState(null);
  let handlePractical = (data) => {
    setPractical(data);
  };

  return (
    <div>
      <p>Using Hooks And Functional Components Only</p>
      <GeneralInfo data={general} submitData={handleGeneral} />
      <EducationalInfo
        educational={educational}
        uploadData={handleEducational}
      />
      <PracticalInfo practical={practical} uploadData={handlePractical} />
      <DisplayContainers
        general={general ? general : false}
        educational={educational ? educational : false}
        practical={practical ? practical : false}
      />

      {practical ? <p>{practical.companyName}</p> : false}
      {educational ? <p>{educational.schoolName}</p> : false}
      {general ? <p>{general.name}</p> : false}
    </div>
  );
}
