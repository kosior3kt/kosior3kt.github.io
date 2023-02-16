import React from 'react'
import './Experience.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>Skills</h2>
      <div className='container experience__container'>
        
        <div className='experience__backend'>
        <h3>Normal Programming</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiOutlineCheck className='experience__details-icon'/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Expirienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheck className='experience__details-icon'/>
              <div>
                <h4>C</h4>
                <small className='text-light'>Expirienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheck className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheck className='experience__details-icon'/>
              <div>
                <h4>Bash</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheck className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* END NORMAL */}

        <div className='experience__frontend'>
          <h3>Web Programming</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiOutlineCheck className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheck className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheck className='experience__details-icon'/>
              <div>
                <h4>JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheck className='experience__details-icon'/>
              <div>
                <h4>Wordpress</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineCheck className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONT */}
      </div>
    </section>
  )
}


export default Experience
