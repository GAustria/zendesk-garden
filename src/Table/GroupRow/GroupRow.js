import React from 'react';
import PropTypes from 'prop-types';
import { GroupRow as GroupRowM } from '@zendeskgarden/react-tables';
import '@zendeskgarden/react-tables/dist/styles.css';

const GroupRow = props => <GroupRowM {...props} />;

GroupRow.propTypes = {
    children: PropTypes.node,
}

export default GroupRow;