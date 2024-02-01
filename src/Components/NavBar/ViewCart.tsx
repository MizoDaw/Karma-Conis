import React from 'react'
import WithDrawer from '../../HighOrderComponent/WithDrawer'
import { Badge, Button, Tooltip } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import CardItem from '../Ui/CardItem'
import { Link, useNavigate } from 'react-router-dom'
import { useCartData } from '../../Redux/DispatchData'
import { useGetCart } from '../../api/cart'
import { useTranslation } from 'react-i18next'

const ViewCart = () => {
  const { DataCart,count} = useCartData()
  const {data } = useGetCart()
  const {t} = useTranslation();
  
    const navigate = useNavigate()
  return (
    <div className='ViewCart'>
         <WithDrawer
         width='350'
         turn_of={true}

    title="Cart Item"
      button={ 
      <Badge className='Badge_Button' count={data?.data?.at(0)?.cart_items_count} >
          <div className="Cart_Icon"  onClick={()=>navigate('/cart')}>
          <Tooltip title={t("cart")}>
          <ShoppingCartOutlined />
          </Tooltip>

          </div>
    </Badge>
    }
    >
      <div className='Drawer_Body'>
        
    <div className='Card_Items'>
      {DataCart.map((item:any, index:number) => (
        <CardItem key={index} data={item} />
      ))}
    </div>
    
    <div className='ViewCart_Button'>
   <Link to='/cart'>  <Button type="primary" block>
      {t("view cart")}
    </Button> </Link>
    </div>
      </div>
    
 
    </WithDrawer>
    </div>
  )
}

export default ViewCart