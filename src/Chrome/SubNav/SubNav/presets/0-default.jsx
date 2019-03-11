import * as React from "react";

import SubNav from "../SubNav";
import SubNavItem from "../../SubNavItem/SubNavItem";
import SubNavItemText from "../../SubNavItemText/SubNavItemText";
import CollapsibleSubNavItem from "../../CollapsibleSubNavItem/CollapsibleSubNavItem";

export default (
  <SubNav uxpId="subNav0">
    <SubNavItem href="#/" uxpId="subNavItem0">
      <SubNavItemText uxpId="subNavItemText0">Subnav 1</SubNavItemText>
    </SubNavItem>
    <SubNavItem href="#/" uxpId="subNavItem1">
      <SubNavItemText uxpId="subNavItemText1">Subnav 2</SubNavItemText>
    </SubNavItem>
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
    <SubNavItem href="#/" uxpId="subNavItem5">
      <SubNavItemText uxpId="subNavItemText6">Subnav 3</SubNavItemText>
    </SubNavItem>
  </SubNav>
);
