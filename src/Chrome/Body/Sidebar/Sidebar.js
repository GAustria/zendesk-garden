import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar as SidebarM } from '@zendeskgarden/react-chrome';
import '@zendeskgarden/react-chrome/dist/styles.css';

const Sidebar = (props) => <SidebarM {...props} />

Sidebar.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
}

export default Sidebar;