import React from 'react';
import PropTypes from 'prop-types';
import { Item } from '@zendeskgarden/react-menus';
import "@zendeskgarden/react-menus/dist/styles.css";

const MenuItem = props => <Item {...props} />;

MenuItem.propTypes = {
    children: PropTypes.node,
    active: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    focused: PropTypes.bool,
    hovered: PropTypes.bool,
    onClick: PropTypes.func
}

export default MenuItem;
