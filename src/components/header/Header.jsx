import React from 'react'
import './Header.css'
import CTA  from './CTA'
import ME from '../../assets/me5.png'
// import ME_VID from '../../assets/yes2.mov'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className='container header__container'>
            <h5> Hello I'm</h5>
            <h1>Jakub Kosiorek</h1>
            <h5 className="text-light">Just a programmer</h5>
            <CTA/>
            <HeaderSocials/>
            <div className='me'>
              <img src={ME} alt="me"/>
              {/* <video src={ME_VID} type='vide/quicktime'></video> */}
            </div>
            <a href= '#contact' className='scroll__down'>Scroll Down!</a>
        </div>
    </header>
  )
}

export default Header
