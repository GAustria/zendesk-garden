import React from "react";
import PropTypes from "prop-types";
import { SubNavItemText as SubNavItemTextM } from "@zendeskgarden/react-chrome";
import "@zendeskgarden/react-chrome/dist/styles.css";

const SubNavItemText = props => <SubNavItemTextM {...props} />;

SubNavItemText.propTypes = {
  children: PropTypes.node,
  wrap: PropTypes.bool,
};

export default SubNavItemText;
