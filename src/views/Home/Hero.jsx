import {renderURL} from '../../Config';

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
    
                    <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={renderURL("/img/slideshow/1.jpg")} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={renderURL("/img/slideshow/2.jpg")} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={renderURL("/img/slideshow/3.jpg")} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={renderURL("/img/slideshow/4.jpg")} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={renderURL("/img/slideshow/5.jpg")} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={renderURL("/img/slideshow/6.jpg")} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
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
                        <div className="col-md-7 about-text">
                            <p>Placemaking marathon is an initiative under the Smart Cities Mission of the Ministry of Housing and Urban Affairs (MoHUA) that encourages cities to reimagine their public spaces and transform them within 75 hours. Following the mantra of 'test-learn-scale', the 3 key principles that are considered while designing the projects are:</p>
                            <ul>
                                <li>Light, quick, and cheap transformation– while keeping citizens at the heart</li>
                                <li>Build for the citizens and by the citizens to co-create a brave and bigger future together</li>
                                <li>Anchor with events that educate citizens and celebrate the public spaces</li>
                            </ul>
                            <p>The first edition of placemaking marathon was organized from 27th September to 3rd October 2021 and the second edition during January to March 2022. Celebrating the ethos of Azadi Ka Amrit Mahotsav (AKAM), 43 cities worked tirelessly for 75 hours to transform 85+ public spaces.  These projects ranged from improvements of streets for better traffic circulation, pedestrian movement, vending, and recreation; up-gradation of parks including pocket parks along streets; improvement  of outdoor infrastructure in anganwadis, public health centres, and community centres; restoration of water bodies, and many more.</p>
                        </div>
                        <div className="col-md-3 facts-container">
                            <div className="row">
                                <div className="col-md-2">
                                    <img className="facts-img" src={CitiesTransformed} alt="" />
                                </div>
                                <div className="col-md-10 fact-text">
                                    <h5>85+ public spaces transformed</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <img className="facts-img" src={AreaTransformed} alt="" />
                                </div>
                                <div className="col-md-10 fact-text">
                                    <h5>1,50,000+ sq.m. reimagined</h5>
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
