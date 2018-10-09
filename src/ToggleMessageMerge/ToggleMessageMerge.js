import React from "react";
import PropTypes from "prop-types";
import { Message } from '@zendeskgarden/react-toggles';
import '@zendeskgarden/react-toggles/dist/styles.css';

export default class ToggleMessageMerge extends React.Component {
  render() {
    return (
        <Message {...this.props}>
            {this.props.children}
        </Message>
    )
  }
}

ToggleMessageMerge.propTypes = {
    children: PropTypes.string,
    validation: PropTypes.oneOf([
        "success",
        "warning",
        "error",
        "none"
      ])
};