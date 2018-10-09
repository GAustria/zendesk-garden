import React from "react";
import PropTypes from "prop-types";
import { RangeField } from "@zendeskgarden/react-ranges";
import "@zendeskgarden/react-ranges/dist/styles.css";

export default class RangeFieldMerge extends React.Component {
 render() {
    return (
      <RangeField
        {...this.props}
      >
      {this.props.children}
      </RangeField>
    );
  }
}

RangeFieldMerge.propTypes = {
  /** The root ID to use for descendants. A unique ID is created if none is provided. */
  id: PropTypes.string,
  /** Apply inline styling to all children */
  inline: PropTypes.bool,
  children: PropTypes.node
};
