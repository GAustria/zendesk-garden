import React from 'react';
import PropTypes from 'prop-types';
import { Body } from '@zendeskgarden/react-tables';
import '@zendeskgarden/react-tables/dist/styles.css';

const TableBody = props => <Body {...props} />;

TableBody.propTypes = {
    children: PropTypes.node
}

export default TableBody;