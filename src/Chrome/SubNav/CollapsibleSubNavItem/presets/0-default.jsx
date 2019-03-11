import * as React from "react";
import SubNavItem from "../../SubNavItem/SubNavItem";
import SubNavItemText from "../../SubNavItemText/SubNavItemText";
import CollapsibleSubNavItem from "../CollapsibleSubNavItem";

export default (
  <CollapsibleSubNavItem
    header="Collapsible Item"
    uxpId="CollapsibleSubNavItem1"
  >
    <SubNavItem href="#/" uxpId="subNavItem2">
      <SubNavItemText uxpId="subNavItemText1">Item 1</SubNavItemText>
    </SubNavItem>
    <SubNavItem href="#/" uxpId="subNavItem3">
      <SubNavItemText uxpId="subNavItemText3">Item 2</SubNavItemText>
    </SubNavItem>
    <SubNavItem href="#/" uxpId="subNavItem4">
      <SubNavItemText uxpId="subNavItemText4">Item 3</SubNavItemText>
    </SubNavItem>
  </CollapsibleSubNavItem>
);
