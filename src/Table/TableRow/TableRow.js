import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '@zendeskgarden/react-tables';
import '@zendeskgarden/react-tables/dist/styles.css';

const TableRow = props => <Row {...props} />;

TableRow.propTypes = {
    children: PropTypes.node
}

export default TableRow;