import React from 'react'
import icon from '../img/banner/fas-service-icon.png'
import icon2 from '../img/banner/fresh-food-icon.png'
import icon3 from '../img/banner/support-icon.png'
import banar1 from '../img/banner/hero-banner1.png'


import chef from '../img/home/chef-2.png'

const Contact = () => {
    return (
        <div>
             <section className="chefP">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="text">
                            <h1>Contact Us</h1>
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
                            <img src={banar1} width="100%" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <h3>Get in Touch</h3>
                        <form>
                            <textarea placeholder="Enter Message"></textarea>
                            <input type="text" placeholder="Enter Your name" />
                            <input type="text" placeholder="Enter Subject" />
                            <button>Send Message</button>
                        </form>
                    </div>
                    <div className="col-12 col-md-4  d-flex justify-content-center align-items-center flex-column">
                        <div className="info ">
                            <i className="fas fa-home"></i>
                            <div className="d-inline-block">
                            <h3>Buttonwood, California.</h3>
                            <p>Rosemead, CA 91770</p>
                            </div>
                        </div>
                        <div className="info ">
                        <i className="fas fa-mobile-alt"></i>
                            <div className="d-inline-block">
                            <h3>00 (440) 9865 562.</h3>
                            <p>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div className="info ">
                        <i className="far fa-envelope"></i>
                            <div className="d-inline-block">
                            <h3>support@sneaky.com.</h3>
                            <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Contact
