import React from "react";
import PropTypes from "prop-types";
import { SubNavItem as SubNavItemM } from "@zendeskgarden/react-chrome";
import "@zendeskgarden/react-chrome/dist/styles.css";

const SubNavItem = props => <SubNavItemM {...props} />;

SubNavItem.propTypes = {
  children: PropTypes.node,
  current: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
};

export default SubNavItem;
