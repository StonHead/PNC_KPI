import { Icon } from '@mui/material'
import React from 'react'

export const DisplayValues1 = ({ data, displayModalHandler }) => {
    return <div className='cursor-pointer' onClick={() => {
        displayModalHandler(true, data?.KPI_LBL, data?.KPI_ID)
    }}>
        <div className="d-flex g9 align-items-center" style={{ width: 'fit-content' }}>
            <div className="fs14">{data?.KPI_LBL}</div>
            <div className="fs12 text-muted">{data?.KPI_LBL_POSTFIX}</div>
        </div>
        <div className="d-flex">
            <div className="fs18">{`${data?.KPI_VALUE} (${data?.KPI_PERC_CHANGE})`}</div>
            <div className="">
                <Icon>{data?.KPI_PERC_CHANGE_ICON}</Icon>
            </div>
        </div>
    </div>
}
export const DisplayValues3 = ({ data, displayModalHandler }) => {
    if (!data?.length) return;

    return (
        <>
            {data.map((item) => {
                return <div className='cursor-pointer' onClick={() => {
                    displayModalHandler(true, item.KPI_LBL, item.KPI_ID)
                }}>
                    <div className="row fs12">{item.KPI_LBL}</div>
                    <div className="row fs22">{item.KPI_VALUE}</div>
                    <div className="row fs18 align-items-center">
                        {item.KPI_PERC_CHANGE}
                        <Icon className='fs16'>{item.KPI_PERC_CHANGE_ICON}</Icon>
                    </div>
                </div>
            })}
        </>
    )
}
export const DisplayValues2 = ({ data, displayModalHandler }) => {
    return <div className='cursor-pointer' onClick={() => {
        displayModalHandler(true, data?.KPI_LBL, data.KPI_ID)
    }}>
        <div className="d-flex">
            <div className="fs16">{`${data?.KPI_VALUE} (${data.KPI_PERC_CHANGE})`}</div>
            <div className="">
                <Icon className='fs12'>{data.KPI_PERC_CHANGE_ICON}</Icon>
            </div>
        </div>
        <div className="d-flex g9 align-items-center" style={{ width: 'fit-content' }}>
            <div className="fs12">{data.KPI_LBL}</div>
        </div>
    </div>
}