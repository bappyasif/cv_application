import React from "react";

export let DisplayEducations = (props) => {
  let { schoolName, programTitle, dateOfStudy, editEducations } = props;
  return !editEducations ? (
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
        <span>{dateOfStudy}</span>
      </p>
    </fieldset>
  ) : (
    false
  );
};
