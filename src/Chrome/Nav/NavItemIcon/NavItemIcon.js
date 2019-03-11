import React from "react";
import PropTypes from "prop-types";
import { NavItemIcon as NavItemIconM } from "@zendeskgarden/react-chrome";
import "@zendeskgarden/react-chrome/dist/styles.css";

const NavItemIcon = props => <NavItemIconM {...props} />;

NavItemIcon.propTypes = {
  children: PropTypes.node,
  expanded: PropTypes.bool,
  focused: PropTypes.bool,
  header: PropTypes.node,
  hovered: PropTypes.bool,
  onChange: PropTypes.func,
};

export default NavItemIcon;
