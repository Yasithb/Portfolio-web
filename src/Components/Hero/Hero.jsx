import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1>I'm Yasith Banula, Software Engineer based Sri Lanka</h1>
      
    </div>
  )
}

export default Hero
