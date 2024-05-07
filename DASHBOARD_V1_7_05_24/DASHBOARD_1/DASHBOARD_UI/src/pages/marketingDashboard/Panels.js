import React, { useEffect } from 'react'
import Graphs from '../../components/dashboard/Graphs'
import useDashboardApi from '../../hooks/useDashboardApi'
import tabWrapper from '../../components/dashboard/TabWrapper'
import { TabPanel1, TabPanel2, TabPanel4, TabPanel5 } from './TabPanels'
import { getComponentData } from '../../services/dashboardService'
import { DisplayValues3 } from '../../components/dashboard/DisplayValues'

export const Panel1 = (props) => {
    const { getApiFuncHandler: getDisplayComponentData, data, error, isLoading } = useDashboardApi()

    const getDisplayComponentDataHandler = () => {
        getDisplayComponentData(getComponentData, 1, 2)
    }

    useEffect(() => {
        getDisplayComponentDataHandler()
    }, [])

    console.log(data)

    return (
        <div className='row m-0 w-100' style={{ maxHeight: '200px' }}>
            <div className="col-2 d-flex flex-column pt-2 h-100">
                <DisplayValues3 data={data?.KPIS} displayModalHandler={props?.displayModalHandler} />
            </div>
            <Graphs dashId={1} compId={3} colWidth={6} />
            <div className="col-4 d-flex flex-column">
                <WrappedTab1 displayModalHandler={props?.displayModalHandler} />
            </div>
        </div>
    )
}

export const Panel2 = (props) => {

    return (<WrappedTab2 displayModalHandler={props?.displayModalHandler} />)
}
export const Panel3 = (props) => {
    return (<Graphs dashId={1} compId={20} colWidth={12} />)
}
export const Panel4 = (props) => {
    return (<div className='col-12' style={{ maxHeight: '300px' }}>
        <WrappedTab4 displayModalHandler={props?.displayModalHandler} />
    </div>
    )
}
export const Panel5 = (props) => {
    // console.log(props)

    return (<WrappedTab5 displayModalHandler={props?.displayModalHandler} />)
}

const WrappedTab1 = tabWrapper(TabPanel1, 1, 5)
const WrappedTab2 = tabWrapper(TabPanel2, 1, 10)
const WrappedTab4 = tabWrapper(TabPanel4, 1, 15)
const WrappedTab5 = tabWrapper(TabPanel5, 1, 22)