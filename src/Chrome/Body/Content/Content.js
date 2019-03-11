import React from 'react';
import PropTypes from 'prop-types';
import { Content as ContentM } from '@zendeskgarden/react-chrome';
import '@zendeskgarden/react-chrome/dist/styles.css';

const Content = (props) => <ContentM {...props} />

Content.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
}

export default Content;