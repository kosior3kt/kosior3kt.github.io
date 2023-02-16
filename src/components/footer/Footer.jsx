import React from 'react'
import './Footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {BsYoutube, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Kosior3kt</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com/follow.damn.train.68" target='_blank'><AiFillFacebook/></a>
        <a href="https://instagram.com" target='_blank'><BsInstagram/></a>
        <a href="https://youtube.com" target='_blank'><BsYoutube/></a>
      </div>
      
      <div className="footer__copyright">

        <small>
          &copy; Jakub Kosiorek. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer