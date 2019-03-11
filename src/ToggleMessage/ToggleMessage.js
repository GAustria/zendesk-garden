import React from "react";
import PropTypes from "prop-types";
import { Message } from '@zendeskgarden/react-toggles';
import '@zendeskgarden/react-toggles/dist/styles.css';

const ToggleMessage = (props) => <Message {...props} />;

ToggleMessage.propTypes = {
    children: PropTypes.string,
    validation: PropTypes.oneOf([
        "success",
        "warning",
        "error",
        "none"
      ])
};

export default ToggleMessage;