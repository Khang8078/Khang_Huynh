import React from 'react'
import "./Hero.css"
import profile_img from '../../assets/IMG_4595.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>I am Khang Huynh</span> , frontend developer based in USA.</h1>
        {/* <p>I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p> */}
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <a href="https://docs.google.com/document/d/1NfOG2BUccOWkx3CWIBKQGfieV6S7bRfuf4oHD0stWFY/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><div className="hero-resume">My resume</div></a>
        </div>
    </div>
  )
}

export default Hero