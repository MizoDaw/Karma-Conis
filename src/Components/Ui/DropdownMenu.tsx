import React from 'react';
import {Dropdown, Button } from 'antd';
import { AppstoreOutlined, DownOutlined } from '@ant-design/icons';
import MenuItems from './MenuItems';

const DropdownMenu = () => {

  return (
    <Dropdown overlay={MenuItems} placement="bottomLeft" className='DropdownMenu'trigger={['click']} >
      <Button>
      <AppstoreOutlined />
        categories
         <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default DropdownMenu;
