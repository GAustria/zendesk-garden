import React from "react";
import PropTypes from "prop-types";
import { Radio } from "@zendeskgarden/react-radios";
import "@zendeskgarden/react-radios/dist/styles.css";

export default class RadioMerge extends React.Component {
 render() {
    return (
      <Radio
        {...this.props}
      >
        {this.props.children}
      </Radio>
    );
  }
}

RadioMerge.propTypes = {
  /** The root ID to use for descendants. A unique ID is created if none is provided. **/
  id: PropTypes.any,
  /** Applies props to the containing `<div>` element */
  wrapperProps: PropTypes.object,
  children: PropTypes.node,
  id: PropTypes.any,
  regular: PropTypes.bool,
  checked: PropTypes.bool,
  hidden: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  disabled: PropTypes.bool
};
