import React from "react";
import PropTypes from "prop-types";
import { Label } from '@zendeskgarden/react-ranges';
import '@zendeskgarden/react-ranges/dist/styles.css';

export default class RangeLabelMerge extends React.Component {
  render() {
    return (
        <Label {...this.props}>
            {this.props.children}
        </Label>
    )
  }
}

RangeLabelMerge.propTypes = {
    regular: PropTypes.bool,
    small: PropTypes.bool
};