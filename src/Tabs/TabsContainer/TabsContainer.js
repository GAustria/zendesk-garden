import React from 'react';
import PropTypes from 'prop-types';
import { TabsContainer as TabsContainerM } from '@zendeskgarden/react-tabs';
import '@zendeskgarden/react-tabs/dist/styles.css';

const TabsContainer = props => <TabsContainerM {...props} />;

TabsContainer.propTypes = {
    children: PropTypes.node,
    focusedKey: PropTypes.string,
    id: PropTypes.string,
    onChange: PropTypes.func,
    onStateChange: PropTypes.func,
    render: PropTypes.func,
    selectedKey: PropTypes.string,
    vertical: PropTypes.bool
}

export default TabsContainer;