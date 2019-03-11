import React from "react";
import PropTypes from "prop-types";
import { Avatar as AvatarM} from '@zendeskgarden/react-avatars';
import '@zendeskgarden/react-avatars/dist/styles.css';

const Avatar = (props) => {
  return (
    <AvatarM {...props}>
      <img src={props.imgSrc} alt={props.imgAlt} />
    </AvatarM>
  )
}
 
Avatar.propTypes = {
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

export default Avatar;
