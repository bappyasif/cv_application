import React from "react";
// let data = { name: "", email: "", mobile: "" }

export let GeneralCtx = React.createContext({
  // data: { name: "", email: "", mobile: "" },
  name: "",
  email: "",
  mobile: "",
  handleChange: () => {},
});
