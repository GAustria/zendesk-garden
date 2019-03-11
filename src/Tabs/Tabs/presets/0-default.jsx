import * as React from "react";
import Tabs from "../Tabs";
import TabPanel from "../../TabPanel/TabPanel";

export default (
  <Tabs uxpId="tabs0">
    <TabPanel label="Tab 1" key="tab-1" uxpId="tabPanel0">
      Tab 1 content
    </TabPanel>
    <TabPanel label="Tab 2" key="tab-2" uxpId="tabPanel1">
      Tab 2 content
    </TabPanel>
    <TabPanel label="Disabled Tab" disabled uxpId="tabPanel2">
      Disabled content
    </TabPanel>
    <TabPanel label="Tab 3" key="tab-3" uxpId="tabPanel3">
      Tab 3 content
    </TabPanel>
  </Tabs>
);
