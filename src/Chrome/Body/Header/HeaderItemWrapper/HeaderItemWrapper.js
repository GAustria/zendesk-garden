import React from "react";
import PropTypes from "prop-types";
import { HeaderItemWrapper as HeaderItemWrapperM } from "@zendeskgarden/react-chrome";
import "@zendeskgarden/react-chrome/dist/styles.css";

const HeaderItemWrapper = props => <HeaderItemWrapperM {...props} />;

HeaderItemWrapper.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  logo: PropTypes.bool,
  maxX: PropTypes.bool,
  maxY: PropTypes.bool,
  product: PropTypes.oneOf([
    "chat",
    "connect",
    "explore",
    "guide",
    "message",
    "support",
    "talk"
  ]),
  round: PropTypes.bool,
  style: PropTypes.object
};

export default HeaderItemWrapper;
