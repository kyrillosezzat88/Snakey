import React from 'react'
import play from '../img/home/play-icon.png'
import banar1 from '../img/banner/hero-banner1.png'
import banarr from '../img/banner/hero-banner2.png'
import icon from '../img/banner/fas-service-icon.png'
import icon2 from '../img/banner/fresh-food-icon.png'
import icon3 from '../img/banner/support-icon.png'
import about from '../img/home/about-img1.png'

const About = () => {
    return(
        <div>
            <section className="Home">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="text">
                            <h1>About US</h1>
                            <p>From set together our divided own saw divided the form god 
                                seas moveth you will fifth under replenish end</p>
                        </div>
                        <div className="icons">
                            <div className="row">
                                <div className="col">
                                    <img src={icon} />
                                    <h6>Fast Service</h6>
                                </div>
                                <div className="col">
                                    <img src={icon2} />
                                    <h6>Fresh Food</h6>
                                </div>
                                <div className="col">
                                    <img src={icon3}/>
                                    <h6>24/7 Support</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="image">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <img src={banarr} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                    <img src={banar1} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                    <img src={banarr} className="d-block w-100" alt="..."/>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="about">
            <div className="container">
                <div className="row">
                <div className='col-12 col-md-6'>
                    <div className="image">
                        <img src={about} />
                    </div>
                    <img  className="outerimg" src={banarr} />
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className="text">
                            <h3>About Us</h3>
                            <h1>We speak the good food language</h1>
                            <p>Living first us creepeth she'd earth second be sixth hath likeness greater image said sixth was without male place fowl evening an grass form living fish and rule lesser for blessed can't saw third one signs moving stars light divided was two you him appear midst cattle for they are gathering.</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        <section className="reserv ares">
            <div className="content">
                <p>Some Trendy And Popular Courses Offerd</p>
                <h2>Under replenish give saying thing</h2>
                <button>Reservation</button>
            </div>
        </section>
        </div>
    )
}
export default About