import React, { useEffect } from 'react'
import { getComponentData } from '../../services/dashboardService'
import useDashboardApi from '../../hooks/useDashboardApi'

const individualTabWrapper = (IndividualTabToWrap) => {
    return ({ tabData, idx, displayModalHandler }) => {
        const { getApiFuncHandler: getDisplayComponentData, data, error, isLoading } = useDashboardApi()

        useEffect(() => {
            getDisplayComponentDataHandler()
        }, [])


        console.log({ compId: tabData?.COMP_ID })
        console.log({ data })

        const getDisplayComponentDataHandler = () => {
            getDisplayComponentData(getComponentData, 1, tabData?.COMP_ID)
        }

        return (
            <IndividualTabToWrap data={data} idx={idx} displayModalHandler={displayModalHandler} />
        )
    }
}

export default individualTabWrapper