import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import debate from "../assets/debate.png"
import reactions from "../assets/reactions.png"
import rally from "../assets/rally.png"
import laliga from "../assets/laliga.png"

import 'swiper/css';
// import { motion } from 'framer-motion';
// import 'swiper/css/effect-fade';

export default function HomePage() {
    return (
        <div className="home">
            <header className="hero">
                <Swiper
                    spaceBetween={0}
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
                    <Swiper
                        spaceBetween={20}
                        modules={[Autoplay]}
                        loop={true}
                        speed={300}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: { slidesPerView: "auto" },
                            640: { slidesPerView: 1.3 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        <SwiperSlide><Debate /></SwiperSlide>
                        <SwiperSlide><Reactions /></SwiperSlide>
                        <SwiperSlide><Rally /></SwiperSlide>
                        <SwiperSlide><Debate /></SwiperSlide>
                        <SwiperSlide><Reactions /></SwiperSlide>
                        <SwiperSlide><Rally /></SwiperSlide>
                    </Swiper>
                </section>
            </div>
            <div className="leagues">
                <h1 className='lgs'>LEAGUES</h1>
                {/* <section className="league-top">
                    <ul>
                        <li className='league-logo prem'></li>
                        <li>Premier League</li>
                    </ul>
                    <ul>
                        <li className='league-logo serie'></li>
                        <li>serie a</li>
                    </ul>
                    <ul>
                        <li className='league-logo ligue'></li>
                        <li>ligue 1</li>
                    </ul>
                    <ul>
                        <li className='league-logo fifa'></li>
                        <li>fifa world cup</li>
                    </ul>
                    <ul>
                        <li className='league-logo brasil'></li>
                        <li>brasileirao</li>
                    </ul>
                    <ul>
                        <li className='league-logo mls'></li>
                        <li>mls</li>
                    </ul>
                    <ul>
                        <li className='league-logo japan'></li>
                        <li>j-league</li>
                    </ul>
                    <ul>
                        <li className='league-logo laliga'>
                            <img src={laliga} alt="laliga" />
                        </li>
                        <li>laliga</li>
                    </ul>
                    <ul>
                        <li className='league-logo bundesliga'></li>
                        <li>bundesliga</li>
                    </ul>
                    <ul>
                        <li className='league-logo korea'></li>
                        <li>k-league</li>
                    </ul>
                </section> */}
                <section className="league-matches">
                    <div className="match-nav">
                        <h1>upcoming matches</h1>
                        <a href="#">view all</a>
                    </div>
                    <div className="matches">
                        <div className="match-card">
                            <div className="match-top">
                                <ul>
                                    <span className='channel-color'><ion-icon name="radio-button-on-outline"></ion-icon></span>
                                    <li>live channels <br /> <span className='dte'>12 dec 2025</span></li>
                                </ul>
                            </div>
                            <div className="match-info">
                                <h2 className="mch-date">12 dec</h2>
                                <p>chelsea <span>vs</span> everton</p>
                                <button className='live-btn'>see live now</button>
                            </div>
                        </div>
                        <div className="match-card">
                            <div className="match-top">
                                <ul>
                                    <span className='channel-color'><ion-icon name="radio-button-on-outline"></ion-icon></span>
                                    <li>live channels <br /> <span className='dte'>13 dec 2025</span></li>
                                </ul>
                            </div>
                            <div className="match-info">
                                <h2 className="mch-date">13 dec</h2>
                                <p>liverpool <span>vs</span> brighton</p>
                                <button className='live-btn'>see live now</button>
                            </div>
                        </div>
                        <div className="match-card">
                            <div className="match-top">
                                <ul>
                                    <span className='channel-color'><ion-icon name="radio-button-on-outline"></ion-icon></span>
                                    <li>live channels <br /> <span className='dte'>14 dec 2025</span></li>
                                </ul>
                            </div>
                            <div className="match-info">
                                <h2 className="mch-date">14 dec</h2>
                                <p>crystal palace <span>vs</span> man city</p>
                                <button className='live-btn'>see live now</button>
                            </div>
                        </div>
                        <div className="match-card">
                            <div className="match-top">
                                <ul>
                                    <span className='channel-color'><ion-icon name="radio-button-on-outline"></ion-icon></span>
                                    <li>live channels <br /> <span className='dte'>14 dec 2025</span></li>
                                </ul>
                            </div>
                            <div className="match-info">
                                <h2 className="mch-date">14 dec</h2>
                                <p>strasbourg <span>vs</span> lorient</p>
                                <button className='live-btn'>see live now</button>
                            </div>
                        </div>
                        <div className="match-card">
                            <div className="match-top">
                                <ul>
                                    <span className='channel-color'><ion-icon name="radio-button-on-outline"></ion-icon></span>
                                    <li>live channels <br /> <span className='dte'>15 dec 2025</span></li>
                                </ul>
                            </div>
                            <div className="match-info">
                                <h2 className="mch-date">15 dec</h2>
                                <p>man united <span>vs</span> bournemouth</p>
                                <button className='live-btn'>see live now</button>
                            </div>
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
function Debate() {
    return (
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
    )
}
function Reactions() {
    return (
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
    )
}
function Rally() {
    return (
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
    )
}