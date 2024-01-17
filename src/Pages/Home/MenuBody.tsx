import React from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const MenuBody = () => {
  return (
    <div className="MenuBody">
   <Menu mode="vertical">
      <SubMenu key="sub2" title="Subcategory 2">
        <Menu.Item key="category2.1">Category 2.1</Menu.Item>
        <Menu.Item key="category2.2">Category 2.2</Menu.Item>
      </SubMenu>
    </Menu>
    </div>
 
  );
};

export default MenuBody;
