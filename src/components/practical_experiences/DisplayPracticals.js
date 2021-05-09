import React from "react";

export let DisplayPracticals = (props) => {
  let { companyName, positionTitle, tasks, dateFrom, dateUntil } = props;
  return (
    <fieldset>
      <legend>Practical Informations</legend>
      <p>
        <label>
          Company Name: <span>{companyName}</span>
        </label>
      </p>
      <p>
        <label>
          Job Title: <span>{positionTitle}</span>
        </label>
      </p>
      <p>
        <label>
          Job Responsibility: <span>{tasks}</span>
        </label>
      </p>
      <p>
        <label>
          Started From: <span>{dateFrom}</span>
        </label>
      </p>
      <p>
        <label>
          Continued Until: <span>{dateUntil}</span>
        </label>
      </p>
    </fieldset>
  );
};
