import * as React from "react";
import Menu from "../Menu";
import MenuItem from "../../Views/MenuItem/MenuItem";

export default (
  <Menu arrow placement="end" buttonLabel="Menu" uxpId="menu">
    <MenuItem key="profile" uxpId="item0">Profile</MenuItem>
    <MenuItem key="settings" uxpId="item1">Settings</MenuItem>
    <MenuItem disabled uxpId="item2">Theme Editor</MenuItem>
  </Menu>
);
