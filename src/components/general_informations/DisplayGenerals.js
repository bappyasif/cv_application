import React from "react";

export let DisplayGenerals = (props) => {
  let { name, email, number, generalEdit } = props;
  return !generalEdit ? (
    <fieldset>
      <legend>General Information</legend>
      <p>
        <label>Name:</label>
        <span>{name}</span>
      </p>
      <p>
        <label>Email:</label>
        <span>{email}</span>
      </p>
      <p>
        <label>Mobile:</label>
        <span>{number}</span>
      </p>
    </fieldset>
  ) : (
    false
  );
};
