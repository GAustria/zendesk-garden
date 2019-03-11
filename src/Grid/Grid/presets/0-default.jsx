import * as React from "react";
import Grid from "../Grid";
import Col from "../../Col/Col";
import Row from "../../Row/Row";

export default (
  <Grid debug uxpId="grid0">
    <Row uxpId="row0">
      <Col size={12} md={8} uxpId="col0">
        col[size=12] col[md=8]
      </Col>
      <Col size={6} md={4} uxpId="col1">
        col[size=6] col[md=4]
      </Col>
    </Row>
    <Row uxpId="row1">
      <Col size={6} md={4} uxpId="col2">
        col[size=6] col[md=4]
      </Col>
      <Col size={6} md={4} uxpId="col3">
        col[size=6] col[md=4]
      </Col>
      <Col size={6} md={4} uxpId="col4">
        col[size=6] col[md=4]
      </Col>
    </Row>
    <Row uxpId="row2">
      <Col size={6} uxpId="col5">col[size=6]</Col>
      <Col size={6} uxpId="col6">col[size=6]</Col>
    </Row>
  </Grid>
);
