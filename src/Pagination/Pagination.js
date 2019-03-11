import React from "react";
import PropTypes from "prop-types";
import { Pagination as PaginationM } from "@zendeskgarden/react-pagination";
import "@zendeskgarden/react-pagination/dist/styles.css";

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPages: this.props.totalPages
    };
  }

  setCurrentPage(data) {
      this.setState({currentPage: data})
  }

  render() {
    return (
      <PaginationM
        {...this.props}
        currentPage={this.state.currentPage}
        onChange={data => this.setCurrentPage(data)}
      />
    );
  }
}

Pagination.propTypes = {
  /** The currently selected page */
  currentPage: PropTypes.number,
  /** The currently focused key */
  focusedKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** The total number of pages available */
  totalPages: PropTypes.number,
  /** The number of pages to pad the currentPage with when determining the Gap placement */
  pagePadding: PropTypes.number,
  onStateChange: PropTypes.func,
  onChange: PropTypes.func,
  /** The root ID to use for descendants. A unique ID is created if none is provided. */
  id: PropTypes.string,
  /** Allows custom props to be applied to each page element. Useful for QA attributes and localization. */
  transformPageProps: PropTypes.func
};

Pagination.defaultPops = {
    currentPage: 1
}
