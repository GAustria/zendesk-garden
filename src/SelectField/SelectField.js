import React from "react";
import PropTypes from "prop-types";
import { SelectField as SelectFieldM, Select, Item} from '@zendeskgarden/react-select';
import '@zendeskgarden/react-select/dist/styles.css';

export default class SelectFieldMerge extends React.Component {
  render() {
    const options = this.props.data.map( (item, i) => {
        return <Item key={`item-${i}`}>{item}</Item>
    });

    return (
        <SelectFieldM {...this.props}>
            {this.props.children}
            <Select
                options={options}
            >
            </Select>
        </SelectFieldM>
    )
  }
}

SelectFieldMerge.propTypes = {
    data: PropTypes.array,
    /** Animate opening of Menu*/
    animate: PropTypes.bool,
    /** Appends the menu to the provided element */
    appendToNode: PropTypes.any,
    /** Whether to include an arrow on the visible arrow */
    arrow: PropTypes.bool,
    /** Menu Items you want to display. All children require a `key` prop */
    children: PropTypes.node,
    /**  Whether Popper.js should update based on DOM resize events */
    eventsEnabled: PropTypes.bool,
    id: PropTypes.string,
    /** Controls visibility of menu */
    isOpen: PropTypes.bool,
    /** The currently focused item */
    focusedKey: PropTypes.string,
    /** Returns all controlled state. Used for controlling usage. */
    onStateChange: PropTypes.func,
    trigger: PropTypes.func,
    /** Callback for when a menu item has been selected by keyboard or mouse */
    onChange: PropTypes.func,
    /** Passes options to [Popper.JS Instance](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#new-popperreference-popper-options) */
    popperModifiers: PropTypes.object,
    /**  The ref of the select visualization */
    selectRef: PropTypes.func,
    /** All options to display within the Select dropdown */
    options: PropTypes.array,
    /**  Whether the component is disabled */
    disabled: PropTypes.bool,
    /** Props to be spread onto the Dropdown element */
    dropdownProps: PropTypes.object,
    /** The z-index of the popper.js placement container */
    zIndex: PropTypes.number
};