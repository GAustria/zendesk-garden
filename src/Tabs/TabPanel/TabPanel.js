import React from 'react';
import PropTypes from 'prop-types';
import { TabPanel as TabPanelM } from '@zendeskgarden/react-tabs';
import '@zendeskgarden/react-tabs/dist/styles.css';

const TabPanel = props => <TabPanelM {...props} />;

TabPanel.propTypes = {
    children: PropTypes.node,
}

export default TabPanel;