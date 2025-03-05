import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consequuntur perferendis odio iusto alias laudantium minus corrupti reprehenderit quas inventore.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ratione praesentium eligendi officia rem ipsum architecto porro accusantium consequatur ullam.</p>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
