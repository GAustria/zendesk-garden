import React from 'react';
import PropTypes from 'prop-types';
import { HeaderItemIcon as HeaderItemIconM } from '@zendeskgarden/react-chrome';
import '@zendeskgarden/react-chrome/dist/styles.css';

const HeaderItemIcon = (props) => <HeaderItemIconM {...props} />

HeaderItemIcon.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
}

export default HeaderItemIcon;