import React, { Component } from "react";
import { ButtonElementEducationalData } from "../form_elements/ButtonElementEducationalData";
import { InputElement } from "../form_elements/InputElement";

export let Educational_Informations = (props) => {
  let { schoolName, programTitle, dateOfStudy, handleChange, handleSubmit, isEdit, invokeEdit } = props;

  return (
    <div>
      <fieldset className="cv-sections">
        <legend>Education Informations</legend>
        <form onSubmit={handleSubmit}>
          <InputElement
            type="text"
            name="schoolName"
            value={schoolName}
            handleChange={handleChange}
          />
          <InputElement
            type="text"
            name="programTitle"
            value={programTitle}
            handleChange={handleChange}
          />
          <InputElement
            type="date"
            name="dateOfStudy"
            value={dateOfStudy}
            handleChange={handleChange}
          />
          <ButtonElementEducationalData isEdit={isEdit} invokeEdit={invokeEdit} />
          {/* <ButtonElement /> */}
        </form>
      </fieldset>
    </div>
  );
};

// export class Educational_Informations extends Component {
//   constructor() {
//     super();
//     this.state = {
//       schoolName: "",
//       programTitle: "",
//       dateOfStudy: "",
//       data: [],
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(evt) {
//     let { name, value } = evt.target;
//     this.setState({
//       [name]: [value],
//     });
//   }
//   handleSubmit(evt) {
//     evt.preventDefault();
//     this.setState({
//       data: this.state.data.concat(
//         this.state.schoolName,
//         this.state.programTitle,
//         this.state.dateOfStudy
//       ),
//       schoolName: "",
//       programTitle: "",
//       dateOfStudy: "",
//     });
//   }
//   render() {
//     let { schoolName, programTitle, dateOfStudy } = this.state;
//     return (
//       <div>
//         <fieldset style={{width: "47vw", marginTop: "8px", margin: "auto"}}>
//           <legend>Education Informations</legend>
//           <form onSubmit={this.handleSubmit}>
//             <InputElement
//               type="text"
//               name="schoolName"
//               value={schoolName}
//               handleChange={this.handleChange}
//             />
//             <InputElement
//               type="text"
//               name="programTitle"
//               value={programTitle}
//               handleChange={this.handleChange}
//             />
//             <InputElement
//               type="date"
//               name="dateOfStudy"
//               value={dateOfStudy}
//               handleChange={this.handleChange}
//             />
//             <ButtonElement />
//           </form>
//         </fieldset>
//         {schoolName}
//         {programTitle}
//         {dateOfStudy}
//       </div>
//     );
//   }
// }
