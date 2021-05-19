import React from "react";

export function HandlePracticalButtonComponent(props) {
  let { isEditing, handleClick } = props;
  // console.log(isEditing)
  return !isEditing ? (
    <button type="submit">submit</button>
  ) : (
    <button onClick={handleClick}>edit</button>
  );
}
