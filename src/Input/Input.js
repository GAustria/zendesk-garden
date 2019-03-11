import React from "react";
import PropTypes from "prop-types";
import { Input as InputM} from "@zendeskgarden/react-textfields";
import "@zendeskgarden/react-textfields/dist/styles.css";

const Input = (props) => <InputM {...props} />;

Input.propTypes = {
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

export default Input;
