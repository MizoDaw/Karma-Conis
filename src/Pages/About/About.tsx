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

            <span>
              <img src='../logo-without-text.png' alt='logo' className='logo_image'/>
              </span>
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
        {/* {renderHTML(data?.data?.translations?.at(0).content)} */}

        Us: Experts in numismatics.
Coins and numismatics are our passion. We would like to share this with you. Whether in gold, silver or bronze: coins are so much more than heads or tails. They are an expression of history and a good investment.

Finding your way in the world of coins requires knowledge, experience and reputability. We offer all of these things, acting for you competently and individually. Are you looking for experts in Greek, Roman, Byzantine, medieval or modern numismatics? You are in the right place.

Auctions: The hour of coins. Spring and autumn are the seasons for coins to shine. In these seasons, buyers, art enthusiasts and collectors alike find themselves at Leu auctions in Zurich to experience the change in ownership of selected rarities and numismatic specialities.These treasures are published in high quality catalogues, which receive the attention of an international clientele. A thrilling experience for every coin lover.
        </div>

    </Layout>
  )
}

export default About