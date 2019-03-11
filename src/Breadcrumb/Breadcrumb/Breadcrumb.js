import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb as BreadcrumbM } from '@zendeskgarden/react-breadcrumbs';
import '@zendeskgarden/react-breadcrumbs/dist/styles.css';

const Breadcrumb = (props) => <BreadcrumbM {...props} />

Breadcrumb.propTypes = {
    children: PropTypes.node,
}

export default Breadcrumb;