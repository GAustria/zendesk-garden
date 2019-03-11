import React from "react";
import PropTypes from "prop-types";
import { ChevronButton as ChevronButtonM } from '@zendeskgarden/react-buttons';
import '@zendeskgarden/react-buttons/dist/styles.css';

const ChevronButton = (props) => <ChevronButtonM {...props} />;

ChevronButton.propTypes = {
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

export default ChevronButton;