import React from 'react'
import { Box, Text } from 'grommet'
import { getStatusCounts, STATUS_MAP } from '../utils/status'

const Tip = ({ cluster, theme }) => {
    const statusCounts = getStatusCounts(cluster.getAllChildMarkers())
    return (
        <Box gap="xsmall" {...{...theme?.tip?.content, border: { color: 'border', size: 'xsmall' }, margin: '0px', pad: 'small'}}>
            {/* TO DO make this something the caller can provide? */}
            <Text color="text-strong" weight={500}>Device Summary</Text>
            <Text weight="bold" size="xsmall">
                {/* TO DO revisit with designers if this info is desired in Tip */}
                Location: <Text size="xsmall" weight="normal">San Francisco, CA</Text>
            </Text>
            {Object.entries(statusCounts).map(([key, value]) => {
                const StatusIcon = STATUS_MAP[key].icon;
                return (
                    <Box align="center" direction="row" gap="xsmall">
                        <StatusIcon color={STATUS_MAP[key].color} size="small" />
                        {/* TO DO should the state string be something the caller can override? */}
                        <Text color="text-strong" size="xsmall">{value} {STATUS_MAP[key].state}</Text>
                    </Box>
                )

            })}
        </Box>
    )
}

export { Tip }
