import React from "react";

export let DisplayPracticals = (props) => {
  let {
    companyName,
    positionTitle,
    tasks,
    dateFrom,
    dateUntil,
    editExperiences,
  } = props;
  // console.log(editExperiences);
  return !editExperiences ? (
    <fieldset>
      <legend>Practical Informations</legend>
      <p>
        <label>Company Name:</label>
        <span>{companyName}</span>
      </p>
      <p>
        <label>Job Title:</label>
        <span>{positionTitle}</span>
      </p>
      <p>
        <label>Job Responsibility:</label>
        <span>{tasks}</span>
      </p>
      <p>
        <label>Started From:</label>
        <span>{dateFrom}</span>
      </p>
      <p>
        <label>Continued Until:</label>
        <span>{dateUntil}</span>
      </p>
    </fieldset>
  ) : (
    false
  );
};
