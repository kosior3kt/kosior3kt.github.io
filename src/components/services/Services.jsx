import React from 'react'
import './Services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Regular Programming</h3>

          </div>

          <ul className='service__list'>
            <li> 
              <AiOutlineCheck className='service__list-icon'/>
              <p>I can become a developer.</p>
            </li>
            <li> 
              <AiOutlineCheck className='service__list-icon'/>
              <p>Or a developer with relocation.</p>
            </li>
            <li> 
              <AiOutlineCheck className='service__list-icon'/>
              <p>It's quite depressing how little I offer.</p>
            </li>
            <li> 
              <AiOutlineCheck className='service__list-icon'/>
              <p>So I will put some gibberish here.</p>
            </li>
            <li> 
              <AiOutlineCheck className='service__list-icon'/>
              <p>To make it look fuller.</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>

          </div>

          <ul className='service__list'>
            <li> 
              <AiOutlineCheck className='service__list-icon'/>
              <p>I can create a website for You (similar to this)</p>
            </li>
            <li> 
              <AiOutlineCheck className='service__list-icon'/>
              <p>I can even host the created website</p>
            </li>
          </ul>
        </article>

        {/* END OF WEBDEV */}

        <article className='service'>
          <div className="service__head">
            <h3>Teaching</h3>
          </div>

          <ul className='service__list'>
            <li> 
              <AiOutlineCheck className='service__list-icon'/>
              <p>I can teach general programming.</p>
            </li>
            <li> 
              <AiOutlineCheck className='service__list-icon'/>
              <p>And the embedded programming.</p>
            </li>
            <li> 
              <AiOutlineCheck className='service__list-icon'/>
              <p>And also sciences (math, physics).</p>
            </li>
            <li> 
              <AiOutlineCheck className='service__list-icon'/>
              <p>In both english and polish.</p>
            </li>
          </ul>
        </article>

        {/* END OF CONTENT CREATION */}

      </div>
    </section>
  )
}

export default Services