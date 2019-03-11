import React from 'react';
import PropTypes from 'prop-types';
import { Caption as CaptionM } from '@zendeskgarden/react-tables';
import '@zendeskgarden/react-tables/dist/styles.css';

const Caption = props => <CaptionM {...props} />;

Caption.propTypes = {
    children: PropTypes.node,
}

export default Caption;