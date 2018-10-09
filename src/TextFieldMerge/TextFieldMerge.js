import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@zendeskgarden/react-textfields";
import "@zendeskgarden/react-textfields/dist/styles.css";

export default class TextFieldMerge extends React.Component {
 render() {
    return (
      <TextField
        {...this.props}
      >
        {this.props.children}
      </TextField>
    );
  }
}

TextFieldMerge.propTypes = {
  /** The root ID to use for descendants. A unique ID is created if none is provided. */
  id: PropTypes.string,
  /** Apply inline styling to all children */
  inline: PropTypes.bool,
  children: PropTypes.node,
  /** Allows flush spacing of Tab elements */
  tagLayout: PropTypes.bool,
  /** Applies flex layout to support MediaFigure components */
  mediaLayout: PropTypes.bool,
  small: PropTypes.bool,
  /** Applies select styling */
  select: PropTypes.bool,
  /** Removes all borders and styling */
  bare: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  /** Displays select open state */
  open: PropTypes.bool,
  validation: PropTypes.oneOf([
    "success",
    "warning",
    "error",
    "none"
  ])
};
