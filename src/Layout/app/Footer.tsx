import React from 'react'
import { BaseURL } from '../../api/config';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { MdEmail, MdOutlineShoppingCart } from 'react-icons/md';
import { CiHome, CiPhone } from 'react-icons/ci';
import { IoIosInformationCircleOutline, IoMdContacts } from "react-icons/io";
import { useGetSocialMedia } from '../../api/social_media';
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const { data: socialMediaData } = useGetSocialMedia()
  const [t] = useTranslation()
  
  const socialMediaItems = Array.isArray(socialMediaData?.data)
  ? socialMediaData?.data.map((social: any, index: number) => (
      <Tooltip key={index} title={social.social_media_link}>
        <img
          onClick={() => {
            window.location.href = social.social_media_link;
          }}
          alt="social-image"
          src={`${BaseURL}${social.social_media_image}`}
          style={{ width: 40 }}
        />
      </Tooltip>
    ))
  : null;
  return (
    <div className='Footer'>
      <>
        <div className="">
          {/* Footer */}
          <footer
            className="text-center Footer_Bg text-lg-start text-white"
          >

            <section
              className=" Footer_Header">
              <div className="me-7 ">
                <span>{t("Our Social Networks:")}</span>
              </div>
              {socialMediaItems}
            </section>

            <section className="">
              <div className="container text-center text-md-start mt-5">
                {/* Grid row */}
                <div className="row mt-3">
                  {/* Grid column */}
                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4" >
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold">{t("Karma Antique")}</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block"
                      style={{ width: '60%', backgroundColor: "#7c4dff", height: 2 }}
                    />
                    <p className='footer_links'>
                      <CiHome size={20} />
                      <Link to="/" className="text-white">
                        {t("Home")}
                      </Link>
                    </p>
                    <p className='footer_links'>
                      <MdOutlineShoppingCart />
                      <Link to="/products" className="text-white">
                        {t("Products")}
                      </Link>
                    </p>
                    <p className='footer_links'>
                      <IoIosInformationCircleOutline />
                      <Link to="/about" className="text-white">
                        {t("About us")}
                      </Link>
                    </p>
                    <p className='footer_links'>
                      <IoMdContacts />
                      <Link to="/contact" className="text-white">
                        {t("Contact us")}
                      </Link>
                    </p>



                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold">{t("Useful links")}</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block "
                      style={{ width: "40%", backgroundColor: "#7c4dff", height: 2 }}
                    />
                    <p>
                      <a href="#!" className="text-white">
                      </a>
                      <MdEmail /> abdalhaesm@gmail.com
                    </p>
                    <p >
                      <a href="#!" className="text-white">
                      </a>
                      <CiPhone size={20} /> 0097466456660
                    </p>

                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold">{t("Loaction")}</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                    />
                    <p>
                      {t("Qatar")}
                    </p>
                    <p>
                      {t("Doha")} 
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
              © 2024 {t("Copyright")}:
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






