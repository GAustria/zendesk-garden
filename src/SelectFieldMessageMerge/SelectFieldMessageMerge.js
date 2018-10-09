import React from "react";
import PropTypes from "prop-types";
import { Message } from '@zendeskgarden/react-select';
import '@zendeskgarden/react-select/dist/styles.css';

export default class SelectFieldMessageMerge extends React.Component {
  render() {
    return (
        <Message {...this.props}>
            {this.props.children}
        </Message>
    )
  }
}

SelectFieldMessageMerge.propTypes = {
    children: PropTypes.string,
    validation: PropTypes.oneOf([
        "success",
        "warning",
        "error",
        "none"
      ])
};