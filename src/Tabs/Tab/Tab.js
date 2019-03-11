import React from 'react';
import PropTypes from 'prop-types';
import { Tab as TabM } from '@zendeskgarden/react-tabs';
import '@zendeskgarden/react-tabs/dist/styles.css';

const Tab = props => <TabM {...props} />;

Tab.propTypes = {
    children: PropTypes.node,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    focused: PropTypes.bool,
    hovered: PropTypes.bool,
    selected: PropTypes.bool,
}

export default Tab;