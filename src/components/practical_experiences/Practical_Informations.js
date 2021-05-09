import React, { Component } from "react";
import { ButtonElement } from "../form_elements/ButtonElement";
import { InputElement } from "../form_elements/InputElement";

export let Practical_Informations = (props) => {
  let { companyName, positionTitle, tasks, dateFrom, dateUntil, handleChange, handleSubmit } = props;
  return (
    <div>
      <fieldset style={{ width: "47vw", marginTop: "8px", margin: "auto" }}>
        <legend>Practical Informations</legend>
        <form onSubmit={handleSubmit}>
          <InputElement
            type="text"
            name="companyName"
            value={companyName}
            handleChange={handleChange}
          />
          <InputElement
            type="text"
            name="positionTitle"
            value={positionTitle}
            handleChange={handleChange}
          />
          <InputElement
            type="text"
            name="tasks"
            value={tasks}
            handleChange={handleChange}
          />
          <InputElement
            type="date"
            name="dateFrom"
            value={dateFrom}
            handleChange={handleChange}
          />
          <InputElement
            type="date"
            name="dateUntil"
            value={dateUntil}
            handleChange={handleChange}
          />
          <ButtonElement />
        </form>
      </fieldset>
    </div>
  );
};

// export class Practical_Informations extends Component {
//   constructor() {
//     super();
//     this.state = {
//       companyName: "",
//       positionTitle: "",
//       tasks: "",
//       dateFrom: "",
//       dateUntil: "",
//       data: []
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
//     let {companyName, positionTitle, tasks, dateFrom, dateUntil} = this.state;
//     this.setState({
//       data: this.state.data.concat([companyName, positionTitle, tasks, dateFrom, dateUntil]),
//       companyName: "",
//       positionTitle: "",
//       tasks: "",
//       dateFrom: "",
//       dateUntil:""
//     })
//   }
//   render() {
//     let { companyName, positionTitle, tasks, dateFrom, dateUntil } = this.state;
//     return (
//       <div>
//         <fieldset style={{ width: "47vw", marginTop: "8px", margin: "auto" }}>
//           <legend>Practical Informations</legend>
//           <form onSubmit={this.handleSubmit}>
//           <InputElement
//           type="text"
//           name="companyName"
//           value={companyName}
//           handleChange={this.handleChange}
//         />
//         <InputElement
//           type="text"
//           name="positionTitle"
//           value={positionTitle}
//           handleChange={this.handleChange}
//         />
//         <InputElement
//           type="text"
//           name="tasks"
//           value={tasks}
//           handleChange={this.handleChange}
//         />
//         <InputElement
//           type="date"
//           name="dateFrom"
//           value={dateFrom}
//           handleChange={this.handleChange}
//         />
//         <InputElement
//           type="date"
//           name="dateUntil"
//           value={dateUntil}
//           handleChange={this.handleChange}
//         />
//         <ButtonElement />
//           </form>
//         </fieldset>
//         {companyName}
//         {positionTitle}
//         {tasks}
//         {dateFrom}
//         {dateUntil}
//       </div>
//     );
//   }
// }
