import React, { useState } from "react";
import { GeneralInfo } from "./general_informations/GeneralInfo";

export function CVApplicationUsingHooks() {
  let [general, setGeneral] = useState(null);
  let handleGeneral = (data) => {
    setGeneral(data);
    // console.log("??")
  }

  return (
    <div>
      <GeneralInfo data={general} submitData={handleGeneral} />
      {/* {console.log(general, general ? general.name : false)} */}
      {general ? <p>{general.name}</p> : false}
    </div>
  );
}


// import {GeneralCtx} from "./general_informations/general_ctx";
// export function CVApplicationUsingHooks() {
//   let [general, setGeneral] = useState(null);
//   // let data = { name: "", email: "", mobile: "" }
//   let handleGeneral = (data) => {
//     setGeneral(data);
//   }
  
//   return (
//     <div>
//       <GeneralInfo data={general} setGeneral={setGeneral} submitData={handleGeneral} />
//       {/* {[...general]} */}
//       {console.log(general, general ? general.name : false)}
//     </div>
//   );
// }



// export function CVApplicationUsingHooks() {
//     let [general, setGeneral] = useState(null);
//     // let data = { name: "", email: "", mobile: "" }
//     let [name, setName] = useState("");
//     let [email, setEmail] = useState("");
//     let [mobile, setNumber] = useState("");
//     let handleChange = evt => {
//         // console.log(evt.target);
//         let {name, value} = evt.target;
//         console.log(name, value);
//         if(name === "name" ) {
//             setName(value);
//         } else if(name === "email" ) {
//             setEmail(value);
//         } else if(name === "mobile" ) {
//             setNumber(value);
//         }
//     }
//     return (
//       <div>
//         <GeneralCtx.Provider value={{name, email, mobile, handleChange}}>
//             <GeneralInfo />
//         </GeneralCtx.Provider>
//       </div>
//     );
//   }




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
