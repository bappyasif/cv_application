import React, { Component } from "react";
import { Educational_Informations } from "./educational_experiences/Educational_Informations";
import { GeneralInformation } from "./general_informations/General_Information";
import { Practical_Informations } from "./practical_experiences/Practical_Informations";
import { DisplayCV } from "./DisplaySections";
export class ContainerForCVApplication extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      number: "",
      generalEdit: true,
      generalData: [],

      schoolName: "",
      programTitle: "",
      dateOfStudy: "",
      editEducations: true,
      educationalData: [],

      companyName: "",
      positionTitle: "",
      tasks: "",
      dateFrom: "",
      dateUntil: "",
      editExperiences: true,
      practicalData: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleGeneralInformationSubmit = this.handleGeneralInformationSubmit.bind(
      this
    );
    this.handleSubmitEducationalInformation = this.handleSubmitEducationalInformation.bind(
      this
    );
    this.handleSubmitPracticalInformation = this.handleSubmitPracticalInformation.bind(
      this
    );
  }

  handleChange(evt) {
    let { name, value } = evt.target;
    this.setState({
      [name]: [value],
    });
  }

  handleGeneralInformationSubmit(evt) {
    evt.preventDefault();
    let { name, email, number } = this.state;
    console.log(this.state.generalData);
    this.setState({
      generalData: this.state.generalData.concat(name, email, number),
      name: "",
      email: "",
      number: "",
      generalEdit: false,
    });
    console.log(this.state.generalData[0]);
  }

  handleSubmitEducationalInformation(evt) {
    evt.preventDefault();
    this.setState({
      educationalData: this.state.educationalData.concat(
        this.state.schoolName,
        this.state.programTitle,
        this.state.dateOfStudy
      ),
      schoolName: "",
      programTitle: "",
      dateOfStudy: "",
    });
    console.log(this.state.educationalData);
  }

  handleSubmitPracticalInformation(evt) {
    evt.preventDefault();
    let { companyName, positionTitle, tasks, dateFrom, dateUntil } = this.state;
    this.setState({
      practicalData: this.state.practicalData.concat([
        companyName,
        positionTitle,
        tasks,
        dateFrom,
        dateUntil,
      ]),
      companyName: "",
      positionTitle: "",
      tasks: "",
      dateFrom: "",
      dateUntil: "",
    });
    console.log(this.state.practicalData);
  }

  render() {
    let {
      name,
      email,
      number,
      schoolName,
      programTitle,
      dateOfStudy,
      companyName,
      positionTitle,
      tasks,
      dateFrom,
      dateUntil,
      generalEdit
    } = this.state;
    return (
      <div>
        <GeneralInformation
          name={name}
          email={email}
          number={number}
          handleChange={this.handleChange}
          handleSubmit={this.handleGeneralInformationSubmit}
        // isEdit={generalEdit}
        />
        <Educational_Informations
          schoolName={schoolName}
          programTitle={programTitle}
          dateOfStudy={dateOfStudy}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmitEducationalInformation}
        />
        <Practical_Informations
          companyName={companyName}
          positionTitle={positionTitle}
          tasks={tasks}
          dateFrom={dateFrom}
          dateUntil={dateUntil}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmitPracticalInformation}
        />
        <DisplayCV
          name={name}
          email={email}
          number={number}
          schoolName={schoolName}
          programTitle={programTitle}
          dateOfStudy={dateOfStudy}
          companyName={companyName}
          positionTitle={positionTitle}
          tasks={tasks}
          dateFrom={dateFrom}
          dateUntil={dateUntil}
        />

      </div>
    );
  }
}
