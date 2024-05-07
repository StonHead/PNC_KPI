import React from 'react'
import individualTabWrapper from '../../components/dashboard/IndividualTabWrapper'
import { IndividualTabPanel1, IndividualTabPanel2, IndividualTabPanel4, IndividualTabPanel5 } from './IndividualTabPanels'

export const TabPanel1 = ({ TAB_LIST, displayModalHandler }) => {
    console.log({ TAB_LIST })
    return (
        <>
            {TAB_LIST?.map((tabData, idx) => {
                return <WrappedIndividualTabPanel1 tabData={tabData} idx={idx} displayModalHandler={displayModalHandler} />
            })}
        </>
    )
}
export const TabPanel2 = ({ TAB_LIST, displayModalHandler }) => {
    // compId: 11, 12, 13
    console.log({ TAB_LIST })
    return (
        <>
            {TAB_LIST?.map((tabData, idx) => {
                return <>
                    <WrappedIndividualTabPanel2 tabData={tabData} idx={idx} displayModalHandler={displayModalHandler} />
                </>
            })}
        </>
    )
}
export const TabPanel4 = ({ TAB_LIST, displayModalHandler }) => {
    console.log({ TAB_LIST })
    return (
        <>
            {TAB_LIST?.map((tabData, idx) => {
                return <>
                    <WrappedIndividualTabPanel4 tabData={tabData} idx={idx} displayModalHandler={displayModalHandler} />
                </>
            })}
        </>
    )
}
export const TabPanel5 = ({ TAB_LIST, displayModalHandler }) => {
    console.log({ TAB_LIST })
    return (
        <>
            {TAB_LIST?.map((tabData, idx) => {
                return <WrappedIndividualTabPanel5 tabData={tabData} idx={idx} displayModalHandler={displayModalHandler} />
            })}
        </>
    )
}

const WrappedIndividualTabPanel1 = individualTabWrapper(IndividualTabPanel1)
const WrappedIndividualTabPanel2 = individualTabWrapper(IndividualTabPanel2)
const WrappedIndividualTabPanel4 = individualTabWrapper(IndividualTabPanel4)
const WrappedIndividualTabPanel5 = individualTabWrapper(IndividualTabPanel5)
