import React from "react";
import PropTypes from "prop-types";
import { NavItemText as NavItemTextM } from "@zendeskgarden/react-chrome";
import "@zendeskgarden/react-chrome/dist/styles.css";

const NavItemText = props => <NavItemTextM {...props} />;

NavItemText.propTypes = {
  children: PropTypes.node,
  wrap: PropTypes.bool,
  style: PropTypes.object
};

export default NavItemText;
