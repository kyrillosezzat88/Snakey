import React from 'react';
import play from '../img/home/play-icon.png'
import banar1 from '../img/banner/hero-banner1.png'
import banarr from '../img/banner/hero-banner2.png'
import icon from '../img/banner/fas-service-icon.png'
import icon2 from '../img/banner/fresh-food-icon.png'
import icon3 from '../img/banner/support-icon.png'
import about from '../img/home/about-img1.png'
import featured from '../img/home/featured1.png'
import pizza from '../img/home/offer-img.png'
import food from '../img/home/food1.png'
import chef from '../img/home/chef-2.png'
const Chef = ()=> {
    return(
        <div>
        <section className="chefP">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="text">
                            <h1>Talent Chefs</h1>
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
                    <div className="col-12 col-md-6">
                        <div className="image">
                            <img src={chef} width="100%" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="chef">
            <div className="container">
                <div className="text">
                    <h3>Our Chef</h3>
                    <h1>Talent & experience <br/> member</h1>
                </div>
                <div className="row">
                    <div className="col-md-4 col-12">
                        <div className="chef1">
                            <div className="text">
                                <h2>Daniesl Laran</h2>
                                <p>Executive Chef</p>
                            </div>
                            <div className="overlay">
                                <div className="social">
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="chef1">
                            <div className="text">
                                <h2>Daniesl Laran</h2>
                                <p>Executive Chef</p>
                            </div>
                            <div className="overlay">
                                <div className="social">
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="chef1">
                            <div className="text">
                                <h2>Daniesl Laran</h2>
                                <p>Executive Chef</p>
                            </div>
                            <div className="overlay">
                                <div className="social">
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="reserv reschef">
            <div className="content">
                <p>Some Trendy And Popular Courses Offerd</p>
                <h2>Under replenish give saying thing</h2>
                <button>Reservation</button>
            </div>
        </section>

        </div>
    )
}
export default Chef;