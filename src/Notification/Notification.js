import React from "react";
import PropTypes from "prop-types";
import {
  Notification as NotificationM,
  Title,
  Paragraph,
  Close
} from "@zendeskgarden/react-notifications";
import "@zendeskgarden/react-notifications/dist/styles.css";

const Notification = props => {
  return (
    <NotificationM {...props}>
      <Title>{props.title}</Title>
      <Paragraph>{props.paragraph}</Paragraph>
      <Close />
    </NotificationM>
  );
};

Notification.propTypes = {
  recessed: PropTypes.bool,
  type: PropTypes.oneOf(["success", "warning", "error"]),
  title: PropTypes.string,
  paragraph: PropTypes.string
};

export default Notification;
