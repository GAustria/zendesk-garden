import React from "react";
import PropTypes from "prop-types";
import { Notification, Title, Paragraph, Close } from '@zendeskgarden/react-notifications';
import '@zendeskgarden/react-notifications/dist/styles.css';

export default class NotificationsMerge extends React.Component {
  render() {
    const props = Object.assign({}, this.props);
    delete this.props.title;
    delete this.props.paragraph;
    return (
        <Notification {...this.props}>
            <Title>
                {props.title}
            </Title>
            <Paragraph>
                {props.paragraph}
            </Paragraph>
            <Close />
        </Notification>
    )
  }
}

NotificationsMerge.propTypes = {
    recessed: PropTypes.bool,
    type: PropTypes.oneOf(["success", "warning", "error"]),
    title: PropTypes.string,
    paragraph: PropTypes.string
};