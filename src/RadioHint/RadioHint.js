import React from "react";
import PropTypes from "prop-types";
import { Hint } from '@zendeskgarden/react-radios';
import '@zendeskgarden/react-radios/dist/styles.css';

const RadioHint = (props) => <Hint {...props} />

RadioHint.propTypes = {
    children: PropTypes.string
};

export default RadioHint;