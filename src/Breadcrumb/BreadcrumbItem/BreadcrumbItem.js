import React from 'react';
import PropTypes from 'prop-types';
import { Item } from '@zendeskgarden/react-breadcrumbs';
import '@zendeskgarden/react-breadcrumbs/dist/styles.css';

const BreadcrumbItem = (props) => <Item {...props} />

BreadcrumbItem.propTypes = {
    children: PropTypes.node,
    current: PropTypes.bool
}

export default BreadcrumbItem;