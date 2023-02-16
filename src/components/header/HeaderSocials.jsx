import React from 'react'
import {BsLinkedin, BsYoutube} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com/in/jakub-kosiorek" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/kosior3kt" target="_blank"><AiFillGithub/></a>
      <a href="https://www.youtube.com/channel/UC6MaEgxisA6jjGJx9-lrmcg" target="_blank"><BsYoutube/></a>
    </div>
  )
}

export default HeaderSocials
