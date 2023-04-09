import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import lol from './images/lol.jpeg';
import door from './images/door.png';
import regbound from './images/rebound.jpeg';
import slamdunk from './images/slamdunk.jpeg';
import john from './images/john.jpeg';
import dragon from './images/dragon.jpeg';
import './Movie.scss'

SwiperCore.use([Navigation, Pagination, Autoplay])

// 재사용성 고려
// const data = [
//     {
//         id:1,
//         name: 'slamdunk'
//     },
//     {
//         id:2,
//         name:'door'
//     },
//     {
//         id:3,
//         name:'reound'
//     },
//     {
//         id:4,
//         name:'lol'
//     },
// ]

const Movie = () => {
    return(
        <div className='Movie'>
        <h2># 금주의 추천영화</h2>
        <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
            <div>
            <img src={door} alt = "" className='movie-photo'></img>
            <h3 className='gradeTxt'>2위 영화</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
            <img src={lol} alt = "" className='movie-photo'></img>
            <h3 className='gradeTxt'>3위 영화</h3>
            
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
            <img src={regbound} alt = "" className='movie-photo'></img>
            <h3 className='gradeTxt'>4위 영화</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
            <img src={slamdunk} alt = "" className='movie-photo'></img>
            <h3 className='gradeTxt'>5위 영화</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
            <img src={dragon} alt = "" className='movie-photo'></img>
            <h3 className='gradeTxt'>6위 영화</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
            <img src={john} alt = "" className='movie-photo'></img>
            <h3 className='gradeTxt'>7위 영화</h3>
            </div>
        </SwiperSlide>
        {/* 재사용 시 map으로 돌릴 생각중 */}
        {/* {data.map(movie => {
            <SwiperSlide key={movie.id} className='slide'>
                <div className='slide-content'>{movie.name}</div>
                <div className='movie-image'>
                    <img src= "./images/door.jepg" alt = "" className='movie=photo' />
                </div>
            </SwiperSlide>
        })} */}
      </Swiper>
      </div>
    )
}

export default Movie;