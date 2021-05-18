import React, { useContext } from "react";
import { InputComponent } from "../form_components/InputComponent";
import { GeneralCtx } from "./general_ctx";

export function GeneralInfo() {
  let general = useContext(GeneralCtx);
  console.log(general);
  return (
    <div>
      <fieldset>
        <legend>General Information</legend>
        <InputComponent
          type="text"
          name="name"
          value={general.name}
          handleChange={general.handleChange}
        />
        <InputComponent
          type="email"
          name="email"
          value={general.email}
          handleChange={general.handleChange}
        />
        <InputComponent
          type="number"
          name="mobile"
          value={general.mobile}
          handleChange={general.handleChange}
        />
      </fieldset>
    </div>
  );
}
