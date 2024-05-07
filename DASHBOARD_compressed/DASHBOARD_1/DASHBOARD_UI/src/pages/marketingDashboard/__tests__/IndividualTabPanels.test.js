import { render } from "@testing-library/react"
import { IndividualTabPanel1, IndividualTabPanel2, IndividualTabPanel4, IndividualTabPanel5 } from "../IndividualTabPanels"
import { TabContext } from "@mui/lab";


const INDIVIDUAL_TAB_PANEL_EMPTY_DATA = {
    "CARD_HEADER": "DEMO",
    "KPIS": []
}
const INDIVIDUAL_TAB_PANEL_1_DATA = {
    "CARD_HEADER": "AMG",
    "KPIS": [
        {
            "KPI_LBL": "Total AMG Customers",
            "KPI_VALUE": "$11.8M",
            "KPI_PERC_CHANGE": "3%",
            "KPI_PERC_CHANGE_ICON": "arrow_upward",
            "KPI_LBL_POSTFIX": "YTD",
            "KPI_ID": "30"
        },
        {
            "KPI_LBL": "New AMG Customers",
            "KPI_VALUE": "$3.4M",
            "KPI_PERC_CHANGE": "4%",
            "KPI_PERC_CHANGE_ICON": "arrow_upward",
            "KPI_LBL_POSTFIX": "YTD",
            "KPI_ID": "31"
        },
        {
            "KPI_LBL": "Cross AMG Customers",
            "KPI_VALUE": "$8.4M",
            "KPI_PERC_CHANGE": "4%",
            "KPI_PERC_CHANGE_ICON": "arrow_upward",
            "KPI_LBL_POSTFIX": "YTD",
            "KPI_ID": "32"
        }
    ]
}
const INDIVIDUAL_TAB_PANEL_2_DATA = {
    "CARD_HEADER": "AMG",
    "KPIS": [{
        "CARD_HEADER": "AMG",
        "KPIS": [
            {
                "KPI_LBL": "Marketing Spends",
                "KPI_VALUE": "13.6M",
                "KPI_PERC_CHANGE": "5%",
                "KPI_PERC_CHANGE_ICON": "arrow_upward",
                "KPI_LBL_POSTFIX": "YTD",
                "KPI_ID": "38"
            }
        ]
    }]
}
const INDIVIDUAL_TAB_PANEL_4_DATA = {
    "xAxis": {
        "type": "category",
        "data": [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],
        "axisLabel": {
            "margin": 15,
            "textStyle": {
                "fontSize": 14,
                "color": "grey"
            }
        },
        "axisTick": {
            "show": false
        }
    },
    "yAxis": {
        "type": "value",
        "axisLabel": {
            "margin": 15,
            "textStyle": {
                "fontSize": 14,
                "color": "grey"
            }
        },
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitLine": {
            "lineStyle": {
                "type": "dotted"
            }
        }
    },
    "grid": {
        "left": "3%",
        "right": "4%",
        "containLabel": true
    },
    "series": [
        {
            "data": [
                80,
                92,
                90,
                93,
                19,
                133,
                102,
                42,
                53,
                90,
                93,
                12
            ],
            "type": "line",
            "color": "#00008B"
        }
    ],
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "line"
        }
    }
}
const INDIVIDUAL_TAB_PANEL_5_DATA = {
    "CARD_HEADER": "Retail",
    "KPIS": [
        {
            "KPI_LBL": "Engagement",
            "KPI_VALUE": "73%",
            "KPI_PERC_CHANGE": "3%",
            "KPI_PERC_CHANGE_ICON": "arrow_upward",
            "KPI_LBL_POSTFIX": "YTD",
            "KPI_ID": "39"
        },
        {
            "KPI_LBL": "Retention",
            "KPI_VALUE": "89%",
            "KPI_PERC_CHANGE": "6%",
            "KPI_PERC_CHANGE_ICON": "arrow_upward",
            "KPI_LBL_POSTFIX": "YTD",
            "KPI_ID": "40"
        }
    ]
}

const propsEmptyKpiList = {
    data: INDIVIDUAL_TAB_PANEL_EMPTY_DATA,
    idx: "1",
    displayModalHandler: jest.fn()
}
const props1 = {
    data: INDIVIDUAL_TAB_PANEL_1_DATA,
    idx: "1",
    displayModalHandler: jest.fn()
}
const props2 = {
    data: INDIVIDUAL_TAB_PANEL_2_DATA,
    idx: "2",
    displayModalHandler: jest.fn()
}
const props4 = {
    data: INDIVIDUAL_TAB_PANEL_4_DATA,
    idx: "4",
    displayModalHandler: jest.fn()
}
const props4EmptyObj = {
    data: {},
    idx: "4",
    displayModalHandler: jest.fn()
}
const props5 = {
    data: INDIVIDUAL_TAB_PANEL_5_DATA,
    idx: "5",
    displayModalHandler: jest.fn()
}

test("IndividualTabPanel1", () => {
    render(<TabContext value="any-value">
        <IndividualTabPanel1 {...props1} />
    </TabContext>)
})
test("IndividualTabPanel2", () => {
    render(<TabContext value="any-value">
        <IndividualTabPanel2 {...props2} />
    </TabContext>)
})
test("IndividualTabPanel4", () => {
    render(<TabContext value="any-value">
        <IndividualTabPanel4 {...props4} />
    </TabContext>)
})
test("IndividualTabPanel4 Empty Obj", () => {
    render(<TabContext value="any-value">
        <IndividualTabPanel4 {...props4EmptyObj} />
    </TabContext>)
})
test("IndividualTabPanel5", () => {
    render(<TabContext value="any-value">
        <IndividualTabPanel5 {...props5} />
    </TabContext>)
})

describe("Rendering without data", () => {
    [IndividualTabPanel1, IndividualTabPanel2, IndividualTabPanel5].forEach((Comp) => {
        test(`Empty data for ${Comp}`, () => {
            render(<TabContext value="any-value">
                <Comp {...propsEmptyKpiList} />
            </TabContext>)
        })
    })
})

