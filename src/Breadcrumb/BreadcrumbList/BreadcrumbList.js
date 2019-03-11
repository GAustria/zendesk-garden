import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@zendeskgarden/react-breadcrumbs';
import '@zendeskgarden/react-breadcrumbs/dist/styles.css';

const BreadcrumbList = (props) => <List {...props} />

BreadcrumbList.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
}

export default BreadcrumbList;