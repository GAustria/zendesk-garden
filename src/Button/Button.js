import React from "react";
import PropTypes from "prop-types";
import { Button as ButtonM } from '@zendeskgarden/react-buttons';
import '@zendeskgarden/react-buttons/dist/styles.css';

const Button = (props) => <ButtonM {...props} />;

Button.propTypes = {
  children: PropTypes.string,
  /** Apply danger styling */
  danger: PropTypes.bool,
  size: PropTypes.oneOf(["small", "large"]),
  /** Stretch the button to its container width */
  stretched: PropTypes.bool,
  /** Applies primary button styling */
  primary: PropTypes.bool,
  /** Applies basic button styling */
  basic: PropTypes.bool,
  /** Applies muted button styling */
  muted: PropTypes.bool,
  /** Applies link (anchor) button styling */
  link: PropTypes.bool,
  /** Applies pill styling */
  pill: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  active: PropTypes.bool,
  selected: PropTypes.bool,
  /** Callback for reference of the native button element */
  buttonRef: PropTypes.func,
  onClick: PropTypes.func,
};

export default Button;