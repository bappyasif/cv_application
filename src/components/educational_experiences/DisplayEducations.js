import React from "react";

export let DisplayEducations = (props) => {
  let { schoolName, programTitle, dateOfStudy } = props;
  return (
    <fieldset>
      <legend>Educational Informations</legend>
      <p>
        <label>
          School Name: <span>{schoolName}</span>
        </label>
      </p>
      <p>
        <label>
          Program Titile: <span>{programTitle}</span>
        </label>
      </p>
      <p>
        <label>
          Date Of Study: <span>{dateOfStudy}</span>
        </label>
      </p>
    </fieldset>
  );
};
