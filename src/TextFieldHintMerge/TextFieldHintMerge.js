import React from "react";
import PropTypes from "prop-types";
import { Hint } from '@zendeskgarden/react-textfields';
import '@zendeskgarden/react-textfields/dist/styles.css';

export default class TextFieldHintMerge extends React.Component {
  render() {
    return (
        <Hint {...this.props}>
            {this.props.children}
        </Hint>
    )
  }
}

TextFieldHintMerge.propTypes = {
    children: PropTypes.string,
    small: PropTypes.bool
};