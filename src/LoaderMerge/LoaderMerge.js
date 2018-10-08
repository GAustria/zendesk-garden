import React from "react";
import PropTypes from "prop-types";
import { Dots } from '@zendeskgarden/react-loaders';

export default class LoaderMerge extends React.Component {
  render() {
    return (
        <Dots {...this.props} />
    )
  }
}

LoaderMerge.propTypes = {
    /** Size of the loader. Can inherit from `font-size` styling. */
    size: PropTypes.any,
    /** Velocity (speed) of the animation. Between -1 and 1. 
    This should only be maniuplated at extreme sizes. */
    velocity: PropTypes.number,
    /** Color of the loader. Can inherit from `color` styling. */
    color: PropTypes.string,
    /** Delay in MS to begin loader rendering. This helps prevent 
    quick flashes of the loader during normal loading times. */
    delayMS: PropTypes.number
};