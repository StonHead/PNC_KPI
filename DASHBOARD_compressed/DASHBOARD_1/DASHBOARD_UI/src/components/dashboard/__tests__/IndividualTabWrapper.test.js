import { render } from "@testing-library/react"
import individualTabWrapper from "../IndividualTabWrapper"
import { IndividualTabPanel1 } from "../../../pages/marketingDashboard/IndividualTabPanels"
import useDashboardApi from "../../../hooks/useDashboardApi";
import { getComponentData } from "../../../services/dashboardService";

jest.mock("axios");

jest.mock("../../../services/dashboardService", () => ({
    getComponentData: jest.fn()
}))

jest.mock("../../../hooks/useDashboardApi")

const getComponentDataResponseSuccess = {
    "version": "5.3.1",
    "timestamp": "2024-05-07 04:00:19.336",
    "code": 200,
    "description": "OK",
    "response": {
        "dashId": 1,
        "compId": 24,
        "compName": "CLIENT LOYALTY RETAIL AMG CARD",
        "compType": "KPI_CARD",
        "compData": "{\"CARD_HEADER\":\"Retail\",\"KPIS\":[{\"KPI_LBL\":\"Engagement\",\"KPI_VALUE\":\"52%\",\"KPI_PERC_CHANGE\":\"1.3%\",\"KPI_PERC_CHANGE_ICON\":\"arrow_upward\",\"KPI_LBL_POSTFIX\":\"YTD\",\"KPI_ID\":\"41\"},{\"KPI_LBL\":\"Retention\",\"KPI_VALUE\":\"92%\",\"KPI_PERC_CHANGE\":\"2.1%\",\"KPI_PERC_CHANGE_ICON\":\"arrow_upward\",\"KPI_LBL_POSTFIX\":\"YTD\",\"KPI_ID\":\"42\"}]}",
        "compRow": null,
        "compColSpan": null,
        "displayOrder": null
    }
}

const mockApiData = {
    getApiFuncHandler: jest.fn(),
    "CARD_HEADER": "C&IB",
    "KPIS": [
        {
            "KPI_LBL": "Total C&IB Customers",
            "KPI_VALUE": "$11M",
            "KPI_PERC_CHANGE": "4%",
            "KPI_PERC_CHANGE_ICON": "arrow_upward",
            "KPI_LBL_POSTFIX": "YTD",
            "KPI_ID": "33"
        },
        {
            "KPI_LBL": "New C&IB Customers",
            "KPI_VALUE": "$6.5M",
            "KPI_PERC_CHANGE": "2%",
            "KPI_PERC_CHANGE_ICON": "arrow_upward",
            "KPI_LBL_POSTFIX": "YTD",
            "KPI_ID": "34"
        },
        {
            "KPI_LBL": "Cross C&IB Customers",
            "KPI_VALUE": "$4.5M",
            "KPI_PERC_CHANGE": "2%",
            "KPI_PERC_CHANGE_ICON": "arrow_upward",
            "KPI_LBL_POSTFIX": "YTD",
            "KPI_ID": "35"
        }
    ],
}

jest.mock("../../../hooks", () => ({
    useSnackBar: () => ({
        snackBar: jest.fn()
    })
}))

test("", () => {
    getComponentData.mockResolvedValue(getComponentDataResponseSuccess)
    useDashboardApi.mockReturnValue(mockApiData)
    const WrappedComponent = individualTabWrapper(IndividualTabPanel1)
    render(<WrappedComponent />)
})