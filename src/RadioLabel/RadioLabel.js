import React from "react";
import PropTypes from "prop-types";
import { Label } from '@zendeskgarden/react-radios';
import '@zendeskgarden/react-radios/dist/styles.css';

const RadioLabel = (props) => <Label {...props} />;

RadioLabel.propTypes = {
    regular: PropTypes.bool,
    checked: PropTypes.bool,
    hidden: PropTypes.bool,
    indeterminate: PropTypes.bool,
    hovered: PropTypes.bool,
    focused: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.string
};

export default RadioLabel;