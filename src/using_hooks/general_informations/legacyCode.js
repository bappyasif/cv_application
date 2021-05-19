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
    // console.log(evt.target);
    let { name, value } = evt.target;
    // console.log(name, value);
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
    // isEditing ? console.log("!!",name,"!!", data.name) : false;
    // if (isEditing) {
    //   setName(data.name);
    //   setEmail(data.email);
    //   setNumber(data.mobile);
    // }
    // setName(name);
    // setEmail(email);
    // setNumber(mobile);
    evt.preventDefault();
    // props.setGeneral(general);
    // setData(general);
    setData({ name, email, mobile });

    props.submitData(general);
    console.log(data, general);
    // props.submitData(data);
    // setName("");
    // setEmail("");
    // setNumber("");
    
    setIsEditing(!isEditing);
    setName("nulkl");
    setEmail("");
    setNumber("");
  };

  let editGeneral = (evt) => {
    // console.log("edit", general, data)
    console.log("edit", data, "<>", data.name, general, name==="");
    // evt.preventDefault();
    //  setName(data.name);
    // setName("!!");
    // submitHandler(evt);
    //  setIsEditing(true);
  };

  // useEffect(() => {
  //   if (isEditing) {
  //     setName(data.name);
  //     setEmail(data.email);
  //     setNumber(data.mobile);
      
  //   }
  // });
  // let general = useContext(GeneralCtx);
  // console.log(general);
  return (
    <div>
      <fieldset>
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

// import { GeneralCtx } from "./general_ctx";
// import React, { useContext} from "react";
// export function GeneralInfo() {
//   let general = useContext(GeneralCtx);
//   console.log(general);
//   return (
//     <div>
//       <fieldset>
//         <legend>General Information</legend>
//         <InputComponent
//           type="text"
//           name="name"
//           value={general.name}
//           handleChange={general.handleChange}
//         />
//         <InputComponent
//           type="email"
//           name="email"
//           value={general.email}
//           handleChange={general.handleChange}
//         />
//         <InputComponent
//           type="number"
//           name="mobile"
//           value={general.mobile}
//           handleChange={general.handleChange}
//         />
//       </fieldset>
//     </div>
//   );
// }
