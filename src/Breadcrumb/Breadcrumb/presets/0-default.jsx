import * as React from "react";
import Breadcrumb from "../Breadcrumb";
import BreadcrumbItem from "../../BreadcrumbItem/BreadcrumbItem";
import Anchor from "../../../Anchor/Anchor";

export default (
  <Breadcrumb uxpId="breadcrumb">
    <Anchor href="/" uxpId="anchor0">Root</Anchor>
    <Anchor href=".." uxpId="anchor1">Parent</Anchor>
    <BreadcrumbItem uxpId="item0">Self</BreadcrumbItem>
  </Breadcrumb>
);
