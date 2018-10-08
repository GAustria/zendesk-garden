import React from "react";
import PropTypes from "prop-types";
import { Avatar } from '@zendeskgarden/react-avatars';
import '@zendeskgarden/react-avatars/dist/styles.css';

export default class AvatarMerge extends React.Component {
  render() {
    const props = Object.assign({}, this.props);
    delete this.props.imgSrc;
    delete this.props.imgAlt;
    console.log(this.props);
    console.log(props);
    return (
        <Avatar {...this.props}>
            <img src={props.imgSrc} alt={props.imgAlt} />
        </Avatar>
    )
  }
}

AvatarMerge.propTypes = {
    /** Applies system styling */
    system: PropTypes.bool,
    size: PropTypes.oneOf(["small", "large"]),
    disabled: PropTypes.bool,
    /** Removes border for improved display on a dark background */
    isBorderless: PropTypes.bool,
    /** Src of the image */
    imgSrc: PropTypes.string,
    /** Alt of the image */
    imgAlt: PropTypes.string
};

