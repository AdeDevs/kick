import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
// import 'swiper/css/effect-fade';

export default function HomePage() {
    return (
        <div className="home">
            <header className="hero">
                <Swiper
                    spaceBetween={20}
                    modules={[Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    speed={700}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide><Stream /></SwiperSlide>
                    <SwiperSlide><Live /></SwiperSlide>
                    <SwiperSlide><Stream /></SwiperSlide>
                    <SwiperSlide><Live /></SwiperSlide>
                </Swiper>

            </header>
        </div>
    )
}

function Stream() {
    return (
        <div className='hero-card'>
            <div className="hero-content">
                <h1>step up your football <br /> streaming game with  <br /> <span>kick stream+</span></h1>
                <p>stream top leagues, exclusive docs, and all-time <br /> highlights-live and on-demand.</p>
                <button className='access-btn'>get access</button>
            </div>
            <div className="hero-fixture">
                <h1>manchester city <span>vs</span> real madrid</h1>
                <a href="#">see live now</a>
            </div>
        </div>
    )
}

function Live() {
    return (
        <div className='hero-card live'>
            <div className="hero-content">

            </div>
            <div className="hero-fixture">
                <h1>kick stream brings football closer - wherever you are</h1>
                <a href="#">see live now</a>
            </div>
        </div>
    )
}