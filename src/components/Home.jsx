import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import debate from "../assets/debate.png"
import reactions from "../assets/reactions.png"
import rally from "../assets/rally.png"

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
                    speed={1000}
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
                    <div className='result-box'>
                        <h2>final</h2>
                        <ul className="event-score">
                            <section className="check"> <li><span className="color"></span> che</li>  <span className='num'>5</span> </section>
                            <section className='check'><li><span className="color"></span> lee </li><span className='num'>0</span></section>
                        </ul>
                    </div>
                    <div className='result-box'>
                        <h2>final</h2>
                        <ul className="event-score">
                            <section className="check"> <li><span className="color"></span> ars</li>  <span className='num'>1</span> </section>
                            <section className='check'><li><span className="color"></span> mci </li><span className='num'>1</span></section>
                        </ul>
                    </div>
                    <div className='result-box'>
                        <h2>final</h2>
                        <ul className="event-score">
                            <section className="check"> <li><span className="color"></span> mun</li>  <span className='num'>2</span> </section>
                            <section className='check'><li><span className="color"></span> eve </li><span className='num'>5</span></section>
                        </ul>
                    </div>
                    <div className='result-box'>
                        <h2>final</h2>
                        <ul className="event-score">
                            <section className="check"> <li><span className="color"></span> lei</li>  <span className='num'>3</span> </section>
                            <section className='check'><li><span className="color"></span> liv </li><span className='num'>1</span></section>
                        </ul>
                    </div>
                    <div className='result-box'>
                        <h2>final</h2>
                        <ul className="event-score">
                            <section className="check"> <li><span className="color"></span> bar</li>  <span className='num'>2</span> </section>
                            <section className='check'><li><span className="color"></span> rma </li><span className='num'>2</span></section>
                        </ul>
                    </div>
                    <div className='result-box'>
                        <h2>final</h2>
                        <ul className="event-score">
                            <section className="check"> <li><span className="color"></span> mun</li>  <span className='num'>2</span> </section>
                            <section className='check'><li><span className="color"></span> ars </li><span className='num'>0</span></section>
                        </ul>
                    </div>
                    <div className='result-box'>
                        <h2>final</h2>
                        <ul className="event-score">
                            <section className="check"> <li><span className="color"></span> mun</li>  <span className='num'>2</span> </section>
                            <section className='check'><li><span className="color"></span> ars </li><span className='num'>0</span></section>
                        </ul>
                    </div>
                    <div className='result-box'>
                        <h2>final</h2>
                        <ul className="event-score">
                            <section className="check"> <li><span className="color"></span> mun</li>  <span className='num'>2</span> </section>
                            <section className='check'><li><span className="color"></span> ars </li><span className='num'>0</span></section>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="features">
                <section className="feat-head">
                    <p>best features of 2025</p>
                    <div className="feat-nav">
                        <h1 className='big-text'>YOUR <span>VOICE.</span> YOUR <br /> <span>GAME.</span> YOUR <span>KICK.</span></h1>
                        <ul className="control">
                            <li><ion-icon name="arrow-back-sharp"></ion-icon></li>
                            <li><ion-icon name="arrow-forward-sharp"></ion-icon></li>
                        </ul>
                    </div>
                </section>
                <section className="features-box">
                    <div className="feat-card debate">
                        <div className='feat-img'>
                            <div className='feat-fixture'>
                                <ul>
                                    <article>
                                        <span className='channel-color'><ion-icon name="radio-button-on-outline"></ion-icon></span>
                                         <li>live channels <br /> <span className='dte'>09 june 2025</span></li>
                                    </article>
                                    <li className='dbt'>fan debate <br /> room</li>
                                </ul>
                                <img src={debate} alt="debate image" />
                            </div>
                        </div>
                        <div className='feat-foot'>
                            <div className="feat-info">
                                <ul>
                                    <li>community-led voice + video chat</li>
                                    <li>heated takes, polls, and prediction <br /> battles</li>
                                    <li>3.9 million followers</li>
                                </ul>
                                {/* <h2>Logo</h2> */}
                            </div>
                            <button>join discussion</button>
                        </div>
                    </div>
                    <div className="feat-card reactions">
                        <div className='feat-img'>
                            <div className='feat-fixture'>
                                <ul>
                                    <article>
                                        <span className='channel-color'><ion-icon name="radio-button-on-outline"></ion-icon></span>
                                         <li>live channels <br /> <span className='dte'>09 june 2025</span></li>
                                    </article>
                                    <li className='dbt'>fan debate <br /> room</li>
                                </ul>
                                <img src={reactions} alt="debate image" />
                            </div>
                        </div>
                        <div className='feat-foot'>
                            <div className="feat-info">
                                <ul>
                                    <li>community-led voice + video chat</li>
                                    <li>heated takes, polls, and prediction <br /> battles</li>
                                    <li>3.9 million followers</li>
                                </ul>
                                {/* <h2>Logo</h2> */}
                            </div>
                            <button>join discussion</button>
                        </div>
                    </div>
                    <div className="feat-card rally">
                        <div className='feat-img'>
                            <div className='feat-fixture'>
                                <ul>
                                    <article>
                                        <span className='channel-color'><ion-icon name="radio-button-on-outline"></ion-icon></span>
                                         <li>live channels <br /> <span className='dte'>09 june 2025</span></li>
                                    </article>
                                    <li className='dbt'>fan debate <br /> room</li>
                                </ul>
                                <img src={rally} alt="rally image" />
                            </div>
                        </div>
                        <div className='feat-foot'>
                            <div className="feat-info">
                                <ul>
                                    <li>community-led voice + video chat</li>
                                    <li>heated takes, polls, and prediction <br /> battles</li>
                                    <li>3.9 million followers</li>
                                </ul>
                                {/* <h2>Logo</h2> */}
                            </div>
                            <button>join discussion</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}



function Stream() {
    return (
        <div className='hero-card'>
            <div className="hero-content">
                <h1 className='big-text'>step up your football <br /> streaming game with  <br /> <span>kick stream+</span></h1>
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