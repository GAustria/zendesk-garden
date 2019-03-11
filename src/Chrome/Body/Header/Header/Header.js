import React from 'react';
import PropTypes from 'prop-types';
import { Header as HeaderM } from '@zendeskgarden/react-chrome';
import '@zendeskgarden/react-chrome/dist/styles.css';

const Header = (props) => <HeaderM {...props} />

Header.propTypes = {
    children: PropTypes.node,
    standalone: PropTypes.bool,
    style: PropTypes.object
}

export default Header;