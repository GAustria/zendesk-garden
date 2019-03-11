import * as React from "react";
import TextField from "../TextField";
import TextFieldLabel from "../../TextFieldLabel/TextFieldLabel";
import Input from "../../Input/Input";

export default (
  <TextField uxpId="textField0">
    <TextFieldLabel uxpId="label">Default Label</TextFieldLabel>
    <Input uxpId="input" placeholder="Accepts all native input props" />
  </TextField>
);
