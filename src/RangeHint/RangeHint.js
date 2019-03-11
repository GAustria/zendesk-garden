import React from "react";
import PropTypes from "prop-types";
import { Hint } from '@zendeskgarden/react-ranges';
import '@zendeskgarden/react-ranges/dist/styles.css';

const RangeHint = (props) => <Hint {...props} />;

RangeHint.propTypes = {
    children: PropTypes.string,
    small: PropTypes.bool
};

export default RangeHint;