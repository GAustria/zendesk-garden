import React from "react";
import PropTypes from "prop-types";
import { Label } from '@zendeskgarden/react-select';
import '@zendeskgarden/react-select/dist/styles.css';

export default class SelectFieldLabelMerge extends React.Component {
  render() {
    return (
        <Label {...this.props}>
            {this.props.children}
        </Label>
    )
  }
}

SelectFieldLabelMerge.propTypes = {
    regular: PropTypes.bool,
    checked: PropTypes.bool,
    hidden: PropTypes.bool,
    indeterminate: PropTypes.bool,
    hovered: PropTypes.bool,
    focused: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.string
};