import React from "react";

export function InputElement(props) {
  let { type, name, value, handleChange } = props;
// console.log(type, name, value, handleChange)
  return (
    <div style={{width: "47vw", margin: "auto"}}>
      <label>
        {name}
        <input type={type} name={name} value={value} onChange={handleChange} style={{width: "100%"}} />
      </label>
    </div>
  );
}
