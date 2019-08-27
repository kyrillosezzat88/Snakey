import React from 'react'
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
const Home = () => {
   
    return(
        <div>
            <section className="Home">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="text">
                            <h1>Foods the most precious things</h1>
                            <button>Book Now</button>
                            <button><img src={play}/>Watch Video</button>
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
                                    <img src={banar1} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                    <img src={banarr} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                    <img src={banar1} className="d-block w-100" alt="..."/>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
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
        <section className="feature-food">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="text">
                        <h3>Featured Food</h3>
                        <h1>Fresh taste and <br/> great price</h1>
                    </div>
                </div>
                    <div className="col-12 owl-carousel owl-theme">
                        <div className="item">
                            <div className="innercard">
                                    <img src={banar1}  alt="..."/>
                                    <div className="title">
                                        <h2>Pizza</h2>
                                        <p>whales and darkes</p>
                                        <span>35$</span>
                                    </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="innercard">
                                    <img src={banar1} alt="..."/>
                                    <div className="title">
                                        <h2>Pizza</h2>
                                        <p>whales and darkes</p>
                                        <span>35$</span>
                                    </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="innercard">
                                    <img src={banar1} alt="..."/>
                                    <div className="title">
                                        <h2>Pizza</h2>
                                        <p>whales and darkes</p>
                                        <span>35$</span>
                                    </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="innercard">
                                    <img src={banar1} alt="..."/>
                                    <div className="title">
                                        <h2>Pizza</h2>
                                        <p>whales and darkes</p>
                                        <span>35$</span>
                                    </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="innercard">
                                    <img src={banar1} alt="..."/>
                                    <div className="title">
                                        <h2>Pizza</h2>
                                        <p>whales and darkes</p>
                                        <span>35$</span>
                                    </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="innercard">
                                    <img src={banar1}  alt="..."/>
                                    <div className="title">
                                        <h2>Pizza</h2>
                                        <p>whales and darkes</p>
                                        <span>35$</span>
                                    </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="innercard">
                                    <img src={banar1} alt="..."/>
                                    <div className="title">
                                        <h2>Pizza</h2>
                                        <p>whales and darkes</p>
                                        <span>35$</span>
                                    </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="innercard">
                                    <img src={banar1}  alt="..."/>
                                    <div className="title">
                                        <h2>Pizza</h2>
                                        <p>whales and darkes</p>
                                        <span>35$</span>
                                    </div>
                            </div>
                        </div>
                        
                    </div>
                
            </div>
        </div>
        </section>
        <section className="offer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <img className="card-img rounded-0"  src={pizza}/>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="text">
                            <h3>Italian Pizza Offer</h3>
                            <h2>50% OFF</h2>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="menu">
            <div className="container">
                <div className="text">
                    <h3>Food Menu</h3>
                    <h1>Delicious food</h1>
                </div>
              <div className="row">
                  <div className="col-12 col-md-6">
                      <div className="content">
                          <img src={food} />
                          <div className="info">
                          <h4>Roasted Marrow</h4>
                          <span>35$</span><br></br>
                          <p>RWhales and darkness moving form cattle</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-md-6">
                      <div className="content">
                          <img src={food} />
                          <div className="info">
                          <h4>Roasted Marrow</h4>
                          <span>35$</span><br></br>
                          <p>RWhales and darkness moving form cattle</p>
                          </div>
                      </div>
                  </div>

                  <div className="col-12 col-md-6">
                      <div className="content">
                          <img src={food} />
                          <div className="info">
                          <h4>Roasted Marrow</h4>
                          <span>35$</span><br></br>
                          <p>RWhales and darkness moving form cattle</p>
                          </div>
                      </div>
                  </div>

                  <div className="col-12 col-md-6">
                      <div className="content">
                          <img src={food} />
                          <div className="info">
                          <h4>Roasted Marrow</h4>
                          <span>35$</span><br></br>
                          <p>RWhales and darkness moving form cattle</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-md-6">
                      <div className="content">
                          <img src={food} />
                          <div className="info">
                          <h4>Roasted Marrow</h4>
                          <span>35$</span><br></br>
                          <p>RWhales and darkness moving form cattle</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-md-6">
                      <div className="content">
                          <img src={food} />
                          <div className="info">
                          <h4>Roasted Marrow</h4>
                          <span>35$</span><br></br>
                          <p>RWhales and darkness moving form cattle</p>
                          </div>
                      </div>
                  </div>

              </div>
            </div>
        </section>
        <section className="reserv">
            <div className="content">
                <p>Some Trendy And Popular Courses Offerd</p>
                <h2>Under replenish give saying thing</h2>
                <button>Reservation</button>
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
        <section className="reser">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="text">
                            <h3>Reservation</h3>
                            <h1>Get experience from sneaky</h1>
                            <p>Him given and midst tree form seas she'd saw give evening one every make hath moveth you're appear female heaven had signs own days saw they're have let midst given him given and midst tree. Form seas she'd saw give evening</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <div className="data">
                            <form>
                                <h4>Book A Table</h4>
                                <input type="text" placeholder="Your Name" className="form-control"/><br/>
                                <input type="text" placeholder="Email Address" className="form-control" /><br/>
                                <input type="text" placeholder="Phone Number" className="form-control"/><br/>
                                <input type="text" placeholder="Data" className="form-control"/><br/>
                                <button>Make Reservation</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
    )
}
export default Home