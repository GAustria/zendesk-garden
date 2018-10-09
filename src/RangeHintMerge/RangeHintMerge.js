import React from "react";
import PropTypes from "prop-types";
import { Hint } from '@zendeskgarden/react-ranges';
import '@zendeskgarden/react-ranges/dist/styles.css';

export default class RangeHintMerge extends React.Component {
  render() {
    return (
        <Hint {...this.props}>
            {this.props.children}
        </Hint>
    )
  }
}

RangeHintMerge.propTypes = {
    children: PropTypes.string,
    small: PropTypes.bool
};