import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data=[
{
  id: 1,
  image: IMG1,
  title: 'Nothing to see here yet',
  github: 'https://github.com/kosior3kt',
  demo: 'https://github.com/kosior3kt'
},
{
  id: 2,
  image: IMG2,
  title: 'Nothing to see here yet',
  github: 'https://github.com/kosior3kt',
  demo: 'https://github.com/kosior3kt'
},
{
  id: 3,
  image: IMG3,
  title: 'Nothing to see here yet',
  github: 'https://github.com/kosior3kt',
  demo: 'https://github.com/kosior3kt'
},
{
  id: 4,
  image: IMG4,
  title: 'Nothing to see here yet',
  github: 'https://github.com/kosior3kt',
  demo: 'https://github.com/kosior3kt'
},
{
  id: 5,
  image: IMG5,
  title: 'Nothing to see here yet',
  github: 'https://github.com/kosior3kt',
  demo: 'https://github.com/kosior3kt'
},
{
  id: 6,
  image: IMG6,
  title: 'Nothing to see here yet',
  github: 'https://github.com/kosior3kt',
  demo: 'https://github.com/kosior3kt'
}
]




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Portfolio!</h5>
      <h2>My recent Works</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=> {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio