import React from 'react';
import PropTypes from 'prop-types';
import { Tabs as TabsM } from '@zendeskgarden/react-tabs';
import '@zendeskgarden/react-tabs/dist/styles.css';

const Tabs = props => <TabsM {...props} />;

Tabs.propTypes = {
    children: PropTypes.node,
    onChange: PropTypes.func,
    onStateChange: PropTypes.func,
    selectedKey: PropTypes.string,
    vertical: PropTypes.bool
}

export default Tabs;