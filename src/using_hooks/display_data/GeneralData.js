import React from "react";

export function GeneralData(props) {
  let { name, email, mobile } = props.general;
//   console.log(name, email, mobile);
  return props.general ? (
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
        <span>{mobile}</span>
      </p>
    </fieldset>
  ) : (
    false
  );
}
