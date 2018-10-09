import React from "react";
import PropTypes from "prop-types";
import { Message } from '@zendeskgarden/react-textfields';
import '@zendeskgarden/react-textfields/dist/styles.css';

export default class TextFieldMessageMerge extends React.Component {
  render() {
    return (
        <Message {...this.props}>
            {this.props.children}
        </Message>
    )
  }
}

TextFieldMessageMerge.propTypes = {
    children: PropTypes.string,
    validation: PropTypes.oneOf([
        "success",
        "warning",
        "error",
        "none"
      ])
};