import React from "react";
import PropTypes from "prop-types";
import { Label } from '@zendeskgarden/react-toggles';
import '@zendeskgarden/react-toggles/dist/styles.css';

export default class ToggleLabelMerge extends React.Component {
  render() {
    return (
        <Label {...this.props}>
            {this.props.children}
        </Label>
    )
  }
}

ToggleLabelMerge.propTypes = {
    regular: PropTypes.bool,
    checked: PropTypes.bool,
    hidden: PropTypes.bool,
    hovered: PropTypes.bool,
    focused: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.string
};