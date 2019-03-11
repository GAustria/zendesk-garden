import React from "react";
import PropTypes from "prop-types";
import { Hint } from '@zendeskgarden/react-select';
import '@zendeskgarden/react-select/dist/styles.css';

const SelectFieldHint = (props) => <Hint {...props} />;

SelectFieldHint.propTypes = {
    children: PropTypes.string
};

export default SelectFieldHint;