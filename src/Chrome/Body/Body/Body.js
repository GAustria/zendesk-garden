import React from 'react';
import PropTypes from 'prop-types';
import { Body as BodyM } from '@zendeskgarden/react-chrome';
import '@zendeskgarden/react-chrome/dist/styles.css';

const Body = (props) => <BodyM {...props} />

Body.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
}

export default Body;