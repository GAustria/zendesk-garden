import React from 'react';
import PropTypes from 'prop-types';
import { HeaderCell as HeaderCellM } from '@zendeskgarden/react-tables';
import '@zendeskgarden/react-tables/dist/styles.css';

const HeaderCell = props => <HeaderCellM {...props} />;

HeaderCell.propTypes = {
    children: PropTypes.node,
    menu: PropTypes.bool,
    minimum: PropTypes.bool,
    truncate: PropTypes.bool,
    width: PropTypes.string
}

export default HeaderCell;