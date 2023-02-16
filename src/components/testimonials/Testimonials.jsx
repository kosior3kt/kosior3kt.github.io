import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'



const data=[
{
avatar: AVTR1,
name: 'My grandma',
review: 'Jesli Kubulo robi strony choc w połowie tak dobre jak dobrym jest wnuczkiem to ozaczałoby, ze robi najlepsze strony na swiecie (Takie wlasnie robie).'
},
{
  avatar: AVTR2,
  name: 'DamDam',
  review: "I'm heavily inclined to believe that Jakub has to be a greatest designer to ever walk on side of Missisipi."
},
{
  avatar: AVTR3,
  name: 'PlaceHolder',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos ab nesciunt obcaecati nobis qui ex nisi consequatur enim deserunt incidunt animi, repellendus dolore esse voluptatem eveniet fugiat? Exercitationem, quae.'
},
{
  avatar: AVTR4,
  name: 'This Could be You',
  review: "WOW, I'M SO SATISFIED!!."
}

]



const Testimonials = () => {
  return (
    <section>
      <h5>Reviews:</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial__container"
      // install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) =>{
            return(
              <SwiperSlide key = {index} className="testimonial">
              <div className='client__avatar'>
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
