import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from './Footer'


const Layout = ({ children ,className="",data}: { children: React.ReactNode,data?:any ,className?: string }) => {

  return (
 <div className='Layout'>
     <NavBar data={data}/>
    <main className={`${className} Layout_Body`}>
        {children}
    </main>
    <Footer data={data}/>
 </div>
  )
}

export default Layout