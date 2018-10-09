import React from "react";
import PropTypes from "prop-types";
import { Message } from '@zendeskgarden/react-ranges';
import '@zendeskgarden/react-ranges/dist/styles.css';

export default class RangeMessageMerge extends React.Component {
  render() {
    return (
        <Message {...this.props}>
            {this.props.children}
        </Message>
    )
  }
}

RangeMessageMerge.propTypes = {
    children: PropTypes.string,
    validation: PropTypes.oneOf([
        "success",
        "warning",
        "error",
        "none"
      ])
};