import React from "react";
import PropTypes from "prop-types";
import { HeaderItem as HeaderItemM } from "@zendeskgarden/react-chrome";
import "@zendeskgarden/react-chrome/dist/styles.css";

const HeaderItem = props => <HeaderItemM {...props} />;

HeaderItem.propTypes = {
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

export default HeaderItem;
