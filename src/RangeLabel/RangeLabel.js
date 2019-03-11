import React from "react";
import PropTypes from "prop-types";
import { Label } from '@zendeskgarden/react-ranges';
import '@zendeskgarden/react-ranges/dist/styles.css';

const RangeLabel = (props) => <Label {...props} />;

RangeLabel.propTypes = {
    regular: PropTypes.bool,
    small: PropTypes.bool
};

export default RangeLabel;