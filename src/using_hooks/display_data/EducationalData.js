import React from "react";

export function EducationalData(props) {
  let { schoolName, programTitle, studyDate} = props.educational;
  return (
    <fieldset>
      <legend>Educational Informations</legend>
      <p>
        <label>School Name:</label>
        <span>{schoolName}</span>
      </p>
      <p>
        <label>Program Titile:</label>
        <span>{programTitle}</span>
      </p>
      <p>
        <label>Date Of Study:</label>
        <span>{studyDate}</span>
      </p>
    </fieldset>
  );
}
