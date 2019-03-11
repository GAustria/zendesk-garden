import * as React from "react";
import RangeField from "../RangeField";
import RangeLabel from "../../RangeLabel/RangeLabel";
import Range from "../../Range/Range";
import RangeHint from "../../RangeHint/RangeHint";

export default (
  <RangeField uxpId="rangeField0">
    <RangeLabel uxpId="rangeLabel0">Range</RangeLabel>
    <Range uxpId="range0" step={5} min={0} max={100} />
    <RangeHint uxpId="rangeHint0">Hint</RangeHint>
  </RangeField>
);
