import React from 'react'

interface TAboutCard {
    image:any,
    name:string,
    position:string,
    email:string
}

const AboutCard = ({image, name, position, email}:TAboutCard) => {
  return (
    <div className='AboutCard_container'>
        <div className='AboutCard'>
            <img src={`../Product/Product.jpg`} alt='AboutCard' className='AboutCard_image'/>
        </div>
        <h1 className='AboutCard_name'>{name}</h1>
        <p className='AboutCard_position'>{position}</p>
    </div>
  )
}

export default AboutCard