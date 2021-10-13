import 'bootstrap/dist/js/bootstrap.min.js';

import SCMLogo from '../../img/scm_logo.svg';
import AkamLogo from '../../img/akam_logo.svg';
import MoHUALogo from '../../img/mohua_logo.svg';
import AatamnirbharLogo from '../../img/aatamnirbhar_logo.svg';
import SwachhLogo from '../../img/swachh_bharat_logo.svg';
import PlacemakingLogo from '../../img/placemaking_logo.svg';
import CitiesTransformed from '../../img/cities_transformed.svg';
import AreaTransformed from '../../img/area_transformed.svg';
import TimeTransformed from '../../img/time_transformed.svg';

function Hero() {
    return(
        <div className="Hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <img className="org-logo org-scm" src={SCMLogo} alt="" />
                    </div>
                    <div className="col-md-2">
                        <img className="org-logo org-akam" src={AkamLogo} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img className="org-logo org-mohua" src={MoHUALogo} alt="" />
                    </div>
                    <div className="col-md-2">
                        <img className="org-logo org-aatam" src={AatamnirbharLogo} alt="" />
                    </div>
                    <div className="col-md-2">
                        <img className="org-logo org-swachh" src={SwachhLogo} alt="" />
                    </div>
                </div>
            </div>
            <div className="hero-container">
                <div className="slideshow">
    
                    <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="/img/slideshow/1.jpg" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="/img/slideshow/2.jpg" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="/img/slideshow/3.jpg" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="/img/slideshow/4.jpg" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="/img/slideshow/5.jpg" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="/img/slideshow/6.jpg" class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button> */}
                    </div>

                </div>
                <div className="placemaking-logo-container">
                    <img src={PlacemakingLogo} alt="" />
                </div>
            </div>
            <div className="about-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <h1>About</h1>
                        </div>
                        <div className="col-md-7">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="col-md-3 facts-container">
                            <div className="row">
                                <div className="col-md-2">
                                    <img className="facts-img" src={CitiesTransformed} alt="" />
                                </div>
                                <div className="col-md-10 fact-text">
                                    <h5>50+ Spaces transformed</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <img className="facts-img" src={AreaTransformed} alt="" />
                                </div>
                                <div className="col-md-10 fact-text">
                                    <h5>1,00,000+ sq.m. reimagined</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <img className="facts-img" src={TimeTransformed} alt="" />
                                </div>
                                <div className="col-md-10 fact-text">
                                    <h5>in 75 hours</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
