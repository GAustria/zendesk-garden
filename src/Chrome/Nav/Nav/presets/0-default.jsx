import * as React from 'react';
import IconMerge from "../../../../IconMerge/IconMerge";
import Nav from "../Nav";
import NavItem from "../../NavItem/NavItem";
import NavItemIcon from "../../NavItemIcon/NavItemIcon";
import NavItemText from "../../NavItemText/NavItemText";


export default (
    <Nav uxpId="nav0">
      <NavItem logo product="connect" title="Zendesk Connect" uxpId="navItemZendeskConnect">
        <NavItemIcon uxpId="navItemIconZendeskConnect">
          <IconMerge icon="RelationshapeConnect26" uxpId="IconZendeskConnect" />
        </NavItemIcon>
        <NavItemText uxpId="navItemTextZendeskConnect">Zendesk Connect</NavItemText>
      </NavItem>
      <NavItem title="Home" uxpId="navItemHome">
        <NavItemIcon uxpId="navItemIconHome">
          <IconMerge icon="HomeFill26" uxpId="IconHome" />
        </NavItemIcon>
        <NavItemText uxpId="navTextIconHome">Home</NavItemText>
      </NavItem>
      <NavItem title="Segment" uxpId="navItemSegment">
        <NavItemIcon uxpId="navItemIconSegment">
          <IconMerge icon="CustomerListsFill26" uxpId="IconSegment" />
        </NavItemIcon>
        <NavItemText uxpId="navItemTextSegment">Segment</NavItemText>
      </NavItem>
      <NavItem title="Campaigns" uxpId="navItemCampaigns">
        <NavItemIcon uxpId="navItemIconCampaigns">
          <IconMerge icon="EmailFill26" uxpId="IconCampaigns" />
        </NavItemIcon>
        <NavItemText uxpId="navItemTextCampaigns">Campaigns</NavItemText>
      </NavItem>
      <NavItem title="Settings" uxpId="navItemSettings">
        <NavItemIcon uxpId="navItemIconSettings">
          <IconMerge icon="SettingsFill26" />
        </NavItemIcon>
        <NavItemText uxpId="navItemTextSettings">Settings</NavItemText>
      </NavItem>
      <NavItem brandmark title="Zendesk" uxpId="navItemZendesk">
        <NavItemIcon uxpId="navItemIconZendesk">
          <IconMerge icon="Zendesk26" uxpId="IconZendesk" />
        </NavItemIcon>
        <NavItemText uxpId="navItemTextZendesk">&copy;Zendesk</NavItemText>
      </NavItem>
    </Nav>
);