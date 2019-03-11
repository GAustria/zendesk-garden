import React from 'react';
import PropTypes from 'prop-types';
import { TabsList as TabsListM } from '@zendeskgarden/react-tabs';
import '@zendeskgarden/react-tabs/dist/styles.css';

const TabsList = props => <TabsListM {...props} />;

TabsList.propTypes = {
    children: PropTypes.node,
}

export default TabsList;