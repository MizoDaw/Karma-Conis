import React from 'react'
import Layout from '../../Layout/app/Layout'
import AboutCard from '../../Components/About/AboutCard'
import { useGetAboutUs } from '../../api/app_info'

const renderHTML = (escapedHTML: string) => React.createElement("div", { dangerouslySetInnerHTML: { __html: escapedHTML } });

const About = () => {
  const {data} = useGetAboutUs({id:1})

  
  
  return (
    <Layout>
        <h1 className='About_Header'>About Us</h1>
        <div className='Top_Card_container' >
            {/* <AboutCard image={1} name='Moaz Dawalibi' position='Front end cheif ' email='Moaz@Sdnone.net'/>
            <AboutCard image={1} name='MOaz IbRAHIM' position='Front END' email='Moaz@Sdnone.net'/>
            <AboutCard image={1} name='MOaz IbRAHIM' position='Front END' email='Moaz@Sdnone.net'/>           */}

            <span><img src='../logo-without-text.png' alt='logo' className='logo_image'/></span>
        </div>

        <div className='Bottom_Card_container' >
            {/* <AboutCard image={1} name='MOaz IbRAHIM' position='Front END' email='Moaz@Sdnone.net'/>
            <AboutCard image={1} name='MOaz IbRAHIM' position='Front END' email='Moaz@Sdnone.net'/>
            <AboutCard image={1} name='MOaz IbRAHIM' position='Front END' email='Moaz@Sdnone.net'/>
            <AboutCard image={1} name='MOaz IbRAHIM' position='Front END' email='Moaz@Sdnone.net'/>
            <AboutCard image={1} name='MOaz IbRAHIM' position='Front END' email='Moaz@Sdnone.net'/>
            <AboutCard image={1} name='MOaz IbRAHIM' position='Front END' email='Moaz@Sdnone.net'/>
            <AboutCard image={1} name='MOaz IbRAHIM' position='Front END' email='Moaz@Sdnone.net'/>
            <AboutCard image={1} name='MOaz IbRAHIM' position='Front END' email='Moaz@Sdnone.net'/>
            <AboutCard image={1} name='MOaz IbRAHIM' position='Front END' email='Moaz@Sdnone.net'/>
            <AboutCard image={1} name='MOaz IbRAHIM' position='Front END' email='Moaz@Sdnone.net'/>
            <AboutCard image={1} name='MOaz IbRAHIM' position='Front END' email='Moaz@Sdnone.net'/>
            <AboutCard image={1} name='MOaz IbRAHIM' position='Front END' email='Moaz@Sdnone.net'/> */}
        </div>
        <div className='Description_title'>
          <h1 className='title'>Who are we</h1>
        </div>
        <div className='description'>
        {renderHTML(data?.data?.translations?.at(0).content)}
        </div>

    </Layout>
  )
}

export default About