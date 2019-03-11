import * as React from "react";
import BreadcrumbContainer from "../BreadcrumbContainer";
import BreadcrumbView from "../../BreadcrumbView/BreadcrumbView";
import BreadcrumbList from "../../BreadcrumbList/BreadcrumbList";
import BreadcrumbItem from "../../BreadcrumbItem/BreadcrumbItem";
import Anchor from "../../../Anchor/Anchor";

export default (
  <BreadcrumbContainer uxpId="container0">
    <BreadcrumbView uxpId="breadcrumbView0">
      <BreadcrumbList uxpId="breadcrumbList0">
        <BreadcrumbItem uxpId="breadcrumbItem0">
          <Anchor uxpId="anchor0">One</Anchor>
        </BreadcrumbItem>
        <BreadcrumbItem uxpId="breadcrumbItem1">
          <Anchor uxpId="anchor1">Two</Anchor>
        </BreadcrumbItem>
        <BreadcrumbItem current uxpId="breadcrumbItem2">
          Three
        </BreadcrumbItem>
      </BreadcrumbList>
    </BreadcrumbView>
  </BreadcrumbContainer>
);
