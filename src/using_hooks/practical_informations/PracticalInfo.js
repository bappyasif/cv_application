import React, { useState } from "react";
import { InputComponent } from "../form_components/InputComponent";
import { HandlePracticalButtonComponent } from "./HandlePracticalButtonComponent";

export function PracticalInfo(props) {
  let [companyData, setData] = useState(null);
  let [companyName, setName] = useState("");
  let [positionTitle, setTitle] = useState("");
  let [jobDescription, setDescription] = useState("");
  let [dateFrom, setFrom] = useState("");
  let [dateUntil, setUntil] = useState("");
  let [isEditing, setIsEditing] = useState(false);
  let { practical, uploadData } = props;

  let handleChange = (evt) => {
    let { name, value } = evt.target;
    if (name === "companyName") {
      setName(value);
    } else if (name === "positionTitle") {
      setTitle(value);
    } else if (name === "jobDescription") {
      setDescription(value);
    } else if (name === "dateFrom") {
      setFrom(value);
    } else if (name === "dateUntil") {
      setUntil(value);
    }
  };

  let handleSubmit = (evt) => {
    evt.preventDefault();
    if (
      companyName &&
      positionTitle &&
      jobDescription &&
      dateFrom &&
      dateUntil
    ) {
      practical = {
        companyName,
        positionTitle,
        jobDescription,
        dateFrom,
        dateUntil,
      };
      uploadData(practical);
      setData(practical);

      setName(companyName);
      setTitle(positionTitle);
      setDescription(jobDescription);
      setFrom(dateFrom);
      setUntil(dateUntil);
      setIsEditing(!isEditing);

      setName("");
      setTitle("");
      setDescription("");
      setFrom("");
      setUntil("");
    } else {
      alert("please enter all fields");
    }
  };

  let editPractical = (evt) => {
    evt.preventDefault();
    setName(companyData.companyName);
    setTitle(companyData.positionTitle);
    setDescription(companyData.jobDescription);
    setFrom(companyData.dateFrom);
    setUntil(companyData.dateUntil);
    setIsEditing(!isEditing);
  };

  return (
    <fieldset className="cv-sections">
      <legend>Practical Informations</legend>
      <form onSubmit={handleSubmit}>
        <InputComponent
          type="text"
          name="companyName"
          value={companyName}
          handleChange={handleChange}
        />
        <InputComponent
          type="text"
          name="positionTitle"
          value={positionTitle}
          handleChange={handleChange}
        />
        <InputComponent
          type="text"
          name="jobDescription"
          value={jobDescription}
          handleChange={handleChange}
        />
        <InputComponent
          type="date"
          name="dateFrom"
          value={dateFrom}
          handleChange={handleChange}
        />
        <InputComponent
          type="date"
          name="dateUntil"
          value={dateUntil}
          handleChange={handleChange}
        />
        <HandlePracticalButtonComponent
          isEditing={isEditing}
          handleClick={editPractical}
        />
      </form>
    </fieldset>
  );
}
