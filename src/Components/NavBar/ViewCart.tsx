import React from 'react'
import WithDrawer from '../../HighOrderComponent/WithDrawer'
import { Badge, Button, Tooltip } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import CardItem from '../Ui/CardItem'
import { Link, useNavigate } from 'react-router-dom'
import { useCartData } from '../../Redux/DispatchData'
import { useGetCart } from '../../api/cart'

const ViewCart = () => {
  const { DataCart,count} = useCartData()
  const {data } = useGetCart()

  
    const navigate = useNavigate()
  return (
    <div className='ViewCart'>
         <WithDrawer
         width='350'
         turn_of={true}

    title="Cart Item"
      button={ 
      <Badge className='Badge_Button' count={data?.data?.data?.at(0)?.cart_items_count} >
          <div className="Cart_Icon"  onClick={()=>navigate('/cart')}>
          <Tooltip title="cart">
          <ShoppingCartOutlined  />
          </Tooltip>

          </div>
    </Badge>
    }
    >
      <div className='Drawer_Body'>
        
    <div className='Card_Items'>
      {DataCart.map((item:any, index:number) => (
        <CardItem data={item} />
      ))}
    </div>
    
    <div className='ViewCart_Button'>
   <Link to='/cart'>  <Button type="primary" block>
      view cart
    </Button> </Link>
    </div>
      </div>
    
 
    </WithDrawer>
    </div>
  )
}

export default ViewCart