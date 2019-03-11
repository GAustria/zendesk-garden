import React from 'react';
import PropTypes from 'prop-types';
import { Head as HeadM } from '@zendeskgarden/react-tables';
import '@zendeskgarden/react-tables/dist/styles.css';

const Head = props => <HeadM {...props} />;

Head.propTypes = {
    children: PropTypes.node,
}

export default Head;