import React from 'react';
import PropTypes from 'prop-types';
import { Separator as SeparatorM } from '@zendeskgarden/react-menus';
import "@zendeskgarden/react-menus/dist/styles.css";

const Separator = props => <SeparatorM {...props} />;

Separator.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
}

export default Separator;
