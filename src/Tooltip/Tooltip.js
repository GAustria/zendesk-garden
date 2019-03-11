import React from "react";
import PropTypes from "prop-types";
import { Tooltip as TooltipM } from "@zendeskgarden/react-tooltips";
import "@zendeskgarden/react-tooltips/dist/styles.css";

const Tooltip = props => <TooltipM {...props} />;

Tooltip.propTypes = {
  children: PropTypes.node,
  appendToBody: PropTypes.bool,
  arrow: PropTypes.bool,
  delayMilliseconds: PropTypes.number,
  eventsEnabled: PropTypes.bool,
  id: PropTypes.string,
  placement: PropTypes.oneOf([
    "auto",
    "top",
    "top-start",
    "top-end",
    "end",
    "end-top",
    "end-bottom",
    "bottom",
    "bottom-start",
    "bottom-end",
    "start",
    "start-top",
    "start-bottom"
  ]),
  popperModifiers: PropTypes.object,
  size: PropTypes.oneOf(["small", "medium", "large", "extra-lerge"]),
  trigger: PropTypes.node,
  type: PropTypes.oneOf(["light", "dark"]),
  zIndex: PropTypes.number
};

export default Tooltip;
