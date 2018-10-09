import React from "react";
import PropTypes from "prop-types";
import { Hint } from '@zendeskgarden/react-radios';
import '@zendeskgarden/react-radios/dist/styles.css';

export default class RadioHintMerge extends React.Component {
  render() {
    return (
        <Hint {...this.props}>
            {this.props.children}
        </Hint>
    )
  }
}

RadioHintMerge.propTypes = {
    children: PropTypes.string
};