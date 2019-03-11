import React from 'react';
import PropTypes from 'prop-types';
import { Table as TableM } from '@zendeskgarden/react-tables';
import '@zendeskgarden/react-tables/dist/styles.css';

const Table = props => <TableM {...props} />;

Table.propTypes = {
    children: PropTypes.node,
    scrollable: PropTypes.string,
    size: PropTypes.oneOf(["small", "large"])
}

export default Table;