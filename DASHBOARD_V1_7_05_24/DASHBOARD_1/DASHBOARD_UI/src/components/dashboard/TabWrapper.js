import React, { useEffect, useState } from 'react'
import useDashboardApi from '../../hooks/useDashboardApi';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList } from '@mui/lab';
import { getComponentData } from '../../services/dashboardService';

const tabWrapper = (WrapperTabs, dashId, compId) => {
    return (props) => {
        const [value, setValue] = useState('1');

        const { getApiFuncHandler: gettabWrapperHeaderData, data, error, isLoading } = useDashboardApi()

        const getDisplayComponentDataHandler = () => {
            gettabWrapperHeaderData(getComponentData, dashId, compId)
        }

        useEffect(() => {
            getDisplayComponentDataHandler()
        }, [])

        const handleChange = (event, newValue) => {
            setValue(newValue);
        };

        return (<Box class="w-100" sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        {data?.TAB_LIST?.map((tab, idx) => {
                            return <Tab label={tab.NAME} value={`${idx + 1}`} />
                        })}
                    </TabList>
                </Box>
                {data?.TAB_LIST && <WrapperTabs {...data} displayModalHandler={props?.displayModalHandler} />}
            </TabContext>
        </Box>)
    };
}

export default tabWrapper