import React from 'react'
import './Nav.css'
import {AiFillHome, AiOutlineMessage } from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BsBookHalf} from 'react-icons/bs'
import {MdOutlineDesignServices} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><AiFillHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><BiUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><BsBookHalf/></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav==='#services' ? 'active' : ''}><MdOutlineDesignServices/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav
