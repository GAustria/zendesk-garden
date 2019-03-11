import React from "react";
import PropTypes from "prop-types";
import { Row as RowM } from "@zendeskgarden/react-grid";
import "@zendeskgarden/react-grid/dist/styles.css";

const Row = props => <RowM {...props} />;

Row.propTypes = {
  children: PropTypes.node,
  alignItems: PropTypes.oneOf(["start", "center", "end"]),
  gutters: PropTypes.bool,
  justifyContent: PropTypes.oneOf([
    "start",
    "center",
    "end",
    "around",
    "beteween"
  ])
};

export default Row;
