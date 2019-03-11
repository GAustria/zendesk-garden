import React from "react";
import PropTypes from "prop-types";
import { Hint } from '@zendeskgarden/react-checkboxes';
import '@zendeskgarden/react-checkboxes/dist/styles.css';

const CheckboxHint = (props) => <Hint {...props} />;

CheckboxHint.propTypes = {
    children: PropTypes.string
};

export default CheckboxHint;