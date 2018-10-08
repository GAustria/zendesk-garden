import React from "react";
import PropTypes from "prop-types";
import { ButtonGroup } from "@zendeskgarden/react-buttons";
import "@zendeskgarden/react-buttons/dist/styles.css";

export default class ButtonGroupMerge extends React.Component {
  render() {
    return <ButtonGroup {...this.props}>{this.props.children}</ButtonGroup>;
  }
}

ButtonGroupMerge.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  onStateChange: PropTypes.func,
  selectedKey: PropTypes.string
};
