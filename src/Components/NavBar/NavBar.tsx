import React from 'react'
import MidBar from './MidBar'
import TopBar from './TopBar'
import BottomBar from './BottomBar'
import Header from './Header'

const NavBar = ({data}:any) => {
  return (
    <>
      <Header/>
    <div>
        {/* <TopBar data={data}/> */}
     <div className='FnBar'>
       <MidBar/>
      <BottomBar/>
     </div>
    </div>
    </>
  )
}

export default NavBar