import React from 'react';
import PropTypes from 'prop-types';
import { Footer as FooterM } from '@zendeskgarden/react-chrome';
import '@zendeskgarden/react-chrome/dist/styles.css';

const Footer = (props) => <FooterM {...props} />

Footer.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
}

export default Footer;