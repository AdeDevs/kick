import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
// import { motion } from 'framer-motion';
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
            <div className="events">
                <h1>top events</h1>
                <div className="event-results">
                    <div>
                        <h2>final</h2>
                        <ul className="event-score">
                            <section className="check"> <li><span className="color"></span> che</li>  <span className='num'>5</span> </section>
                            <section className='check'><li><span className="color"></span> lee </li><span className='num'>0</span></section>
                        </ul>
                    </div>
                    <div>
                        <h2>final</h2>
                        <ul className="event-score">
                            <section className="check"> <li><span className="color"></span> ars</li>  <span className='num'>1</span> </section>
                            <section className='check'><li><span className="color"></span> mci </li><span className='num'>1</span></section>
                        </ul>
                    </div>
                    <div>
                        <h2>final</h2>
                        <ul className="event-score">
                            <section className="check"> <li><span className="color"></span> mun</li>  <span className='num'>2</span> </section>
                            <section className='check'><li><span className="color"></span> eve </li><span className='num'>5</span></section>
                        </ul>
                    </div>
                    <div>
                        <h2>final</h2>
                        <ul className="event-score">
                            <section className="check"> <li><span className="color"></span> lei</li>  <span className='num'>3</span> </section>
                            <section className='check'><li><span className="color"></span> liv </li><span className='num'>1</span></section>
                        </ul>
                    </div>
                    <div>
                        <h2>final</h2>
                        <ul className="event-score">
                            <section className="check"> <li><span className="color"></span> bar</li>  <span className='num'>2</span> </section>
                            <section className='check'><li><span className="color"></span> rma </li><span className='num'>2</span></section>
                        </ul>
                    </div>
                    <div>
                        <h2>final</h2>
                        <ul className="event-score">
                            <section className="check"> <li><span className="color"></span> mun</li>  <span className='num'>2</span> </section>
                            <section className='check'><li><span className="color"></span> ars </li><span className='num'>0</span></section>
                        </ul>
                    </div>
                    <div>
                        <h2>final</h2>
                        <ul className="event-score">
                            <section className="check"> <li><span className="color"></span> mun</li>  <span className='num'>2</span> </section>
                            <section className='check'><li><span className="color"></span> ars </li><span className='num'>0</span></section>
                        </ul>
                    </div>
                    <div>
                        <h2>final</h2>
                        <ul className="event-score">
                            <section className="check"> <li><span className="color"></span> mun</li>  <span className='num'>2</span> </section>
                            <section className='check'><li><span className="color"></span> ars </li><span className='num'>0</span></section>
                        </ul>
                    </div>
                </div>
            </div>

            <h1>Hello World</h1>
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