import React from 'react'
import MidBar from './MidBar'
import TopBar from './TopBar'
import BottomBar from './BottomBar'

const NavBar = ({data}:any) => {
  return (
    <div>
         <TopBar data={data}/>
     <div className='FnBar'>
       <MidBar/>
      <BottomBar/>
     </div>
    </div>
  )
}

export default NavBar