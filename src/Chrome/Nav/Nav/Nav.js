import React from 'react';
import PropTypes from 'prop-types';
import { Nav as NavM } from '@zendeskgarden/react-chrome';
import '@zendeskgarden/react-chrome/dist/styles.css';

const Nav = (props) => <NavM {...props} />

Nav.propTypes = {
    children: PropTypes.node,
    dark: PropTypes.bool,
    expanded: PropTypes.bool,
    light: PropTypes.bool,
    style: PropTypes.object
}

export default Nav;