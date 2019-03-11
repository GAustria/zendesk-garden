import React from 'react';
import PropTypes from 'prop-types';
import { FooterItem as FooterItemM } from '@zendeskgarden/react-chrome';
import '@zendeskgarden/react-chrome/dist/styles.css';

const FooterItem = (props) => <FooterItemM {...props} />

FooterItem.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
}

export default FooterItem;