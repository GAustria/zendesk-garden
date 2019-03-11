import React from 'react';
import PropTypes from 'prop-types';
import { AccordionContainer as AccordionContainerM } from '@zendeskgarden/react-chrome';
import '@zendeskgarden/react-chrome/dist/styles.css';

const AccordionContainer = (props) => <AccordionContainerM {...props} />

AccordionContainer.propTypes = {
    children: PropTypes.node,
    expanded: PropTypes.string,
    onStateChange: PropTypes.func,
    render: PropTypes.func,
}

export default AccordionContainer;