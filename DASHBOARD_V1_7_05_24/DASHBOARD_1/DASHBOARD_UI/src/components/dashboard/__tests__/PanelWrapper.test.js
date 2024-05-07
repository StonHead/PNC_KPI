import { render } from "@testing-library/react"
import useDashboardApi from "../../../hooks/useDashboardApi";
import { getComponentData } from "../../../services/dashboardService";
import panelWrapper from "../PanelWrapper";
import { Panel1 } from "../../../pages/marketingDashboard/Panels";

jest.mock("axios");

jest.mock("../../../services/dashboardService", () => ({
    getComponentData: jest.fn()
}))

jest.mock("../../../hooks/useDashboardApi")

const getComponentDataResponseSuccess = {
    "program": "idspAPI",
    "release": "5.3.1",
    "version": "5.3.1",
    "timestamp": "2024-05-07 07:06:22.159",
    "code": 200,
    "description": "OK",
    "response": {
        "dashId": 1,
        "compId": 1,
        "compName": "CLV PANEL",
        "compType": "PANEL",
        "compData": "{ \"Title\": \"CLV, Customer Acquistion & Cross-sell\" }",
        "compRow": null,
        "compColSpan": null,
        "displayOrder": null
    }
}

const mockApiData = {
    getApiFuncHandler: jest.fn(),
    data: {
        "Title": "CLV, Customer Acquistion & Cross-sell"
    }
}

jest.mock("../../../hooks", () => ({
    useSnackBar: () => ({
        snackBar: jest.fn()
    })
}))

test("", () => {
    getComponentData.mockResolvedValue(getComponentDataResponseSuccess)
    useDashboardApi.mockReturnValue(mockApiData)
    const WrappedComponent = panelWrapper(Panel1, 1)
    render(<WrappedComponent />)
})