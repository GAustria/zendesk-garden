import React from 'react';
import PropTypes from 'prop-types';
import { Main as MainM } from '@zendeskgarden/react-chrome';
import '@zendeskgarden/react-chrome/dist/styles.css';

const Main = (props) => <MainM {...props} />

Main.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
}

export default Main;