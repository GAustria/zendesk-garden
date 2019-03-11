import React from 'react';
import PropTypes from 'prop-types';
import { Grid as GridM } from '@zendeskgarden/react-grid';
import '@zendeskgarden/react-grid/dist/styles.css';

const Grid = props => <GridM {...props} />;

Grid.propTypes = {
    children: PropTypes.node,
    debug: PropTypes.bool,
    fluid: PropTypes.bool,
};

export default Grid;