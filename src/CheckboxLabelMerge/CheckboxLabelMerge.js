import React from "react";
import PropTypes from "prop-types";
import { Label } from '@zendeskgarden/react-checkboxes';
import '@zendeskgarden/react-checkboxes/dist/styles.css';

export default class CheckboxLabelMerge extends React.Component {
  render() {
    return (
        <Label {...this.props}>
            {this.props.children}
        </Label>
    )
  }
}

CheckboxLabelMerge.propTypes = {
    regular: PropTypes.bool,
    checked: PropTypes.bool,
    hidden: PropTypes.bool,
    indeterminate: PropTypes.bool,
    hovered: PropTypes.bool,
    focused: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.string
};