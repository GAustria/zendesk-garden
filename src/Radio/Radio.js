import React from "react";
import PropTypes from "prop-types";
import { Radio as RadioM } from "@zendeskgarden/react-radios";
import "@zendeskgarden/react-radios/dist/styles.css";

const Radio = (props) => <RadioM {...props} />;

Radio.propTypes = {
  /** The root ID to use for descendants. A unique ID is created if none is provided. **/
  id: PropTypes.any,
  /** Applies props to the containing `<div>` element */
  wrapperProps: PropTypes.object,
  children: PropTypes.node,
  id: PropTypes.any,
  regular: PropTypes.bool,
  checked: PropTypes.bool,
  hidden: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Radio;
