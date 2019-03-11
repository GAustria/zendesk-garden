import React from 'react';
import PropTypes from 'prop-types';
import { Cell as CellM } from '@zendeskgarden/react-tables';
import '@zendeskgarden/react-tables/dist/styles.css';

const Cell = props => <CellM {...props} />;

Cell.propTypes = {
    children: PropTypes.node,
    active: PropTypes.bool,
    minimum: PropTypes.bool,
    truncate: PropTypes.bool,
    width: PropTypes.string
}

export default Cell;