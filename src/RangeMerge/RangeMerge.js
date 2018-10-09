import React from "react";
import PropTypes from "prop-types";
import { Range } from "@zendeskgarden/react-ranges";
import "@zendeskgarden/react-ranges/dist/styles.css";

export default class RangeMerge extends React.Component {
 render() {
    return (
      <Range
        {...this.props}
      />
    );
  }
}

RangeMerge.propTypes = {
  defaultValue: PropTypes.number,
  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  rangeRef: PropTypes.func,
  backgroundSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
