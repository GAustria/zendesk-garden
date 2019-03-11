import React from 'react';
import PropTypes from 'prop-types';
import { HeaderItemText as HeaderItemTextM } from '@zendeskgarden/react-chrome';
import '@zendeskgarden/react-chrome/dist/styles.css';

const HeaderItemText = (props) => <HeaderItemTextM {...props} />

HeaderItemText.propTypes = {
    children: PropTypes.node,
    clipped: PropTypes.bool,
    style: PropTypes.object
}

export default HeaderItemText;