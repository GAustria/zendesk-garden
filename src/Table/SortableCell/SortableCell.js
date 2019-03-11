import React from 'react';
import PropTypes from 'prop-types';
import { SortableCell as SortableCellM } from '@zendeskgarden/react-tables';
import '@zendeskgarden/react-tables/dist/styles.css';

const SortableCell = props => <SortableCellM {...props} />;

SortableCell.propTypes = {
    children: PropTypes.node,
    active: PropTypes.bool,
    buttonRef: PropTypes.func,
    cellProps: PropTypes.object,
    focused: PropTypes.bool,
    minimum: PropTypes.bool,
    sort: PropTypes.oneOf(["asc", "desc"]),
    truncate: PropTypes.bool,
    width: PropTypes.string
}

export default SortableCell;