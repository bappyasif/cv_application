import React, { useState } from "react";
import { GeneralInfo } from "./general_informations/GeneralInfo";
import {GeneralCtx} from "./general_informations/general_ctx";


export function CVApplicationUsingHooks() {
    let [general, setGeneral] = useState(null);
    // let data = { name: "", email: "", mobile: "" }
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [mobile, setNumber] = useState("");
    let handleChange = evt => {
        // console.log(evt.target);
        let {name, value} = evt.target;
        console.log(name, value);
        if(name === "name" ) {
            setName(value);
        } else if(name === "email" ) {
            setEmail(value);
        } else if(name === "mobile" ) {
            setNumber(value);
        }
    }
    return (
      <div>
        <GeneralCtx.Provider value={{name, email, mobile, handleChange}}>
            <GeneralInfo />
        </GeneralCtx.Provider>
      </div>
    );
  }




// export function CVApplicationUsingHooks() {
//   let [general, setGeneral] = useState(null);
//   let data = { name: "", email: "", mobile: "" }
//   let handleChange = evt => {
//       let [name, value] = evt.target;
//       setGeneral()
//   }
//   return (
//     <div>
//       <GeneralCtx.Provider value={{data, handleChange}}>
//           <GeneralInfo />
//       </GeneralCtx.Provider>
//     </div>
//   );
// }
