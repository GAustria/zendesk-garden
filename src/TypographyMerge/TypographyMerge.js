import React from "react";
import PropTypes from "prop-types";
import { SM, MD, LG, XL, XXL, XXXL } from '@zendeskgarden/react-typography';

export default class TypographyMerge extends React.Component {
  render() {
    const props = Object.assign({}, this.props);
    delete this.props.size;

    if(props.size === "sm") {
        return (
            <SM {...this.props}>
                {this.props.children}
            </SM>
        )
    }
    else if(props.size === "md") {
        return (
            <MD {...this.props}>
                {this.props.children}
            </MD>
        )
    }
    else if(props.size === "lg") {
        return (
            <LG {...this.props}>
                {this.props.children}
            </LG>
        )
    }
    else if(props.size === "xl") {
        return (
            <XL {...this.props}>
                {this.props.children}
            </XL>
        )
    }
    else if(props.size === "xxl") {
        return (
            <XXL {...this.props}>
                {this.props.children}
            </XXL>
        )
    }
    else if(props.size === "xxxl") {
        return (
            <XXXL {...this.props}>
                {this.props.children}
            </XXXL>
        )
    }
  }
}

// 


TypographyMerge.propTypes = {
    children: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl", "xxxl"]),
    tag: PropTypes.any
};