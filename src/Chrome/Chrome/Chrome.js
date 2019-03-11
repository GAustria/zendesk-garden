import React from 'react';
import PropTypes from 'prop-types';
import { Chrome as ChromeM } from '@zendeskgarden/react-chrome';
import '@zendeskgarden/react-chrome/dist/styles.css';

const Chrome = (props) => <ChromeM {...props} />

Chrome.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
}

export default Chrome;