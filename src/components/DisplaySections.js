import React from "react";
import { DisplayEducations } from "./educational_experiences/DisplayEducations";
import { DisplayGenerals } from "./general_informations/DisplayGenerals";
import { DisplayPracticals } from "./practical_experiences/DisplayPracticals";

export let DisplayCV = (props) => {
  let {
    name,
    email,
    number,
    schoolName,
    programTitle,
    dateOfStudy,
    companyName,
    positionTitle,
    tasks,
    dateFrom,
    dateUntil,
  } = props;
  return (
    <div className="cv-display">
      <p>Displaying CV After Submit</p>
      <DisplayGenerals name={name} email={email} number={number} />
      <DisplayEducations
        schoolName={schoolName}
        programTitle={programTitle}
        dateOfStudy={dateOfStudy}
      />
      <DisplayPracticals
        companyName={companyName}
        positionTitle={positionTitle}
        tasks={tasks}
        dateFrom={dateFrom}
        dateUntil={dateUntil}
      />
    </div>
  );
};
