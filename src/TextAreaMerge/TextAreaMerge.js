import React from "react";
import PropTypes from "prop-types";
import { Textarea } from "@zendeskgarden/react-textfields";
import "@zendeskgarden/react-textfields/dist/styles.css";

export default class TextAreaMerge extends React.Component {
 render() {
    return (
      <Textarea {...this.props} />
    );
  }
}

TextAreaMerge.propTypes = {
  small: PropTypes.bool,
  bare: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  resizable: PropTypes.bool,
  validation: PropTypes.oneOf([
    "success",
    "warning",
    "error",
    "none"
  ])
};
