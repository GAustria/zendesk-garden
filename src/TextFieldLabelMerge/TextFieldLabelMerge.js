import React from "react";
import PropTypes from "prop-types";
import { Label } from '@zendeskgarden/react-textfields';
import '@zendeskgarden/react-textfields/dist/styles.css';

export default class TextFieldLabelMerge extends React.Component {
  render() {
    return (
        <Label {...this.props}>
            {this.props.children}
        </Label>
    )
  }
}

TextFieldLabelMerge.propTypes = {
    regular: PropTypes.bool,
    small: PropTypes.bool
};