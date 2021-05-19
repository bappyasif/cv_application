import React from "react";

export function PracticalData(props) {
  let { companyName, positionTitle, jobDescriptions, dateFrom, dateUntil } =
    props.practical;
  return (
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
        <span>{jobDescriptions}</span>
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
  );
}
