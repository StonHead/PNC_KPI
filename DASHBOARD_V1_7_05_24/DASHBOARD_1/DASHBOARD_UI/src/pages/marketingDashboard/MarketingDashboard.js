import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Button } from '@mui/material'
import { Modal } from 'antd';
import panelWrapper from '../../components/dashboard/PanelWrapper';
import { Panel1, Panel2, Panel3, Panel4, Panel5 } from './Panels';
import Graphs from '../../components/dashboard/Graphs';
import { getComponentData } from '../../services/dashboardService';
import useDashboardApi from '../../hooks/useDashboardApi';

const MarketingDashboard = () => {
  const [displayModalData, setDisplayModalData] = useState({
    open: false
  });

  const displayModalHandler = (state, label, labelId) => {
    setDisplayModalData({
      open: state,
      label,
      labelId
    })
  }

  return (
    <div className='px-4 py-3 g8'>
      <Header />
      <div className="row m-0 mb-2">
        <WrappedPanel1 id={1} displayModalHandler={displayModalHandler} />
      </div>
      <div className="row m-0 mb-2">
        <div className="col d-flex flex-column mr-1">
          <div className="row h-100 mb-2"><WrappedPanel2 id={2} displayModalHandler={displayModalHandler} /></div>
          <div className="row h-100"><WrappedPanel3 id={3} displayModalHandler={displayModalHandler} /></div>
        </div>
        <div className="col d-flex flex-column ml-1">
          <div className="row h-100 mb-2"><WrappedPanel4 id={4} displayModalHandler={displayModalHandler} /></div>
          <div className="row h-100"><WrappedPanel5 id={5} displayModalHandler={displayModalHandler} /></div>
        </div>
      </div>
      <DisplayValuesModal displayModalData={displayModalData} displayModalHandler={displayModalHandler} />
    </div>
  )
}

const WrappedPanel1 = panelWrapper(Panel1, 1)
const WrappedPanel2 = panelWrapper(Panel2, 9)
const WrappedPanel3 = panelWrapper(Panel3, 19)
const WrappedPanel4 = panelWrapper(Panel4, 14)
const WrappedPanel5 = panelWrapper(Panel5, 21)

const DisplayValuesModal = ({ displayModalData, displayModalHandler }) => {
  const { getApiFuncHandler: getDisplayComponentData, data, error, isLoading } = useDashboardApi()

  const getDisplayComponentDataHandler = () => {
    getDisplayComponentData(getComponentData, 1, 2)
  }

  const onClose = () => {
    displayModalHandler(false)
  }

  useEffect(() => {
    getDisplayComponentDataHandler()
  }, [])

  console.log(data)


  // Graph for Modal API here

  return (
    <Modal
      open={displayModalData.open}
      title={`${displayModalData?.label} | Trend`}
      onCancel={() => onClose(false)}
      footer={[
        <div className='d-flex justify-content-center'>
          <Button type='primary' onClick={onClose}>Close</Button>
        </div>
      ]}
      width={1000}
    >
      <Graphs dashId={1} compId={displayModalData?.labelId} colWidth={12} />
      {/* <div className='col-12 d-flex flex-column'>
        {(selectedOption && Object.keys(selectedOption).length !== 0) && <ReactEcharts option={selectedOption?.options} />}
      </div> */}
    </Modal>
  )
}

let GRAPH_OPTIONS = {
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
    bottom: '5%',
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

export default MarketingDashboard