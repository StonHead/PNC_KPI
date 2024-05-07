import { render } from "@testing-library/react"
import MarketingDashboard from "../MarketingDashboard"

jest.mock("axios");

jest.mock("../../../services/dashboardService", () => ({
    getComponentData: jest.fn()
}))

jest.mock("../../../hooks/useDashboardApi")

jest.mock("../../../hooks", () => ({
    useSnackBar: () => ({
        snackBar: jest.fn()
    })
}))

test("", () => {
    render(<MarketingDashboard />)
})