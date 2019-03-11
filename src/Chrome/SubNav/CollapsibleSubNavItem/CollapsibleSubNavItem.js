import React from "react";
import PropTypes from "prop-types";
import { CollapsibleSubNavItem as CollapsibleSubNavItemM } from "@zendeskgarden/react-chrome";
import "@zendeskgarden/react-chrome/dist/styles.css";

const CollapsibleSubNavItem = props => <CollapsibleSubNavItemM {...props} />;

CollapsibleSubNavItem.propTypes = {
  children: PropTypes.node,
  expanded: PropTypes.bool,
  focused: PropTypes.bool,
  header: PropTypes.node,
  hovered: PropTypes.bool,
  onChange: PropTypes.func,
  style: PropTypes.object,
};

export default CollapsibleSubNavItem;
