import React from 'react';
import PropTypes from 'prop-types';
import { HeaderRow as HeaderRowM } from '@zendeskgarden/react-tables';
import '@zendeskgarden/react-tables/dist/styles.css';

const HeaderRow = props => <HeaderRowM {...props} />;

HeaderRow.propTypes = {
    children: PropTypes.node
}

export default HeaderRow;