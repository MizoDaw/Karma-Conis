import React from 'react';
import { Dropdown, Button, Menu } from 'antd';
import { AppstoreOutlined, DownOutlined, MailOutlined } from '@ant-design/icons';
import { useGetAllCategories } from '../../api/categories';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { MenuProps } from 'antd';

const DropdownMenu = () => {
  const { data, isError, isLoading } = useGetAllCategories();
  const navigate = useNavigate();
  const [t] = useTranslation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data?.data?.data) {
    return <div>Error loading categories</div>;
  }

  const CategoriesArry = data.data.data.map((item: any) => ({
    value: item?.category_translations[0]?.name,
    label: item?.id,
  }));

  const NewmenuData = CategoriesArry.map((category: any) => ({
    key: category.label,
    label: category.value,
    icon: <MailOutlined />,
  }));
  const items: any = NewmenuData?.map((item: any) => ({
    key: item.key,
    label: (
      <a target="_blank" rel="noopener noreferrer" href={`https://www.example.com/${item.key}`}>
        {item.label}
      </a>
    ),
    icon: item.icon, // You can include the icon if available
    disabled: item.disabled,
    danger: item.danger,
  }));
  
  const menu: React.ReactNode = (
    <Menu>
      {items.map((menuItem: any) => (
        <Menu.Item key={menuItem.key} disabled={menuItem.disabled} danger={menuItem.danger}>
          {menuItem.label}
        </Menu.Item>
      ))}
    </Menu>
  );
  

  return (
    <Dropdown menu={{items}} placement="bottomLeft" className="DropdownMenu" trigger={['click']}>
      <Button>
        <AppstoreOutlined />
        {t("Categories")}
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default DropdownMenu;
