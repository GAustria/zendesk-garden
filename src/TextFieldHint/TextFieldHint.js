import React from "react";
import PropTypes from "prop-types";
import { Hint } from '@zendeskgarden/react-textfields';
import '@zendeskgarden/react-textfields/dist/styles.css';

const TextFieldHint = (props) => <Hint {...props} />;

TextFieldHint.propTypes = {
    children: PropTypes.string,
    small: PropTypes.bool
};

export default TextFieldHint;