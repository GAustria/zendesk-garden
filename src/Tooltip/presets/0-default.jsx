import * as React from 'react';
import Tooltip from '../Tooltip';
import Button from '../../Button/Button';

export default (
    <Tooltip
      trigger={<Button uxpId="tooltip1">Trigger top placement</Button>}
      uxpId="tooltip0">
      This is a small tooltip
    </Tooltip>
);
