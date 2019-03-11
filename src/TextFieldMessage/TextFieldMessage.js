import React from "react";
import PropTypes from "prop-types";
import { Message } from '@zendeskgarden/react-textfields';
import '@zendeskgarden/react-textfields/dist/styles.css';

const TextFieldMessage = (props) => <Message {...props} />;

TextFieldMessage.propTypes = {
    children: PropTypes.string,
    validation: PropTypes.oneOf([
        "success",
        "warning",
        "error",
        "none"
      ])
};

export default TextFieldMessage;