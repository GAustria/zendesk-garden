import React from "react";
import PropTypes from "prop-types";
import { ChevronButton } from '@zendeskgarden/react-buttons';
import '@zendeskgarden/react-buttons/dist/styles.css';

export default class ChevronButtonMerge extends React.Component {
  render() {
    return (
        <ChevronButton {...this.props} />
    )
  }
}

ChevronButtonMerge.propTypes = {
 /** Apply danger styling */
 danger: PropTypes.bool,
 size: PropTypes.oneOf(["small", "large"]),
 /** Applies primary button styling */
 primary: PropTypes.bool,
 /** Applies basic button styling */
 basic: PropTypes.bool,
 /** Applies muted button styling */
 muted: PropTypes.bool,
 /** Applies pill styling */
 pill: PropTypes.bool,
 disabled: PropTypes.bool,
 focused: PropTypes.bool,
 hovered: PropTypes.bool,
 active: PropTypes.bool,
 /** Callback for reference of the native button element */
 buttonRef: PropTypes.func,
 /** Rotates icon 180 degrees */
 rotated: PropTypes.bool
};