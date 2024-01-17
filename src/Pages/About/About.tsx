import React from 'react'
import Layout from '../../Layout/app/Layout'
import AboutCard from '../../Components/About/AboutCard'

const About = () => {
  return (
    <Layout>
        <h1 className='About_Header'>About Us</h1>
        <div className='Top_Card_container' >
            <AboutCard image={1} name='Moaz Dawalibi' position='Front end cheif ' email='Moaz@Sdnone.net'/>
            <AboutCard image={1} name='MOaz IbRAHIM' position='Front END' email='Moaz@Sdnone.net'/>
            <AboutCard image={1} name='MOaz IbRAHIM' position='Front END' email='Moaz@Sdnone.net'/>          
        </div>

        <div className='Bottom_Card_container' >
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
            <AboutCard image={1} name='MOaz IbRAHIM' position='Front END' email='Moaz@Sdnone.net'/>
            <AboutCard image={1} name='MOaz IbRAHIM' position='Front END' email='Moaz@Sdnone.net'/>
        </div>
        <div className='description'>
          lorem iopserm omsomaoxm enaomxom somaom lorem iopserm omsomaoxm enaomxom somaom lorem iopserm omsomaoxm enaomxom somaom lorem iopserm omsomaoxm enaomxom somaom lorem iopserm omsomaoxm enaomxom somaom lorem iopserm omsomaoxm enaomxom somaom 
        </div>

    </Layout>
  )
}

export default About