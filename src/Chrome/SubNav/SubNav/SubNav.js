import React from "react";
import PropTypes from "prop-types";
import { SubNav as SubNavM } from "@zendeskgarden/react-chrome";
import "@zendeskgarden/react-chrome/dist/styles.css";

const SubNav = props => <SubNavM {...props} />;

SubNav.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

export default SubNav;
