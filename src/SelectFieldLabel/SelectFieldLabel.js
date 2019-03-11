import React from "react";
import PropTypes from "prop-types";
import { Label } from '@zendeskgarden/react-select';
import '@zendeskgarden/react-select/dist/styles.css';

const SelectFieldLabel = (props) => <Label {...props} />;

SelectFieldLabel.propTypes = {
    regular: PropTypes.bool,
    checked: PropTypes.bool,
    hidden: PropTypes.bool,
    indeterminate: PropTypes.bool,
    hovered: PropTypes.bool,
    focused: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.string
};

export default SelectFieldLabel;