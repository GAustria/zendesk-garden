import React from "react";
import PropTypes from "prop-types";
import { Hint } from '@zendeskgarden/react-toggles';
import '@zendeskgarden/react-toggles/dist/styles.css';

export default class ToggleHintMerge extends React.Component {
  render() {
    return (
        <Hint {...this.props}>
            {this.props.children}
        </Hint>
    )
  }
}

ToggleHintMerge.propTypes = {
    children: PropTypes.string
};