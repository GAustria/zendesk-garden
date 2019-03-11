import React from 'react';
import PropTypes from 'prop-types';
import { BreadcrumbContainer as BreadcrumbContainerM } from '@zendeskgarden/react-breadcrumbs'
import '@zendeskgarden/react-breadcrumbs/dist/styles.css';

const BreadcrumbContainer = props => <BreadcrumbContainerM {...props} />;

BreadcrumbContainer.propTypes = {
    children: PropTypes.node,
    render: PropTypes.func
}

export default BreadcrumbContainer;