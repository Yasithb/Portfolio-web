import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Yasith Banula,</span> Software Engineer based Sri Lanka</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, similique rem nisi at laborum nulla praesentium. Nihil animi corporis consequuntur optio enim repudiandae, obcaecati totam officia beatae omnis quae autem!</p>
        <div className="hero-action">
          <div className="hero-connect">Connect with me</div>
          <div className="hero-resume">My resume</div>
        </div>

      
    </div>
  )
}

export default Hero
