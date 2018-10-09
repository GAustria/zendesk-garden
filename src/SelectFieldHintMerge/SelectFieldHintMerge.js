import React from "react";
import PropTypes from "prop-types";
import { Hint } from '@zendeskgarden/react-select';
import '@zendeskgarden/react-select/dist/styles.css';

export default class SelectFieldHintMerge extends React.Component {
  render() {
    return (
        <Hint {...this.props}>
            {this.props.children}
        </Hint>
    )
  }
}

SelectFieldHintMerge.propTypes = {
    children: PropTypes.string
};