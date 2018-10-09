import React from "react";
import PropTypes from "prop-types";
import { Hint } from '@zendeskgarden/react-checkboxes';
import '@zendeskgarden/react-checkboxes/dist/styles.css';

export default class CheckboxHintMerge extends React.Component {
  render() {
    return (
        <Hint {...this.props}>
            {this.props.children}
        </Hint>
    )
  }
}

CheckboxHintMerge.propTypes = {
    children: PropTypes.string
};