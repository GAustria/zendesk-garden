import React from "react";
import PropTypes from "prop-types";
import { Tag, Avatar, Close } from '@zendeskgarden/react-tags';
import '@zendeskgarden/react-tags/dist/styles.css';

export default class TagMerge extends React.Component {
  render() {
    const props = Object.assign({}, this.props);
    delete this.props.avatarSrc;
    delete this.props.avatarAlt;
    delete this.props.close;

    const close =  <Close />;
    const avatar = <Avatar><img src={props.avatarSrc} alt={props.avatarAlt} /></Avatar>;
    return (
        <Tag {...this.props}>
            { props.avatarSrc ? avatar : false }
            {this.props.children}
            { props.close ? close : false }
        </Tag>
    )
  }
}

// 


TagMerge.propTypes = {
    children: PropTypes.string,
    size: PropTypes.oneOf(["small", "large"]),
    pill: PropTypes.bool,
    focused: PropTypes.bool,   
    hovered: PropTypes.bool,
    type: PropTypes.oneOf(["grey", "blue", "kale", "red", "green", "yellow"]),
    avatarSrc: PropTypes.string,
    avatarAlt: PropTypes.string,
    close: PropTypes.bool
};