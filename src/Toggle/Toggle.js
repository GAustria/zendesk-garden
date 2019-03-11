import React from "react";
import PropTypes from "prop-types";
import { Toggle as ToggleM } from "@zendeskgarden/react-toggles";
import "@zendeskgarden/react-toggles/dist/styles.css";

const Toggle = (props) => <ToggleM {...props} />;

Toggle.propTypes = {
    /** The root ID to use for descendants. A unique ID is created if none is provided. */
    id: PropTypes.any,
    /** Applies props to the containing `<div>` element */
    wrapperProps: PropTypes.object,
    children: PropTypes.node
};

export default Toggle;