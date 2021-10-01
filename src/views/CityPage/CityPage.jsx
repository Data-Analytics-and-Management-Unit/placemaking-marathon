import { Timeline } from 'react-twitter-widgets';

import './CityPage.scss';

function CityPageHero() {
    return (
        <div className="CityPageHero">
            <div className="image-panel-container">
                <div id="custCarousel" className="carousel slide" data-ride="carousel" align="center">
                    <div className="carousel-inner">
                        <div className="carousel-item active"> 
                            <img src="/img/city/city_compare.jpg" alt="Hills"/> 
                        </div>
                        <div className="carousel-item"> 
                            <img src="https://i.imgur.com/Rpxx6wU.jpg" alt="Hills"/> 
                        </div>
                        <div className="carousel-item"> 
                            <img src="https://i.imgur.com/83fandJ.jpg" alt="Hills"/> 
                        </div>
                        <div className="carousel-item"> 
                            <img src="https://i.imgur.com/JiQ9Ppv.jpg" alt="Hills"/> 
                        </div>
                    </div> 
                    <a className="carousel-control-prev" href="#custCarousel" data-slide="prev"> <span className="carousel-control-prev-icon"></span> </a> <a className="carousel-control-next" href="#custCarousel" data-slide="next"> <span className="carousel-control-next-icon"></span> </a>
                    <ol className="carousel-indicators list-inline">
                        <li className="list-inline-item active"> 
                            <a id="carousel-selector-0" className="selected" data-slide-to="0" data-target="#custCarousel"> 
                                <img src="https://i.imgur.com/weXVL8M.jpg" className="img-fluid"/> 
                            </a> 
                        </li>
                        <li className="list-inline-item"> 
                            <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel"> 
                                <img src="https://i.imgur.com/Rpxx6wU.jpg" className="img-fluid"/> 
                            </a> 
                        </li>
                        <li className="list-inline-item"> 
                            <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel"> 
                                <img src="https://i.imgur.com/83fandJ.jpg" className="img-fluid"/> 
                            </a> 
                        </li>
                        <li className="list-inline-item"> 
                            <a id="carousel-selector-2" data-slide-to="3" data-target="#custCarousel"> 
                                <img src="https://i.imgur.com/JiQ9Ppv.jpg" className="img-fluid"/> 
                            </a> 
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

function CityPage() {
    return (
        <div className="CityPage">
            <CityPageHero/>
            <div className="project-container">
                <div className="container">
                    <h1>Park For Specially Abled</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a velit 
scelerisque nunc posuere faucibus non sit amet eros. In vitae nulla nec ligula 
facilisis luctus non id nunc. In eleifend ante ut dolor viverra, pretium pretium 
justo egestas. Ut nec lectus accumsan nunc malesuada dapibus. Morbi 
maximus nisi id mauris blandit convallis. Vivamus venenatis sit amet leo vel 
semper. Proin eu iaculis magna. Fusce in auctor lorem. Aliquam in diam magna. 
Suspendisse ultrices enim sed tellus consectetur ultrices. Ut luctus vestibulum 
posuere. Pellentesque tristique pretium efficitur.
</p><p>
Duis eleifend leo et dolor luctus sodales. Nulla auctor luctus volutpat. 
Suspendisse ornare sit amet felis id laoreet. Nam odio risus, faucibus a vehicula 
non, rutrum et ipsum. Vivamus a erat at magna tincidunt accumsan a eget 
nunc. Cras volutpat quam non tellus hendrerit egestas. Donec efficitur 
consectetur laoreet. Donec a nisl in turpis ultricies venenatis sed eget nisl.</p>
                </div>
                <div className="section-container">
                    <div className="container">
                        <h2>Meet the team behind the initiative</h2>
                        <div className="row team-logo">
                            <div className="col-md-6">
                                <img src="/img/city/wri.png" alt="" />
                            </div>
                            <div className="col-md-6">
                                <img src="/img/city/itdp.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <img className="team-img" src="/img/city/team_img.jpg" alt="" />
                    <div className="team-name-container">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <span className="member-name">Harsh Kakkar</span>
                                </div>
                                <div className="col-md-4">
                                    <span className="member-name">Harsh Kakkar</span>
                                </div>
                                <div className="col-md-4">
                                    <span className="member-name">Harsh Kakkar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="section-container">
                    <div className="container">
                        <h2>Media Coverage</h2>
                        <div className="row">
                            <div className="col-md-6">
                                div.
                            </div>
                            <div className="col-md-6">
                                <img src="/img/city/itdp.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="tweet-container">
                    <h2>Citizen Feedback</h2>
                    <div className="tweet-timeline">
                        <Timeline dataSource={{ sourceType: "profile", screenName: "AmritMahotsav" }} />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CityPage;
