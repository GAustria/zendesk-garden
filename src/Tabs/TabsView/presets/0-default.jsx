import * as React from "react";
import TabsView from "../TabsView";
import TabsList from "../../TabsList/TabsList";
import Tab from "../../Tab/Tab";
import TabPanel from "../../TabPanel/TabPanel";

export default (
  <TabsView uxpId="view0">
    <TabsList uxpId="list0">
      <Tab key="tab-1" selected="tab-1" uxpId="tab0">
        Tab 1
      </Tab>
      <Tab key="tab-2" uxpId="tab1">
        Tab 2
      </Tab>
    </TabsList>
    <TabPanel uxpId="tabPanel0" key="tab-1">
      Content 1
    </TabPanel>
    <TabPanel uxpId="tabPanel1" key="tab-2">
      Content 2
    </TabPanel>
  </TabsView>
);
