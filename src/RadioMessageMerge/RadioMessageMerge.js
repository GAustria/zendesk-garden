import React from "react";
import PropTypes from "prop-types";
import { Message } from '@zendeskgarden/react-radios';
import '@zendeskgarden/react-radios/dist/styles.css';

export default class RadioMessageMerge extends React.Component {
  render() {
    return (
        <Message {...this.props}>
            {this.props.children}
        </Message>
    )
  }
}

RadioMessageMerge.propTypes = {
    children: PropTypes.string,
    validation: PropTypes.oneOf([
        "success",
        "warning",
        "error",
        "none"
      ])
};