import { Icon } from '@mui/material';
import React, { useEffect } from 'react'
import useDashboardApi from '../../hooks/useDashboardApi';
import { getComponentData } from '../../services/dashboardService';

const RETAIL_OPTIONS_P4 = {
    xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisLabel: {
            margin: 15,
            textStyle: {
                fontSize: 14,
                color: 'grey'
            }
        },
        axisTick: {
            show: false
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            margin: 15,
            textStyle: {
                fontSize: 14,
                color: 'grey'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                type: 'dotted'
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        // bottom: '50%',
        containLabel: true
    },
    series: [{
        data: [80, 92, 90, 93, 129, 133, 132, 42, 53, 90, 93, 129],
        type: 'line',
        color: '#00008B'
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line'
        }
    },
};
const AMG_OPTIONS_P4 = {
    xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisLabel: {
            margin: 15,
            textStyle: {
                fontSize: 14,
                color: 'grey'
            }
        },
        axisTick: {
            show: false
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            margin: 15,
            textStyle: {
                fontSize: 14,
                color: 'grey'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                type: 'dotted'
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        // bottom: '50%',
        containLabel: true
    },
    series: [{
        data: [40, 102, 80, 93, 12, 123, 112, 32, 53, 90, 93, 59],
        type: 'line',
        color: '#00008B'
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line'
        }
    },
};
const CIB_OPTIONS_P4 = {
    xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisLabel: {
            margin: 15,
            textStyle: {
                fontSize: 14,
                color: 'grey'
            }
        },
        axisTick: {
            show: false
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            margin: 15,
            textStyle: {
                fontSize: 14,
                color: 'grey'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                type: 'dotted'
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        // bottom: '50%',
        containLabel: true
    },
    series: [{
        data: [80, 92, 90, 93, 19, 133, 102, 42, 53, 90, 93, 12],
        type: 'line',
        color: '#00008B'
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line'
        }
    },
};
const OPTIONS_P1 = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisLabel: {
            margin: 15,
            textStyle: {
                fontSize: 14,
                color: 'grey'
            }
        },
        axisTick: {
            show: false
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '${value}M',
            margin: 15,
            textStyle: {
                fontSize: 14,
                color: 'grey'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                type: 'dotted'
            }
        }
    },
    grid: {
        top: '7%',
        left: '2%',
        right: '4%',
        bottom: '40%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line'
        }
    },
    series: {
        data: [9, 12, 13, 9, 12, 15, 9, 12, 13, 9, 12, 15],
        type: 'line',
        areaStyle: {},
        smooth: true
    },
    areaStyle: {
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'rgba(255, 0, 0, 0.7)'
            }, {
                offset: 1, color: 'rgba(255, 0, 0, 0)'
            }],
            global: false
        }
    }
};
const OPTIONS_P3 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line'
        }
    },
    legend: {
        data: [
            { name: 'Unaided awareness', icon: 'line' },
            { name: 'Aided awareness', icon: 'line' },
            { name: 'Consideration', icon: 'line' },
            { name: 'Unaided Target', icon: 'path://M140-440q-25 0-42.5-17.5T80-500q0-25 17.5-42.5T140-560h240q25 0 42.5 17.5T440-500q0 25-17.5 42.5T380-440H140Zm440 0q-25 0-42.5-17.5T520-500q0-25 17.5-42.5T580-560h240q25 0 42.5 17.5T880-500q0 25-17.5 42.5T820-440H580Z' },
            { name: 'Aided Target', icon: 'path://M140-440q-25 0-42.5-17.5T80-500q0-25 17.5-42.5T140-560h240q25 0 42.5 17.5T440-500q0 25-17.5 42.5T380-440H140Zm440 0q-25 0-42.5-17.5T520-500q0-25 17.5-42.5T580-560h240q25 0 42.5 17.5T880-500q0 25-17.5 42.5T820-440H580Z' },
            { name: 'Consideration Target', icon: 'path://M140-440q-25 0-42.5-17.5T80-500q0-25 17.5-42.5T140-560h240q25 0 42.5 17.5T440-500q0 25-17.5 42.5T380-440H140Zm440 0q-25 0-42.5-17.5T520-500q0-25 17.5-42.5T580-560h240q25 0 42.5 17.5T880-500q0 25-17.5 42.5T820-440H580Z' },
        ],
        bottom: 350,
        textStyle: {
            fontSize: 18 // Set the font size for legend text
        },
        width: 600
    },
    grid: {
        top: '10%',
        left: '0%',
        right: '4%',
        // bottom: '50%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisLabel: {
            margin: 15,
            textStyle: {
                fontSize: 14 // Set the font size for x-axis labels
            }
        },
        axisTick: {
            show: false
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}%', // Changing y-axis to percentages
            margin: 15, // Adding margin between the labels and the line
            textStyle: {
                fontSize: 14 // Set the font size for x-axis labels
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                type: 'dotted'
            }
        }
    },
    series: [
        {
            name: 'Unaided awareness',
            type: 'line',
            data: [20, 32, 41, 34, 50, 60, 65, 20, 32, 41, 34, 50, 60, 67],
        },
        {
            name: 'Aided awareness',
            type: 'line',
            data: [30, 42, 51, 44, 60, 67, 68, 30, 42, 51, 44, 60, 63, 59],
        },
        {
            name: 'Consideration',
            type: 'line',
            data: [20, 52, 61, 54, 65, 50, 30, 20, 52, 61, 54, 65, 40, 60],
        },
        {
            name: 'Unaided Target',
            type: 'line',
            symbol: 'none',
            markLine: {
                data: [{ yAxis: 70 }]
            },
            lineStyle: {
                normal: {
                    type: 'dotted',
                }
            }
        },
        {
            name: 'Aided Target',
            type: 'line',
            symbol: 'none',
            markLine: {
                data: [{ yAxis: 50 }]
            },
            lineStyle: {
                normal: {
                    type: 'dotted',
                }
            }
        },
        {
            name: 'Consideration Target',
            type: 'line',
            symbol: 'none',
            markLine: {
                data: [{ yAxis: 30 }]
            },
            lineStyle: {
                normal: {
                    type: 'dotted',
                }
            }
        }
    ]
}
const OPTIONS_P6 = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisLabel: {
            margin: 15,
            textStyle: {
                fontSize: 14,
                color: 'grey'
            }
        },
        axisTick: {
            show: false
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '${value}M',
            margin: 15,
            textStyle: {
                fontSize: 14,
                color: 'grey'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                type: 'dotted'
            }
        }
    },
    grid: {
        top: '7%',
        left: '2%',
        right: '4%',
        bottom: '40%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line'
        }
    },
    series: {
        data: [13, 10, 12, 4, 10, 15, 9, 10, 12, 9, 9, 15],
        type: 'line',
        areaStyle: {},
        smooth: true
    },
    areaStyle: {
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'rgba(255, 0, 0, 0.7)'
            }, {
                offset: 1, color: 'rgba(255, 0, 0, 0)'
            }],
            global: false
        }
    }
};
const PANEL_DATA_LIST = [
    {
        id: 1,
        title: "CLV, Customer Acquisition & Cross Sell",
        graphData: OPTIONS_P1,
        labelData: [
            {
                // tabTitle: "Panel Heading",
                data: [{
                    "label": "Total Retail Customers",
                    "value": "11.6M",
                    "percentageChange": "5%",
                    "direction": "arrow_upward",
                    "duration": "YTD",
                    "labelId": "1.1"
                }]
            },
            {
                tabTitle: "Retail",
                parentType: "Tab",
                data: [
                    {
                        "label": "Total Retail Customers",
                        "value": "11.6M",
                        "percentageChange": "5%",
                        "direction": "arrow_upward",
                        "duration": "YTD",
                        "labelId": "1.1.1"
                    },
                    {
                        "label": "New Retail Customers",
                        "value": "1.7M",
                        "percentageChange": "3%",
                        "direction": "arrow_upward",
                        "duration": "YTD",
                        "labelId": "1.1.2"
                    },
                    {
                        "label": "Cross Retail Customers",
                        "value": "9.9M",
                        "percentageChange": "6%",
                        "direction": "arrow_upward",
                        "duration": "YTD",
                        "labelId": "1.1.3"
                    }
                ],
            }
        ],
        "retail": [
            {
                "label": "Total Retail Customers",
                "value": "11.6M",
                "percentageChange": "5%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "1.1.1"
            },
            {
                "label": "New Retail Customers",
                "value": "1.7M",
                "percentageChange": "3%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "1.1.2"
            },
            {
                "label": "Cross Retail Customers",
                "value": "9.9M",
                "percentageChange": "6%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "1.1.3"
            }
        ],
        "amg": [
            {
                "label": "Total AMG Customers",
                "value": "10.6M",
                "percentageChange": "2%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "1.2.1"
            },
            {
                "label": "New AMG Customers",
                "value": "9.2M",
                "percentageChange": "3%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "1.2.2"
            },
            {
                "label": "Cross AMG Customers",
                "value": "12.1M",
                "percentageChange": "3.5%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "1.2.3"
            }
        ],
        "cib": [
            {
                "label": "Total C&IB Customers",
                "value": "13.2M",
                "percentageChange": "5.5%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "1.3.1"
            },
            {
                "label": "New C&IB Customers",
                "value": "11.6M",
                "percentageChange": "5%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "1.3.2"
            },
            {
                "label": "Cross C&IB Customers",
                "value": "8.6M",
                "percentageChange": "4.5%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "1.3.3"
            }
        ]
    },
    {
        id: 2,
        title: "Marketing Spend",
        "retail": [
            {
                "label": "Marketing Spends",
                "value": "10.3M",
                "percentageChange": "3%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "2.1"
            }
        ],
        "amg": [
            {
                "label": "Marketing Spends",
                "value": "11.6M",
                "percentageChange": "5%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "2.2"
            }
        ],
        "cib": [
            {
                "label": "Marketing Spends",
                "value": "11.6M",
                "percentageChange": "5%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "2.3"
            }
        ]
    },
    {
        id: 3,
        title: "Brand Health",
        graphData: OPTIONS_P3
    },
    {
        id: 4,
        title: "Digital Acuisition Driven by Marketing",
        graphOptions: {
            retail: RETAIL_OPTIONS_P4,
            amg: AMG_OPTIONS_P4,
            cib: CIB_OPTIONS_P4
        }
    },
    {
        id: 5,
        title: "Client Loyalty",
        "retail": [
            {
                "label": "Engagement",
                "value": "73%",
                "percentageChange": "3%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "5.1.1"
            },
            {
                "label": "Retention",
                "value": "89%",
                "percentageChange": "6%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "5.1.2"
            }
        ],
        "amg": [
            {
                "label": "Engagement",
                "value": "52%",
                "percentageChange": "1.3%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "5.2.1"
            },
            {
                "label": "Retention",
                "value": "92%",
                "percentageChange": "2.1%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "5.2.2"
            }
        ],
        "cib": [
            {
                "label": "Engagement",
                "value": "62%",
                "percentageChange": "1%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "5.3.1"
            },
            {
                "label": "Retention",
                "value": "96%",
                "percentageChange": "5%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "5.3.2"
            }
        ]
    },
    {
        id: 6,
        title: "CLV, Customer Acquisition & Cross Sell (Marketing)",
        graphData: OPTIONS_P6,
        "retail": [
            {
                "label": "Total Retail Customers",
                "value": "12.6M",
                "percentageChange": "3.5%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "1.1.1"
            },
            {
                "label": "New Retail Customers",
                "value": "2.7M",
                "percentageChange": "3%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "1.1.2"
            },
            {
                "label": "Cross Retail Customers",
                "value": "9.9M",
                "percentageChange": "6%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "1.1.3"
            }
        ],
        "amg": [
            {
                "label": "Total AMG Customers",
                "value": "10.6M",
                "percentageChange": "2%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "1.2.1"
            },
            {
                "label": "New AMG Customers",
                "value": "9.2M",
                "percentageChange": "4%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "1.2.2"
            },
            {
                "label": "Cross AMG Customers",
                "value": "1.5M",
                "percentageChange": "3.5%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "1.2.3"
            }
        ],
        "cib": [
            {
                "label": "Total C&IB Customers",
                "value": "13.2M",
                "percentageChange": "5.5%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "1.3.1"
            },
            {
                "label": "New C&IB Customers",
                "value": "11.6M",
                "percentageChange": "5%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "1.3.2"
            },
            {
                "label": "Cross C&IB Customers",
                "value": "1.6M",
                "percentageChange": "4.5%",
                "direction": "arrow_upward",
                "duration": "YTD",
                "labelId": "1.3.3"
            }
        ]
    },
]

const panelWrapper = (WrappedComponent, id) => {
    return (props) => {
        const { getApiFuncHandler: getDisplayComponentData, data, error, isLoading } = useDashboardApi()

        useEffect(() => {
            getDisplayComponentDataHandler()
        }, [])

        console.log({ data })

        const getDisplayComponentDataHandler = () => {
            getDisplayComponentData(getComponentData, 1, id)
        }

        return (
            <div className='d-flex flex-column p-2 br8 w-100 border border-grey'>
                <div className="row m-0 mb-1 align-items-center">
                    <Icon>drag_indicator</Icon>
                    <p className='fs18 m-0'>{data?.Title}</p>
                </div>
                <div className="row m-0 px-2">
                    <WrappedComponent displayModalHandler={props.displayModalHandler} />
                </div>
            </div>
        )
    }
}

export default panelWrapper