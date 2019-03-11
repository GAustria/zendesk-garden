import React from 'react';
import PropTypes from 'prop-types';
import { OverflowButton as OverflowButtonM } from '@zendeskgarden/react-tables';
import '@zendeskgarden/react-tables/dist/styles.css';

const OverflowButton = props => <OverflowButtonM {...props} />;

OverflowButton.propTypes = {
    children: PropTypes.node,
    active: PropTypes.bool,
    focused: PropTypes.bool,
    hovered: PropTypes.bool
}

export default OverflowButton;