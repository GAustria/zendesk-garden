import React from 'react';
import PropTypes from 'prop-types';
import { TabsView as TabsViewM } from '@zendeskgarden/react-tabs';
import '@zendeskgarden/react-tabs/dist/styles.css';

const TabsView = props => <TabsViewM {...props} />;

TabsView.propTypes = {
    children: PropTypes.node,
    vertical: PropTypes.bool
}

export default TabsView;