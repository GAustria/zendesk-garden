import React from "react";
import PropTypes from "prop-types";
import { Toggle } from "@zendeskgarden/react-toggles";
import "@zendeskgarden/react-toggles/dist/styles.css";

export default class ToggleMerge extends React.Component {
 render() {
    return (
      <Toggle
        {...this.props}
      >
        {this.props.children}
      </Toggle>
    );
  }
}

ToggleMerge.propTypes = {
    /** The root ID to use for descendants. A unique ID is created if none is provided. */
    id: PropTypes.any,
    /** Applies props to the containing `<div>` element */
    wrapperProps: PropTypes.object,
    children: PropTypes.node
};
