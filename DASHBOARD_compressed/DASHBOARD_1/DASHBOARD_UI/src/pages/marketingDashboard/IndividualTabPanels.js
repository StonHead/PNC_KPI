import { TabPanel } from '@mui/lab'
import { Card } from '@mui/material'
import React from 'react'
import { DisplayValues1, DisplayValues2 } from '../../components/dashboard/DisplayValues'
import ReactEcharts from 'echarts-for-react';

export const IndividualTabPanel1 = ({ data, idx, displayModalHandler }) => {
    if (!data?.KPIS?.length) return
    return (
        <TabPanel key={""} value={`${idx + 1}`} className='p-0 py-2'>
            <Card className='px-3 py-2'>
                <div className="mb-2">
                    <DisplayValues1 data={data?.KPIS[0]} displayModalHandler={displayModalHandler} />
                </div>
                <div className="d-flex">
                    <div className="col-6 p-0">
                        <DisplayValues2 data={data?.KPIS[1]} displayModalHandler={displayModalHandler} />
                    </div>
                    <div className="col-6 p-0">
                        <DisplayValues2 data={data?.KPIS[2]} displayModalHandler={displayModalHandler} />
                    </div>
                </div>
            </Card>
        </TabPanel>
    )
}

export const IndividualTabPanel2 = ({ data, idx, displayModalHandler }) => {

    if (!data?.KPIS?.length) return
    console.log(data)
    return (
        <>
            <TabPanel key="" value={`${idx + 1}`} className='p-0 py-2'>
                <div className="p-1 px-2">
                    <DisplayValues1 data={data?.KPIS[0]} dashId={1} compId={2} displayModalHandler={displayModalHandler} />
                </div>
            </TabPanel >
        </>
    )
}

export const IndividualTabPanel4 = ({ data, idx, displayModalHandler }) => {

    if (!Object.keys(data)?.length) return;
    console.log(data)
    return (
        <>
            <TabPanel key="" value={`${idx + 1}`} className='p-0 py-2'>
                <ReactEcharts option={data} />
            </TabPanel >
        </>
    )
}
export const IndividualTabPanel5 = ({ data, idx, displayModalHandler }) => {
    console.log({data, idx, displayModalHandler})

    if (!data?.KPIS?.length) return
    console.log(data)
    return (
        <>
            <TabPanel value={`${idx + 1}`} className='p-0 py-2'>
                <div className="d-flex p-1 px-2">
                    <div className="col-6 p-0">
                        <DisplayValues1 data={data?.KPIS[0]} dashId={1} compId={2} displayModalHandler={displayModalHandler} />
                    </div>
                    <div className="col-6 p-0">
                        <DisplayValues1 data={data?.KPIS[1]} dashId={1} compId={2} displayModalHandler={displayModalHandler} />
                    </div>
                </div>
            </TabPanel>
        </>
    )
}