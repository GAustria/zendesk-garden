import React from "react";
import PropTypes from "prop-types";
import { Message } from '@zendeskgarden/react-ranges';
import '@zendeskgarden/react-ranges/dist/styles.css';

const RangeMessage = (props) => <Message {...props} />

RangeMessage.propTypes = {
    children: PropTypes.string,
    validation: PropTypes.oneOf([
        "success",
        "warning",
        "error",
        "none"
      ])
};

export default RangeMessage;