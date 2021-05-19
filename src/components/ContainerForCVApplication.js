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

      formEdit: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleGeneralInformationSubmit = this.handleGeneralInformationSubmit.bind(
      this
    );
    this.handleGeneralDataEdit = this.handleGeneralDataEdit.bind(this);

    this.handleSubmitEducationalInformation = this.handleSubmitEducationalInformation.bind(
      this
    );
    this.handleEditEducationalData = this.handleEditEducationalData.bind(this);

    this.handleSubmitPracticalInformation = this.handleSubmitPracticalInformation.bind(
      this
    );
    this.handleEditPracticalExperiences = this.handleEditPracticalExperiences.bind(
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
    // console.log is a synchronous statement, so console logging will show data after asynchronous call of setState is done
    console.log(this.state.generalData, name, email, number, "setting");
    name && email && number
      ? this.setState({
          generalData: { name, email, number },
          generalEdit: !this.state.generalEdit,
          name: "",
          email: "",
          number: "",
        })
      : false;
    // console.log(this.state.generalData[0]);
  }

  handleGeneralDataEdit(evt) {
    evt.preventDefault();
    let { name, email, number, generalData } = this.state;
    console.log(generalData, name, email, number, "edit!!");

    this.setState({
      name: generalData.name,
      email: generalData.email,
      number: generalData.number,
      generalEdit: true,
    });

    name && email && number
      ? this.setState({
          name: name,
          email: email,
          number: number,
          generalEdit: false,
        })
      : false;
  }

  handleSubmitEducationalInformation(evt) {
    let { schoolName, programTitle, dateOfStudy } = this.state;
    evt.preventDefault();
    schoolName && programTitle && dateOfStudy
      ? this.setState({
          educationalData: {
            schoolName,
            programTitle,
            dateOfStudy,
          },
          editEducations: !this.state.editEducations,
          schoolName: "",
          programTitle: "",
          dateOfStudy: "",
        })
      : false;
    // console.log(this.state.educationalData);
  }

  handleEditEducationalData(evt) {
    evt.preventDefault();
    let { schoolName, programTitle, dateOfStudy, educationalData } = this.state;
    // console.log("editr eductaion", educationalData, educationalData.schoolName)

    this.setState({
      schoolName: educationalData.schoolName,
      programTitle: educationalData.programTitle,
      dateOfStudy: educationalData.dateOfStudy,
      // editEducations: true,
      editEducations: !this.state.editEducations,
    });

    schoolName && programTitle && dateOfStudy
      ? this.setState({
          schoolName: schoolName,
          programTitle: programTitle,
          dateOfStudy: dateOfStudy,
          // editEducations: false,
          editEducations: !this.state.editEducations,
        })
      : false;
  }

  handleSubmitPracticalInformation(evt) {
    evt.preventDefault();
    let { companyName, positionTitle, tasks, dateFrom, dateUntil } = this.state;
    companyName && positionTitle && tasks && dateFrom && dateUntil
      ? this.setState({
          practicalData: {
            companyName,
            positionTitle,
            tasks,
            dateFrom,
            dateUntil,
          },
          companyName: "",
          positionTitle: "",
          tasks: "",
          dateFrom: "",
          dateUntil: "",
          editExperiences: !this.state.editExperiences,
        })
      : false;
    // console.log(this.state.practicalData);
  }

  handleEditPracticalExperiences(evt) {
    evt.preventDefault();

    let {
      companyName,
      positionTitle,
      tasks,
      dateFrom,
      dateUntil,
      practicalData,
    } = this.state;

    this.setState({
      companyName: practicalData.companyName,
      positionTitle: practicalData.positionTitle,
      tasks: practicalData.tasks,
      dateFrom: practicalData.dateFrom,
      dateUntil: practicalData.dateUntil,
      editExperiences: true,
    });

    companyName && positionTitle && tasks && dateFrom && dateUntil
      ? this.setState({
          editExperiences: false,
          companyName: companyName,
          positionTitle: positionTitle,
          tasks: tasks,
          dateFrom: dateFrom,
          dateUntil: dateUntil,
        })
      : false;
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
      generalEdit,
      editEducations,
      editExperiences,
      generalData,
      educationalData,
      practicalData,
    } = this.state;
    return (
      <div>
        <p>Using Stateful Class Components</p>
        <GeneralInformation
          name={name}
          email={email}
          number={number}
          handleChange={this.handleChange}
          handleSubmit={this.handleGeneralInformationSubmit}
          isEdit={generalEdit}
          invokeEdit={this.handleGeneralDataEdit}
        />
        <Educational_Informations
          schoolName={schoolName}
          programTitle={programTitle}
          dateOfStudy={dateOfStudy}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmitEducationalInformation}
          isEdit={editEducations}
          invokeEdit={this.handleEditEducationalData}
        />
        <Practical_Informations
          companyName={companyName}
          positionTitle={positionTitle}
          tasks={tasks}
          dateFrom={dateFrom}
          dateUntil={dateUntil}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmitPracticalInformation}
          isEdit={editExperiences}
          invokeEdit={this.handleEditPracticalExperiences}
        />
        <DisplayCV
          name={generalData.name}
          email={generalData.email}
          number={generalData.number}
          schoolName={educationalData.schoolName}
          programTitle={educationalData.programTitle}
          dateOfStudy={educationalData.dateOfStudy}
          companyName={practicalData.companyName}
          positionTitle={practicalData.positionTitle}
          tasks={practicalData.tasks}
          dateFrom={practicalData.dateFrom}
          dateUntil={practicalData.dateUntil}
          generalEdit={generalEdit}
          editEducations={editEducations}
          editExperiences={editExperiences}
        />
      </div>
    );
  }
}

