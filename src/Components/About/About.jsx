import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
//import profile_img from '../../assets/about_profile.svg'
import profile_img from '../../assets/IMG_4595.png'


const About = () => {
  return (
    <div id='about' className='about'>
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
                    <p>I am a front-end developer passionate about creating responsive, user-friendly web applications. With a solid foundation in HTML, CSS, and JavaScript, I specialize in building clean, efficient, and accessible interfaces. I have experience working with modern frameworks like React.</p>                </div>
                    <p>I am eager to contribute to a dynamic team where I can continue to learn and grow while delivering impactful user experiences. I graduated from San Jose State University with a strong GPA of 4.0, I am looking for internships or full-time roles.</p>
                    <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p><hr style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                    <p>React JS</p><hr style={{width:"70%"}}/>
                </div>
                <div className="about-skill">
                    <p>JavaScript</p><hr style={{width:"60%"}}/>
                </div>
            </div>
            </div>
            
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>45+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
        </div>
    </div>
  )
}

export default About