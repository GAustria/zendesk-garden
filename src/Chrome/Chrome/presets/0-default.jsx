import * as React from 'react';

import Button from "../../../Button/Button";
import IconMerge from "../../../IconMerge/IconMerge";
import Chrome from "../Chrome";
import Nav from "../../Nav/Nav/Nav";
import NavItem from "../../Nav/NavItem/NavItem";
import NavItemIcon from "../../Nav/NavItemIcon/NavItemIcon";
import NavItemText from "../../Nav/NavItemText/NavItemText";
import SubNav from "../../SubNav/SubNav/SubNav";
import SubNavItem from "../../SubNav/SubNavItem/SubNavItem";
import SubNavItemText from "../../SubNav/SubNavItemText/SubNavItemText";
import CollapsibleSubNavItem from "../../SubNav/CollapsibleSubNavItem/CollapsibleSubNavItem";
import Body from "../../Body/Body/Body";
import Main from "../../Body/Main/Main";
import Content from "../../Body/Content/Content";
import Header from "../../Body/Header/Header/Header";
import HeaderItem from "../../Body/Header/HeaderItem/HeaderItem";
import HeaderItemIcon from "../../Body/Header/HeaderItemIcon/HeaderItemIcon";
import HeaderItemText from "../../Body/Header/HeaderItemText/HeaderItemText";
import Footer from "../../Body/Footer/Footer/Footer";
import FooterItem from "../../Body/Footer/FooterItem/FooterItem";

export default (
  <Chrome uxpId="chrome0">
    <Nav uxpId="nav0">
      <NavItem logo product="connect" title="Zendesk Connect" uxpId="navItemZendeskConnect">
        <NavItemIcon uxpId="navItemIconZendeskConnect">
          <IconMerge icon="RelationshapeConnect26" uxpId="IconZendeskConnect" />
        </NavItemIcon>
        <NavItemText uxpId="navItemTextZendeskConnect">Zendesk Connect</NavItemText>
      </NavItem>
      <NavItem title="Home" uxpId="navItemHome">
        <NavItemIcon uxpId="navItemIconHome">
          <IconMerge icon="HomeFill26" uxpId="IconHome" />
        </NavItemIcon>
        <NavItemText uxpId="navTextIconHome">Home</NavItemText>
      </NavItem>
      <NavItem title="Segment" uxpId="navItemSegment">
        <NavItemIcon uxpId="navItemIconSegment">
          <IconMerge icon="CustomerListsFill26" uxpId="IconSegment" />
        </NavItemIcon>
        <NavItemText uxpId="navItemTextSegment">Segment</NavItemText>
      </NavItem>
      <NavItem title="Campaigns" uxpId="navItemCampaigns">
        <NavItemIcon uxpId="navItemIconCampaigns">
          <IconMerge icon="EmailFill26" uxpId="IconCampaigns" />
        </NavItemIcon>
        <NavItemText uxpId="navItemTextCampaigns">Campaigns</NavItemText>
      </NavItem>
      <NavItem title="Settings" uxpId="navItemSettings">
        <NavItemIcon uxpId="navItemIconSettings">
          <IconMerge icon="SettingsFill26" />
        </NavItemIcon>
        <NavItemText uxpId="navItemTextSettings">Settings</NavItemText>
      </NavItem>
      <NavItem brandmark title="Zendesk" uxpId="navItemZendesk">
        <NavItemIcon uxpId="navItemIconZendesk">
          <IconMerge icon="Zendesk26" uxpId="IconZendesk" />
        </NavItemIcon>
        <NavItemText uxpId="navItemTextZendesk">&copy;Zendesk</NavItemText>
      </NavItem>
    </Nav>
    <SubNav uxpId="subNav0">
      <SubNavItem href="#/" uxpId="subNavItem0">
        <SubNavItemText uxpId="subNavItemText0">Subnav 1</SubNavItemText>
      </SubNavItem>
      <SubNavItem href="#/" uxpId="subNavItem1">
        <SubNavItemText uxpId="subNavItemText1">Subnav 2</SubNavItemText>
      </SubNavItem>
      <CollapsibleSubNavItem header="Collapsible Item" uxpId="CollapsibleSubNavItem1">
        <SubNavItem href="#/" uxpId="subNavItem2">
          <SubNavItemText uxpId="subNavItemText1">Item 1</SubNavItemText>
        </SubNavItem>
        <SubNavItem href="#/" uxpId="subNavItem3">
          <SubNavItemText uxpId="subNavItemText3">Item 2</SubNavItemText>
        </SubNavItem>
        <SubNavItem href="#/" uxpId="subNavItem4"> 
          <SubNavItemText uxpId="subNavItemText4">Item 3</SubNavItemText>
        </SubNavItem>
      </CollapsibleSubNavItem>
      <SubNavItem href="#/" uxpId="subNavItem5">
        <SubNavItemText uxpId="subNavItemText6">Subnav 3</SubNavItemText>
      </SubNavItem>
    </SubNav>
    <Body hasFooter uxpId="body0">
      <Header uxpId="header0">
        <HeaderItem uxpId="headerItem0">
          <HeaderItemIcon uxpId="headerItemIcon0">
            <IconMerge icon="Grid2X2Stroke16" uxpId="headerItemIcon0ICON" />
          </HeaderItemIcon>
          <HeaderItemText clipped uxpId="headerItemText0">Products</HeaderItemText>
        </HeaderItem>
        <HeaderItem round uxpId="headerItem1">
          <HeaderItemIcon uxpId="headerItemIcon1">
            <IconMerge icon="UserSoloStroke16" uxpId="headerItemIcon1ICON" />
          </HeaderItemIcon>
          <HeaderItemText clipped uxpId="headerItemText1">User</HeaderItemText>
        </HeaderItem>
      </Header>
      <Content uxpId="content0">
        <Main style={{ padding: 28 }} uxpId="main0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            aliquam purus sit amet. Cum sociis natoque penatibus et magnis.
            Semper auctor neque vitae tempus. Id cursus metus aliquam eleifend
            mi. Nibh cras pulvinar mattis nunc sed. Semper quis lectus nulla at
            volutpat diam. Sit amet mauris commodo quis imperdiet massa
            tincidunt nunc pulvinar. Sollicitudin aliquam ultrices sagittis
            orci. Id nibh tortor id aliquet lectus proin nibh nisl condimentum.
            Sagittis aliquam malesuada bibendum arcu. Risus commodo viverra
            maecenas accumsan lacus vel. Mauris in aliquam sem fringilla ut
            morbi tincidunt. Lacus suspendisse faucibus interdum posuere lorem
            ipsum dolor sit. Eget dolor morbi non arcu risus quis.
        </Main>
      </Content>
      <Footer uxpId="footer0">
        <FooterItem uxpId="footerItem0">
          <Button basic uxpId="action0">Cancel</Button>
        </FooterItem>
        <FooterItem uxpId="footerItem1">
          <Button primary uxpId="action1">Save</Button>
        </FooterItem>
      </Footer>
    </Body>
  </Chrome>
);
