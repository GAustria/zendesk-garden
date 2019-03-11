import React from "react";
import PropTypes from "prop-types";
import { NavItem as NavItemM } from "@zendeskgarden/react-chrome";
import "@zendeskgarden/react-chrome/dist/styles.css";

const NavItem = props => <NavItemM {...props} />;

NavItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  brandmark: PropTypes.bool,
  current: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  logo: PropTypes.bool,
  product: PropTypes.oneOf([
    "chat",
    "connect",
    "explore",
    "guide",
    "message",
    "support",
    "talk"
  ]),
  style: PropTypes.object
};

export default NavItem;
