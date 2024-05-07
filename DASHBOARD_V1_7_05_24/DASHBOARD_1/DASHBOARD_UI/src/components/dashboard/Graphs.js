import React, { useEffect } from 'react'
import ReactEcharts from 'echarts-for-react';
import { getComponentData } from '../../services/dashboardService';
import useDashboardApi from '../../hooks/useDashboardApi';

const Graphs = ({ option, dashId, compId, colWidth = 12 }) => {
    const { getApiFuncHandler: getGraphOptionsData, data, error, isLoading } = useDashboardApi()

    console.log("GRAPH DATA")
    console.log(compId)
    // console.log(JSON.parse(data))

    const getGraphOptionsDataHandler = () => {
        getGraphOptionsData(getComponentData, dashId, compId)
    }

    useEffect(() => {
        getGraphOptionsDataHandler()
    }, [compId])

    return (
        <div className={`col-${colWidth} d-flex flex-column`}>
            {Object.keys(data).length && <ReactEcharts option={data} />}
        </div>
    )
}

export default Graphs