import React from "react";
import PropTypes from "prop-types";
import { Anchor as AnchorM } from '@zendeskgarden/react-buttons';
import '@zendeskgarden/react-buttons/dist/styles.css';

const Anchor = (props) => <AnchorM {...props} />;

Anchor.propTypes = {
  children: PropTypes.string,
  /** Apply danger styling */
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  active: PropTypes.bool,
  external: PropTypes.bool,
};

export default Anchor;