import * as React from "react";
import Toggle from "../Toggle";
import ToggleLabel from "../../ToggleLabel/ToggleLabel";
import ToggleMessage from "../../ToggleMessage/ToggleMessage";

export default (
  <Toggle uxpId="toggle0">
    <ToggleLabel uxpId="label0">Default Toggle</ToggleLabel>
    <ToggleMessage uxpId="message0" validation="success">Success</ToggleMessage>
  </Toggle>
);