import React from "react";
import PropTypes from "prop-types";
import { Label } from '@zendeskgarden/react-toggles';
import '@zendeskgarden/react-toggles/dist/styles.css';

const ToggleLabel = (props) => <Label {...props} />;

ToggleLabel.propTypes = {
    regular: PropTypes.bool,
    checked: PropTypes.bool,
    hidden: PropTypes.bool,
    hovered: PropTypes.bool,
    focused: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.string
};

export default ToggleLabel;