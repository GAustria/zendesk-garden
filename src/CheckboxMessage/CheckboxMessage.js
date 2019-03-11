import React from "react";
import PropTypes from "prop-types";
import { Message } from '@zendeskgarden/react-checkboxes';
import '@zendeskgarden/react-checkboxes/dist/styles.css';

const CheckboxMessage = (props) => <Message {...props} />;

CheckboxMessage.propTypes = {
    children: PropTypes.string,
    validation: PropTypes.oneOf([
        "success",
        "warning",
        "error",
        "none"
      ])
};

export default CheckboxMessage;