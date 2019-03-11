import React from "react";
import PropTypes from "prop-types";
import {
  Well as WellM,
  Title,
  Paragraph,
  Close
} from "@zendeskgarden/react-notifications";
import "@zendeskgarden/react-notifications/dist/styles.css";

const Well = props => {
  return (
    <WellM {...props}>
      <Title>{props.title}</Title>
      <Paragraph>{props.paragraph}</Paragraph>
    </WellM>
  );
};

Well.propTypes = {
  recessed: PropTypes.bool,
  floating: PropTypes.bool,
  title: PropTypes.string,
  paragraph: PropTypes.string
};

export default Well;
