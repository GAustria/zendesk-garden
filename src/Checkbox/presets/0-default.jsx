import * as React from "react";
import Checkbox from "../Checkbox";
import CheckboxLabel from "../../CheckboxLabel/CheckboxLabel";
import CheckboxMessage from "../../CheckboxMessage/CheckboxMessage";

export default (
  <Checkbox uxpId="checkbox0">
    <CheckboxLabel uxpId="label0">Default Checkbox</CheckboxLabel>
    <CheckboxMessage validation="success" uxpId="message0">Success</CheckboxMessage>
  </Checkbox>
);
