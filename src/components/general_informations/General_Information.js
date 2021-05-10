import React, { Component } from "react";
import { ButtonElement } from "../form_elements/ButtonElement";
import { InputElement } from "../form_elements/InputElement";

export let GeneralInformation = (props) => {
  let { name, email, number, handleChange, handleSubmit, isEdit, invokeEdit } = props;

  return (
    <div>
      <fieldset className="cv-sections">
        <legend>General Information</legend>
        <form onSubmit={handleSubmit}>
          <InputElement
            type="text"
            name="name"
            value={name}
            handleChange={handleChange}
          />
          <InputElement
            type="email"
            name="email"
            value={email}
            handleChange={handleChange}
          />
          <InputElement
            type="number"
            name="number"
            value={number}
            handleChange={handleChange}
          />
          <ButtonElement isEdit={isEdit} invokeEdit={invokeEdit} />
        </form>
      </fieldset>
    </div>
  );
};

// export class GeneralInformation extends Component {
//   constructor() {
//     super();
//     // this.state = {
//     //   name: "",
//     //   email: "",
//     //   number: "",
//     //   data: [],
//     // };
//     // this.handleChange = this.handleChange.bind(this);
//     // this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   // handleChange(evt) {
//   //   let { name, value } = evt.target;
//   //   this.setState({ [name]: [value] });
//   // }
//   // handleSubmit(evt) {
//   //   evt.preventDefault();
//   //   let { name, email, number } = this.props;
//   //   this.setState({
//   //     data: this.state.data.concat([name, email, number]),
//   //     name: "",
//   //     email: "",
//   //     number: "",
//   //   });
//   // }
//   render() {
//     // let { name, email, number } = this.state;
//     return (
//       <div>
//         <fieldset style={{ width: "47vw", marginTop: "8px", margin: "auto" }}>
//           <legend>General Information</legend>
//           <form onSubmit={this.props.handleSubmit}>
//             <InputElement
//               type="text"
//               name="name"
//               value={this.props.name}
//               // value={name}
//               // handleChange={this.handleChange}
//               handleChange={this.props.handleChange}
//             />
//             <InputElement
//               type="email"
//               name="email"
//               value={this.props.email}
//               // value={email}
//               // handleChange={this.handleChange}
//               handleChange={this.props.handleChange}
//             />
//             <InputElement
//               type="number"
//               name="number"
//               value={this.props.number}
//               // value={number}
//               // handleChange={this.handleChange}
//               handleChange={this.props.handleChange}
//             />
//             <ButtonElement />
//           </form>
//         </fieldset>
//         {/* {this.state.name}
//         {this.state.email}
//         {this.state.number} */}
//       </div>
//     );
//   }
// }
