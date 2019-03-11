import React from "react";
import PropTypes from "prop-types";
import { RangeField as RangeFieldM } from "@zendeskgarden/react-ranges";
import "@zendeskgarden/react-ranges/dist/styles.css";

const RangeField = (props) => <RangeFieldM {...props} />;

RangeField.propTypes = {
  /** The root ID to use for descendants. A unique ID is created if none is provided. */
  id: PropTypes.string,
  /** Apply inline styling to all children */
  inline: PropTypes.bool,
  children: PropTypes.node
};

export default RangeField;