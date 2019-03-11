import React from "react";
import PropTypes from "prop-types";
import { Tag as TagM, Avatar, Close } from "@zendeskgarden/react-tags";
import "@zendeskgarden/react-tags/dist/styles.css";

const Tag = props => {
  return (
    <TagM {...props}>
      {props.avatarSrc ? <Close /> : null}
      {props.children}
      {props.close ? (
        <Avatar>
          <img src={props.avatarSrc} alt={props.avatarAlt} />
        </Avatar>
      ) : null}
    </TagM>
  );
};

Tag.propTypes = {
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

export default Tag;
