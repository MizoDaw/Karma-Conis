import React, { useState } from 'react'
import { BaseURL } from '../../api/config';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { MdEmail, MdOutlineShoppingCart } from 'react-icons/md';
import { BsPhone } from 'react-icons/bs';
import { CiHome, CiPhone } from 'react-icons/ci';
import { FcAbout } from "react-icons/fc";
import { IoIosInformationCircleOutline, IoMdContact, IoMdContacts } from "react-icons/io";

const Footer = ({data}:any) => {
  console.log(data?.data?.socialmedia);
    const SoicalMedia = data?.data?.socialmedia
  return (
    <div className='Footer'>
        <>
  {/* Remove the container if you want to extend the Footer to full width. */}
  <div className="">
    {/* Footer */}
    <footer
      className="text-center Footer_Bg text-lg-start text-white"
    >

      <section
        className=" Footer_Header">
        <div className="me-7 ">
          <span>Our Social Networks:</span>
        </div>
      {SoicalMedia?.map((social:any) =><>

          <Tooltip  title={social.social_media_link} >

        <img  onClick={()=>{
          window.location.href = social.social_media_link
        }}  alt={social.social_media_link}  src={BaseURL + social.social_media_image} style={{width:40}} 
        
        />
          </Tooltip>
      </>)}
      </section>
  
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
           
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4" >
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Karma Antique</h6>
              <hr
                className="mb-4 mt-0 d-inline-block"
                style={{ width: '60%',  backgroundColor: "#7c4dff", height: 2 }}
              />
              <p className='footer_links'>
                <CiHome size={20}/>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </p>
              <p className='footer_links'>
                <MdOutlineShoppingCart/>
                <Link to="/products" className="text-white">
                  Products
                </Link>
              </p>
              <p className='footer_links'>
                <IoIosInformationCircleOutline/>
                <Link to="/about" className="text-white">
                  About us
                </Link>
              </p>
              <p className='footer_links'>
                <IoMdContacts/>
                <Link to="/contact" className="text-white">
                  Contact us
                </Link>
              </p>
            
            
            
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr
                className="mb-4 mt-0 d-inline-block "
                style={{ width: "40%", backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <a href="#!" className="text-white">
                </a>
               <MdEmail/> abdalhaesm@gmail.com
              </p>
              <p >
                <a href="#!" className="text-white">
                </a>
                <CiPhone size={20}/> 0097466456660
              </p>
          
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Loaction</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                Syria
              </p>
              <p>
                Damascus , Mazzeh
              </p>
           
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright:
        <a className="text-white " href="https://sdnone.net/">
         <p>SdnOne </p>  
        </a>
      </div>
      {/* Copyright */}
    </footer>
    {/* Footer */}
  </div>
  {/* End of .container */}
</>

    </div>
  )
}

export default Footer






