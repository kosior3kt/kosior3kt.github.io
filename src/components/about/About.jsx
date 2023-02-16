import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FiAward, FiUsers} from 'react-icons/fi'
import {FaFlask} from 'react-icons/fa'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-img'>
            <img src={ME} alt="me"></img>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Not much really (with webDev)</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>My Clients</h5>
              <small>Are satisfied</small>
            </article>
            <article className='about__card'>
              <FaFlask className='about__icon'/>
              <h5>Projects</h5>
              <small>Have done some</small>
            </article>
          </div>

          <p>
            Hi, quite frankly I'm not even a web developer, I'm just a regular software engineer developing mainly in C/C++. You may wonder why would I create website then - answear is quite simple - I love testing new things and also it's trendy!

          </p>
        <a href='#contact' className='btn btn-primary'>Let's get in touch!</a>
        </div>
      </div>
    </section>
  )
}

export default about
