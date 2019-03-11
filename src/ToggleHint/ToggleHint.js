import React from "react";
import PropTypes from "prop-types";
import { Hint } from '@zendeskgarden/react-toggles';
import '@zendeskgarden/react-toggles/dist/styles.css';

const ToggleHint = (props) => <Hint {...props} />;

ToggleHint.propTypes = {
    children: PropTypes.string
};

export default ToggleHint;