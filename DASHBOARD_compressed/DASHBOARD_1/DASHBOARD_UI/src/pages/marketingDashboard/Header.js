import { Card, Icon, Menu, MenuItem } from '@mui/material'
import { Popover } from 'antd';
import React, { useState } from 'react'

const Header = () => {
  const [filterPopoverOpen, setFilterPopoverOpen] = useState(true);

  const handleFilterPopover = () => {
    setFilterPopoverOpen(!filterPopoverOpen)
  }

  return (
    <div className='d-flex justify-content-between border-bottom mb-3'>
      <h4>Executive Marketing Dashboard</h4>
      {/* <Popover
        placement="bottomRight"
        trigger="click"
        zIndex='1001'
        open={filterPopoverOpen}
        onOpenChange={handleFilterPopover}
        content={
          <Card>
            HELLO
          </Card>
        }>
      </Popover> */}
        <Icon
          className='cursor-pointer'
          onClick={handleFilterPopover}
        >filter_list</Icon>
    </div>
  )
}

export default Header