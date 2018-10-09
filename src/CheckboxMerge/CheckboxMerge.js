import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "@zendeskgarden/react-checkboxes";
import "@zendeskgarden/react-checkboxes/dist/styles.css";

export default class CheckboxMerge extends React.Component {
 render() {
    return (
      <Checkbox
        {...this.props}
      >
        {this.props.children}
      </Checkbox>
    );
  }
}

CheckboxMerge.propTypes = {
  /**  The root ID to use for descendants. A unique ID is created if none is provided. */
  id: PropTypes.any,
  /** Applies props to the containing `<div>` element */
  wrapperProps: PropTypes.object,
  regular: PropTypes.bool,
  checked: PropTypes.bool,
  hidden: PropTypes.bool,
  indeterminate: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node
};
