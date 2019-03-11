import React from "react";
import PropTypes from "prop-types";
import { BreadcrumbView as BreadcrumbViewM } from "@zendeskgarden/react-breadcrumbs";
import "@zendeskgarden/react-breadcrumbs/dist/styles.css";

const BreadcrumbView = props => <BreadcrumbViewM {...props} />;

BreadcrumbView.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

export default BreadcrumbView;
