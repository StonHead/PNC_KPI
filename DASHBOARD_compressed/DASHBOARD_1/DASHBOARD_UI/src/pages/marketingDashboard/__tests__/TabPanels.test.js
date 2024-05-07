import { render } from "@testing-library/react"
import { TabPanel1, TabPanel2, TabPanel4, TabPanel5 } from "../TabPanels"
import { useSnackBar } from "../../../hooks"

jest.mock("../../../hooks", () => ({
    useSnackBar: () => ({
        snackBar: jest.fn()
    })

}))

const props = {
    displayModalHandler: jest.fn(),
    TAB_LIST: [
        {
            "COMP_ID": "6",
            "NAME": "Retail"
        },
        {
            "COMP_ID": "7",
            "NAME": "AMG"
        },
        {
            "COMP_ID": "8",
            "NAME": "C&IB"
        }
    ]
}

describe("", () => {
    test("TabPanel1", () => {
        render(<TabPanel1 {...props} />)
    })
    test("TabPanel2", () => {
        render(<TabPanel2  {...props} />)
    })
    test("TabPanel4", () => {
        render(<TabPanel4  {...props} />)
    })
    test("TabPanel5", () => {
        render(<TabPanel5  {...props} />)
    })
})
