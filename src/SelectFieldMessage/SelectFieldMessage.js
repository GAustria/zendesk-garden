import React from "react";
import PropTypes from "prop-types";
import { Message } from '@zendeskgarden/react-select';
import '@zendeskgarden/react-select/dist/styles.css';

const SelectFieldMessage = (props) => <Message {...prop} />;

SelectFieldMessage.propTypes = {
    children: PropTypes.string,
    validation: PropTypes.oneOf([
        "success",
        "warning",
        "error",
        "none"
      ])
};

export default SelectFieldMessage;