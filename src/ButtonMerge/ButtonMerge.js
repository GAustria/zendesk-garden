import React from "react";
import PropTypes from "prop-types";
import { Button } from '@zendeskgarden/react-buttons';
import '@zendeskgarden/react-buttons/dist/styles.css';

export default class ButtonMerge extends React.Component {
  render() {
    return (
        <Button {...this.props}>{this.props.children}</Button>
    )
  }
}

ButtonMerge.propTypes = {
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
  buttonRef: PropTypes.func
};