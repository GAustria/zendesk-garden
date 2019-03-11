import React from "react";
import PropTypes from "prop-types";
import { Message } from '@zendeskgarden/react-radios';
import '@zendeskgarden/react-radios/dist/styles.css';

const RadioMessage = (props) => <Message {...props} />;

RadioMessage.propTypes = {
    children: PropTypes.string,
    validation: PropTypes.oneOf([
        "success",
        "warning",
        "error",
        "none"
      ])
};

export default RadioMessage;