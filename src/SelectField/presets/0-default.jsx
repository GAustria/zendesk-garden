import * as React from "react";
import SelectField from "../SelectField";
import SelectFieldLabel from "../../SelectFieldLabel/SelectFieldLabel";

export default (
  <SelectField
    uxpId="selectfield0"
    data={["Item 1", "Item 2", "Item 3"]}
    validation={
      `<SelectFieldMessage validation="success">
        Success!
      </SelectFieldMessage>`
    }
  >
    <SelectFieldLabel>Select</SelectFieldLabel>
  </SelectField>
);
