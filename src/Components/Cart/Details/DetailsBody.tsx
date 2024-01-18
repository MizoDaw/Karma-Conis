import React, { useState } from 'react'
import DetailsForm from './DetailsForm';
import { Button, Input } from 'antd';
 
const DetailsBody = ({setViewPage}:any) => {

  const [ phone , setPhone ] = useState(localStorage.getItem("PHONE_CHECK_OUT") || "")
  const [ zone , setZone ] = useState(localStorage.getItem("ZONE_CHECK_OUT") || "")
  const [ building , setBuilding ] = useState(localStorage.getItem("BUILDING_CHECK_OUT") || "")
  const [ not , setNote] = useState(localStorage.getItem("NOTE_CHECK_OUT") || "")
  // const [ street , setStreet ] = useState('')


  return (
    <div className="DetailsBody">
          <div className="DetailsBody_Left">

            <div className='Address'>
              <h5>Shipping Address</h5>
           <div>
              <Input name='phone' placeholder="phone" value={phone}  onChange={(e)=>{
                setPhone(e.target.value)
                localStorage.setItem("PHONE_CHECK_OUT" , e.target.value)
              }}/>
              <Input placeholder="Zone Number"   value={zone}  onChange={(e)=>{
              localStorage.setItem("ZONE_CHECK_OUT" , e.target.value)
                setZone(e.target.value)}}/>
           </div>
           <div>
                   <Input placeholder="Building Number"  value={building}  onChange={(e)=>{
                      localStorage.setItem("BUILDING_CHECK_OUT" , e.target.value)
                    setBuilding(e.target.value)}}/>
                 {/* <Input placeholder="Street Number"  value={street}  onChange={(e)=>setStreet(e.target.value)} /> */}
           </div>
          
           <div>
                 <Input placeholder="Note"  value={not}  onChange={(e)=>{
                                  localStorage.setItem("NOTE_CHECK_OUT" , e.target.value)
                  setNote(e.target.value)}} />
           </div>
           <div>
           <Button type="dashed" block onClick={()=>setViewPage(0)} >
      back to cart
    </Button>
         <Button onClick={()=>setViewPage(2)} className='primary' type="primary" block>
      proceed To Payment
    </Button>
    

           </div>
            </div>

           </div>
            {/* <div className='DetailsBody_Right'> */}
             {/* <DetailsForm/> */}
            {/* </div> */}
    </div>
  )
}

export default DetailsBody