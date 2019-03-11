import * as React from "react";
import IconMerge from "../../../../IconMerge/IconMerge";
import NavItem from "../NavItem";
import NavItemIcon from "../../NavItemIcon/NavItemIcon";
import NavItemText from "../../NavItemText/NavItemText";

export default (
  <NavItem
    logo
    product="connect"
    title="Zendesk Connect"
    uxpId="navItemZendeskConnect"
  >
    <NavItemIcon uxpId="navItemIconZendeskConnect">
      <IconMerge icon="RelationshapeConnect26" uxpId="IconZendeskConnect" />
    </NavItemIcon>
    <NavItemText uxpId="navItemTextZendeskConnect">Zendesk Connect</NavItemText>
  </NavItem>
);
