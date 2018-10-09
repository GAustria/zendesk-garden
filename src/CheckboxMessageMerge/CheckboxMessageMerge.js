import React from "react";
import PropTypes from "prop-types";
import { Message } from '@zendeskgarden/react-checkboxes';
import '@zendeskgarden/react-checkboxes/dist/styles.css';

export default class CheckboxMessageMerge extends React.Component {
  render() {
    return (
        <Message {...this.props}>
            {this.props.children}
        </Message>
    )
  }
}

CheckboxMessageMerge.propTypes = {
    children: PropTypes.string,
    validation: PropTypes.oneOf([
        "success",
        "warning",
        "error",
        "none"
      ])
};