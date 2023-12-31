import React from 'react';
import './comments.css';
import AVTR1 from '../../assets/avatar1.png';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.png';
import AVTR4 from '../../assets/avatar4.png';
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar:AVTR1,
    name: 'Joe Mari',
    review: 'Keep it up Sam, way to go! You are doing great, and your skills will only improve with time and practice!',
  },
  {
    avatar:AVTR2,
    name: 'Ian Dumagan',
    review: 'Congratulations on starting your web development journey! It is an exciting world with endless possibilities!',
  },
  {
    avatar:AVTR3,
    name: 'Paul Jearic',
    review: 'Great start! Very impressive to see your progress as a beginner in web development.',
  },
  {
    avatar:AVTR4,
    name: 'Jerry Ale',
    review: 'Nice portfolio! Consider adding more projects to your portfolio to showcase your versatility.',
  },
  
]

const Comments = () => {
  return (
    <section id='comments' className='comments'>
      <h4>People's observations</h4>
      <h2>Comments</h2>

      <Swiper className="container comments__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}

          >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="comment">
              <div className="client__avatar">
    
                <img src={avatar} alt="Avatar One" />
             </div>
                <h5 className='client__name'> {name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          }
          )
        }

      </Swiper>
    </section>
  )
}

export default Comments;

