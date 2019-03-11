import React from "react";
import PropTypes from "prop-types";
import { Autocomplete as AutocompleteM } from "@zendeskgarden/react-autocomplete";

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: this.props.options[0].value
    };
  }

  setValue(value) {
    this.setState({ selectedValue: value });
  }

  render() {
    return (
      <AutocompleteM
        {...this.props}
        onChange={value => this.setValue(value)}
        selectedValue={this.state.selectedValue}
      />
    );
  }
}

Autocomplete.propTypes = {
  options: PropTypes.array,
  "aria-label": PropTypes.string,
  disabled: PropTypes.bool,
  /* Applies inset box-shadow styling on focus */
  focusInset: PropTypes.bool,
  hint: PropTypes.node,
  inputRef: PropTypes.func,
  label: PropTypes.string,
  maxHeight: PropTypes.string,
  message: PropTypes.node,
  noOptionsMessage: PropTypes.string,
  onChange: PropTypes.func,
  optionFilter: PropTypes.func,
  placeholder: PropTypes.string,
  renderDropdown: PropTypes.func,
  renderOption: PropTypes.func,
  selectedValue: PropTypes.string,
  small: PropTypes.bool,
  validation: PropTypes.oneOf(["success", "warning", "error", "none"])
};