/**
 * 
 * 
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
          generalEdit = {}
        />
 * 
 * 
 handleGeneralDataEdit(evt) {
    evt.preventDefault();
    let { name, email, number, generalData } = this.state;
    console.log(generalData, name, email, number, "edit!!");

    this.setState({
     name: generalData.name,
     email: generalData.email,
     number: generalData.number 
    });

    name && email && number
      ? this.setState((prevState) => {
          console.log("prevState: ", prevState);
          return {
            generalEdit: !prevState.generalEdit,
            name: prevState.name,
            email: prevState.email,
            number: prevState.number,
          };
        })
      : false;
  }
 * 
 * 
   handleGeneralInformationSubmit(evt) {
    evt.preventDefault();
    let { name, email, number } = this.state;
    // console.log is a synchronous statement, so console logging will show data after asynchronous call of setState is done
    console.log(this.state.generalData, name, email, number);
    name && email && number
      ? this.setState({
          generalData: { name, email, number },
          generalEdit: !this.state.generalEdit,
          // name: name,
          // email: email,
          // number: number,
          name: "",
          email: "",
          number: "",
        })
      : false;
    // console.log(this.state.generalData[0]);
  }

  handleGeneralDataEdit(evt) {
    evt.preventDefault();
    let { name, email, number, generalData } = this.state;
    console.log(generalData, name, email, number);

    name && email && number ?
    this.setState(prevState => ({
      generalEdit: !prevState.generalEdit,
      name: prevState.name,
      email: prevState.email,
      number: prevState.number
    }))
    : false;

    // name && email && number
    //   ? this.setState({
    //       // generalEdit: !this.state.generalEdit,
    //       // name: [name],
    //       // email: [email],
    //       // number: [number],
    //       name: generalData.name,
    //       email: generalData.email,
    //       number: generalData.number,
    //       generalEdit: !this.state.generalEdit,
    //       // generalEdit: false,
    //       // name: "????"
    //     })
      // : false;
  }
 * 
 * 
   handleGeneralInformationSubmit(evt) {
    evt.preventDefault();
    let { name, email, number } = this.state;
    // console.log is a synchronous statement, so console logging will show data after asynchronous call of setState is done
    console.log(this.state.generalData, name, email, number);
    name && email && number
      ? this.setState({
          generalData: this.state.generalData.concat(name, email, number),
          name: "",
          email: "",
          number: "",
          generalEdit: false,
        })
      : false;
    // console.log(this.state.generalData[0]);
  }

  handleGeneralDataEdit(evt) {
    evt.preventDefault();
    let { name, email, number, generalData } = this.state;
    console.log(generalData, name, email, number)
    name && email && number
      ? this.setState({
          name: generalData[0],
          email: generalData[1],
          number: generalData[2],
          generalEdit: false,
          // name: "????"
        })
      : false;
  }
 */
