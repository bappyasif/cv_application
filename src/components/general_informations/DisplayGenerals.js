import React from "react";

export let DisplayGenerals = (props) => {
  let { name, email, number } = props;
  return (
    <fieldset>
      <legend>General Information</legend>
      <p>
        <label>
          Name: <span>{name}</span>
        </label>
      </p>
      <p>
        <label>
          Email: <span>{email}</span>
        </label>
      </p>
      <p>
        <label>
          Mobile: <span>{number}</span>
        </label>
      </p>
    </fieldset>
  );
};
