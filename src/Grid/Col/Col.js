import React from 'react';
import PropTypes from 'prop-types';
import { Col as ColM } from '@zendeskgarden/react-grid';
import '@zendeskgarden/react-grid/dist/styles.css';

const Col = props => <ColM {...props} />;

Col.propTypes = {
    children: PropTypes.node,
    /* Use flexbox alignment utilities to horizontally align */
    alignSelf: PropTypes.oneOf(["start", "center", "end"]),
    justifyContent: PropTypes.oneOf(["start", "center", "end", "around", "between"]),
    /* Sizing for large breakpoints. */
    lg: PropTypes.number,
    /* Sizing for medium breakpoints. */
    md: PropTypes.number,
    offsetLg: PropTypes.number,
    offsetSm: PropTypes.number,
    offsetXl: PropTypes.number,
    offsetXs: PropTypes.number,
    order: PropTypes.any,
    /* Sizing for all breakpoints. */
    size: PropTypes.number,
    /* Sizing for small breakpoints. */
    sm: PropTypes.number,
    /* Sizing for extra large breakpoints. */
    xl: PropTypes.number,
    /* Sizing for extra small breakpoints. */
    xs: PropTypes.number,
};

export default Col;