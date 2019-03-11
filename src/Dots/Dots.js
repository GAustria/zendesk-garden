import React from "react";
import PropTypes from "prop-types";
import { Dots as DotsM } from '@zendeskgarden/react-loaders';

const Dots = (props) => <DotsM {...props} />

Dots.propTypes = {
    /** Size of the loader. Can inherit from `font-size` styling. */
    size: PropTypes.string,
    /** Velocity (speed) of the animation. Between -1 and 1. 
    This should only be maniuplated at extreme sizes. */
    velocity: PropTypes.number,
    /** Color of the loader. Can inherit from `color` styling. */
    color: PropTypes.string,
    /** Delay in MS to begin loader rendering. This helps prevent 
    quick flashes of the loader during normal loading times. */
    delayMS: PropTypes.number
};

export default Dots;