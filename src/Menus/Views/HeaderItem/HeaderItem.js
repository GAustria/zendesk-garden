import React from 'react';
import PropTypes from 'prop-types';
import { HeaderItem as HeaderItemM } from '@zendeskgarden/react-menus';
import "@zendeskgarden/react-menus/dist/styles.css";

const HeaderItem = props => <HeaderItemM {...props} />;

HeaderItem.propTypes = {
    children: PropTypes.node,
    active: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    focused: PropTypes.bool,
    hovered: PropTypes.bool,
}

export default HeaderItem;
