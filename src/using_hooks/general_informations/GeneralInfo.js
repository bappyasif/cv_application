import React, { useEffect, useState } from "react";
import { InputComponent } from "../form_components/InputComponent";
import { HandleGeneralDataButton } from "./HandleGeneralDataButton";

export function GeneralInfo(props) {
  // let general = props.data;
  let [data, setData] = useState(null);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setNumber] = useState("");
  let [isEditing, setIsEditing] = useState(false);

  let handleChange = (evt) => {
    let { name, value } = evt.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "mobile") {
      setNumber(value);
    }
  };

  let general = props.data;
  general = { name, email, mobile };

  let submitHandler = (evt) => {
    evt.preventDefault();

    if (name && email && mobile) {
      setData({ name, email, mobile });
      props.submitData(general);
      setName("");
      setEmail("");
      setNumber("");
      setIsEditing(!isEditing);
    } else {
      alert("please enter all fields");
    }
    // console.log(data, general);
  };

  let editGeneral = (evt) => {
    evt.preventDefault();
    // console.log("edit", data, "<>", data.name, general, name === "");
    setName(data.name);
    setEmail(data.email);
    setNumber(data.mobile);
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <fieldset className="cv-sections">
        <form onSubmit={submitHandler}>
          <legend>General Information</legend>
          <InputComponent
            type="text"
            name="name"
            value={name}
            handleChange={handleChange}
          />
          <InputComponent
            type="email"
            name="email"
            value={email}
            handleChange={handleChange}
          />
          <InputComponent
            type="number"
            name="mobile"
            value={mobile}
            handleChange={handleChange}
          />
          {/* <button type="submit">submit</button> */}
          <HandleGeneralDataButton
            isEditing={isEditing}
            handleClick={editGeneral}
          />
        </form>
      </fieldset>
    </div>
  );
}
