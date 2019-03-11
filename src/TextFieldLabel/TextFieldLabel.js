import React from "react";
import PropTypes from "prop-types";
import { Label } from '@zendeskgarden/react-textfields';
import '@zendeskgarden/react-textfields/dist/styles.css';

const TextFieldLabel = (props) => <Label {...props} />;

TextFieldLabel.propTypes = {
    regular: PropTypes.bool,
    small: PropTypes.bool
};

export default TextFieldLabel;