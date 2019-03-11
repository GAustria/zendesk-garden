import React from "react";
import PropTypes from "prop-types";
import { ButtonGroup as ButtonGroupM } from "@zendeskgarden/react-buttons";
import "@zendeskgarden/react-buttons/dist/styles.css";

const ButtonGroup = (props) => <ButtonGroupM {...props} />

ButtonGroup.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  onStateChange: PropTypes.func,
  selectedKey: PropTypes.string
};

export default ButtonGroup;