import React from "react";
import PropTypes from "prop-types";
import { Textarea as TextareaM } from "@zendeskgarden/react-textfields";
import "@zendeskgarden/react-textfields/dist/styles.css";

const Textarea = (props) => <TextareaM {...props} />;

Textarea.propTypes = {
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

export default Textarea;
