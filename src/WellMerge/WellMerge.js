import React from "react";
import PropTypes from "prop-types";
import { Well, Title, Paragraph, Close } from '@zendeskgarden/react-notifications';
import '@zendeskgarden/react-notifications/dist/styles.css';

export default class WellMerge extends React.Component {
  render() {
    const props = Object.assign({}, this.props);
    delete this.props.title;
    delete this.props.paragraph;
    return (
        <Well {...this.props}>
            <Title>
                {props.title}
            </Title>
            <Paragraph>
                {props.paragraph}
            </Paragraph>
        </Well>
    )
  }
}

WellMerge.propTypes = {
    recessed: PropTypes.bool,
    floating: PropTypes.bool,
    title: PropTypes.string,
    paragraph: PropTypes.string
};