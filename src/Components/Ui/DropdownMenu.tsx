import React from 'react';
import { Dropdown, Button, Menu } from 'antd';
import { AppstoreOutlined, DownOutlined, MailOutlined } from '@ant-design/icons';
import { useGetAllCategories } from '../../api/categories';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DropdownMenu = () => {
  const { data, isError, isLoading } = useGetAllCategories();
  const navigate = useNavigate()
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

  const menu = (
    <Menu>
      {NewmenuData?.map((item:any) => (
        <Menu.Item key={item.key}>
          <div onClick={()=> navigate(`/products?categories_id=${item?.key}`)}>{item.label}</div>
        </Menu.Item>
      ))}
    </Menu>
  );


  return (
    <Dropdown overlay={menu} placement="bottomLeft" className="DropdownMenu" trigger={['click']}>
      <Button>
        <AppstoreOutlined />
        {t("Categories")}
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default DropdownMenu;
