import React, { useState } from "react";
import { InputComponent } from "../form_components/InputComponent";
import { HandleEducationalButtonComponent } from "./HandleEducationalButtonComponent";

export function EducationalInfo(props) {
  let [schoolData, setData] = useState("");
  let [schoolName, setName] = useState("");
  let [programTitle, setProgram] = useState("");
  let [studyDate, setDate] = useState("");
  let [isEditing, setIsEditing] = useState(false);
  let { educational, uploadData } = props;
  let handleChange = (evt) => {
    let { name, value } = evt.target;
    if (name === "schoolName") {
      setName(value);
    } else if (name === "programTitle") {
      setProgram(value);
    } else if (name === "studyDate") {
      setDate(value);
    }
  };
  let handleSubmit = (evt) => {
    evt.preventDefault();
    if (schoolName && programTitle && studyDate) {
      educational = { schoolName, programTitle, studyDate };
      uploadData(educational);
      setData(educational);

      setName(schoolName);
      setProgram(programTitle);
      setDate(studyDate);
      setIsEditing(!isEditing);

      setName("");
      setProgram("");
      setDate("");
    } else {
      alert("please enter all fields");
    }
  };
  let editEducational = (evt) => {
    evt.preventDefault();
    setName(schoolData.schoolName);
    setProgram(schoolData.programTitle);
    setDate(schoolData.studyDate);
    setIsEditing(!isEditing);
  };
  return (
    <fieldset className="cv-sections">
      <legend>Educational Information</legend>
      <form onSubmit={handleSubmit}>
        <InputComponent
          type="text"
          name="schoolName"
          value={schoolName}
          handleChange={handleChange}
        />
        <InputComponent
          type="text"
          name="programTitle"
          value={programTitle}
          handleChange={handleChange}
        />
        <InputComponent
          type="date"
          name="studyDate"
          value={studyDate}
          handleChange={handleChange}
        />
        <HandleEducationalButtonComponent
          isEditing={isEditing}
          handleClick={editEducational}
        />
      </form>
    </fieldset>
  );
}
