import * as React from "react";

import Button from "../../../../Button/Button";
import IconMerge from "../../../../IconMerge/IconMerge";
import Body from "../Body";
import Main from "../../Main/Main";
import Content from "../../Content/Content";
import Header from "../../Header/Header/Header";
import HeaderItem from "../../Header/HeaderItem/HeaderItem";
import HeaderItemIcon from "../../Header/HeaderItemIcon/HeaderItemIcon";
import HeaderItemText from "../../Header/HeaderItemText/HeaderItemText";
import Footer from "../../Footer/Footer/Footer";
import FooterItem from "../../Footer/FooterItem/FooterItem";

export default (
  <Body hasFooter uxpId="body0">
    <Header uxpId="header0">
      <HeaderItem uxpId="headerItem0">
        <HeaderItemIcon uxpId="headerItemIcon0">
          <IconMerge icon="Grid2X2Stroke16" uxpId="headerItemIcon0ICON" />
        </HeaderItemIcon>
        <HeaderItemText clipped uxpId="headerItemText0">
          Products
        </HeaderItemText>
      </HeaderItem>
      <HeaderItem round uxpId="headerItem1">
        <HeaderItemIcon uxpId="headerItemIcon1">
          <IconMerge icon="UserSoloStroke16" uxpId="headerItemIcon1ICON" />
        </HeaderItemIcon>
        <HeaderItemText clipped uxpId="headerItemText1">
          User
        </HeaderItemText>
      </HeaderItem>
    </Header>
    <Content uxpId="content0">
      <Main style={{ padding: 28 }} uxpId="main0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut aliquam purus sit
        amet. Cum sociis natoque penatibus et magnis. Semper auctor neque vitae
        tempus. Id cursus metus aliquam eleifend mi. Nibh cras pulvinar mattis
        nunc sed. Semper quis lectus nulla at volutpat diam. Sit amet mauris
        commodo quis imperdiet massa tincidunt nunc pulvinar. Sollicitudin
        aliquam ultrices sagittis orci. Id nibh tortor id aliquet lectus proin
        nibh nisl condimentum. Sagittis aliquam malesuada bibendum arcu. Risus
        commodo viverra maecenas accumsan lacus vel. Mauris in aliquam sem
        fringilla ut morbi tincidunt. Lacus suspendisse faucibus interdum
        posuere lorem ipsum dolor sit. Eget dolor morbi non arcu risus quis.
      </Main>
    </Content>
    <Footer uxpId="footer0">
      <FooterItem uxpId="footerItem0">
        <Button basic uxpId="action0">
          Cancel
        </Button>
      </FooterItem>
      <FooterItem uxpId="footerItem1">
        <Button primary uxpId="action1">
          Save
        </Button>
      </FooterItem>
    </Footer>
  </Body>
);
