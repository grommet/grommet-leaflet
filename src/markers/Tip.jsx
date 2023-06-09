import React from 'react'
import { Box, Grommet, Text } from 'grommet'
import { hpe } from 'grommet-theme-hpe';
import { getStatusCounts, STATUS_MAP } from '../utils/status'

const Tip = ({ cluster, theme }) => {
    const statusCounts = getStatusCounts(cluster.getAllChildMarkers())
    return (
        <Grommet theme={hpe} background="transparent">
            <Box 
                {...theme?.tip?.content}
                background="background-front"
                border={{ color: 'border-weak', size: 'xsmall' }}
                gap="xsmall"
                margin="none"
                // leave some breathing room
                pad={{vertical: "small", left: "small", right: "medium"}}
                round="xsmall"
            >
                {/* TO DO make this something the caller can provide? */}
                <Text color="text-strong" weight={500}>Device Summary</Text>
                {/* TO DO should we not use bold? */}
                <Text weight="bold" size="xsmall">
                    {/* TO DO revisit with designers if this info is desired in Tip */}
                    Location: <Text size="xsmall" weight="normal">San Francisco, CA</Text>
                </Text>
                {Object.entries(statusCounts).map(([key, value]) => {
                    const StatusIcon = STATUS_MAP[key].icon;
                    return value > 0 ? (
                        <Box key={key} align="center" direction="row" gap="xsmall">
                            <StatusIcon color={STATUS_MAP[key].color} size="small" />
                            {/* TO DO should the state string be something the caller can override? */}
                            <Text color="text-strong" size="xsmall">{value} {STATUS_MAP[key].state}</Text>
                        </Box>
                    ) : null
                })}
            </Box>
        </Grommet>
    )
}

export { Tip }
