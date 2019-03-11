import React from "react";
import PropTypes from "prop-types";
import { SM, MD, LG, XL, XXL, XXXL } from '@zendeskgarden/react-typography';

export default class Typography extends React.Component {
    constructor(props) {
        super(props);
      }

  render() {
    if(this.props.size === "sm") {
        return (
            <SM {...this.props}>
                {this.props.children}
            </SM>
        )
    }
    else if(this.props.size === "md") {
        return (
            <MD {...this.props}>
                {this.props.children}
            </MD>
        )
    }
    else if(this.props.size === "lg") {
        return (
            <LG {...this.props}>
                {this.props.children}
            </LG>
        )
    }
    else if(this.props.size === "xl") {
        return (
            <XL {...this.props}>
                {this.props.children}
            </XL>
        )
    }
    else if(this.props.size === "xxl") {
        return (
            <XXL {...this.props}>
                {this.props.children}
            </XXL>
        )
    }
    else if(this.props.size === "xxxl") {
        return (
            <XXXL {...this.props}>
                {this.props.children}
            </XXXL>
        )
    }
  }
}

Typography.propTypes = {
    children: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl", "xxxl"]),
    tag: PropTypes.any
};