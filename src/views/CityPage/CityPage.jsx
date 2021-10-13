import {useLayoutEffect, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import { Timeline } from 'react-twitter-widgets';

import LocationIcon from '../../img/location_icon.svg';
import RupeeIcon from '../../img/rupee_icon.svg';
import ContactIcon from '../../img/contact_icon.svg';

import './CityPage.scss';

function CityPageHero(props) {

    function renderCarousel() {
        let resButton = [], resDiv = []
        let imgIdx = parseInt(props.projectIndex) + 1
        resButton = [
            <button type="button" data-bs-target="#carouselCityProfile" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 0"></button>,
            <button type="button" data-bs-target="#carouselCityProfile" data-bs-slide-to="1" className="" aria-current="false" aria-label="Slide 1"></button>
        ]
        resDiv = [
            <div className="carousel-item active" data-bs-interval="4000">
                <div className="before-after-container">
                    {/* <div className="time-tag">
                        BEFORE
                    </div> */}
                    <img src={"/img/city/" + props.cityName + "_P" + imgIdx + "_Photos/Before.jpg"} className="d-block-inline w-100" alt="..."/>
                </div>
            </div>,
            <div className="carousel-item" data-bs-interval="6000">
                <div className="before-after-container">
                    {/* <div className="time-tag">
                        AFTER
                    </div> */}
                    <img src={"/img/city/" + props.cityName + "_P" + imgIdx + "_Photos/After.jpg"} className="d-block-inline w-100" alt="..."/>
                </div>
            </div>
        ]

        for(let idx=0; idx < props.noGImages; idx++) {
            resButton.push(
                <button type="button" data-bs-target="#carouselCityProfile" data-bs-slide-to={idx + 2} className="" aria-current="false" aria-label="Slide 1"></button>
            )
            resDiv.push(
                <div className="carousel-item" data-bs-interval="6000">
                    <img src={"/img/city/" + props.cityName + "_P" + imgIdx + "_Photos/Gallery_" + (idx+1) + ".jpg"} className="d-block-inline w-100" alt="..."/>
                </div>
            )
        }
        // props.images.forEach((i, idx) => {
        //     resButton.push(
        //         <button key={idx} type="button" data-bs-target="#carouselCityProfile" data-bs-slide-to={idx} className={idx === 0 ? "active": ""} aria-current={idx === 0 ? "true": ""} aria-label={"Slide " + (idx+1)}></button>
        //     )
        //     let imgIdx = parseInt(props.projectIndex) + 1
        //     resDiv.push(
        //         <div key={idx} className={idx === 0 ? "carousel-item active": "carousel-item"}>
        //             <img src={"/img/city/" + props.cityName + "_P" + imgIdx + "_Photos/Before.jpg"} className="d-block-inline w-50" alt="..."/>
        //             <img src={"/img/city/" + props.cityName + "_P" + imgIdx + "_Photos/After.jpg"} className="d-block-inline w-100" alt="..."/>
        //         </div>
        //     )
        // })

        return ([
            resButton, resDiv
        ])
    }

    return (
        <div className="CityPageHero">
            <a href="/#">
                <img className="city-akam-logo" src={"/logos/" + props.cityName + "_AKAM_PM_Col.svg"} alt="" />
            </a>
            <div id="carouselCityProfile" className="carousel slide carousel-fade" data-bs-ride="carousel">
                {renderCarousel()}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselCityProfile" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselCityProfile" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

function CityPage(props) {
    
    const {cityName, projectIndex} = useParams();
    const [projectData, setProjectData] = useState({})

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    useEffect(() => {
        if(Object.keys(props.cityData).length !== 0) {
            setProjectData(props.cityData[cityName].projects[projectIndex])
        }
    }, [props.cityData])

    function renderDescQuestionAnswer(q, a) {
        if(a !== '') {
            return (
                <>
                    <h3>{q}</h3>
                    <p>{a}</p>
                </>
            )
        }
    }

    function renderDescription(desc) {
        return (
            <div className="description-qa">
                {renderDescQuestionAnswer(
                    "Why was this site selected for the placemaking marathon?",
                    desc.q1
                )}
                {renderDescQuestionAnswer(
                    "What were the key interventions undertaken in 75 hours of the placemaking marathon?",
                    desc.q3
                )}
                {renderDescQuestionAnswer(
                    "How did the team execute this in 75 hours?",
                    desc.q4
                )}
                {renderDescQuestionAnswer(
                    "What were the major challenges faced and how were they mitigated?",
                    desc.q5
                )}
                {renderDescQuestionAnswer(
                    "Are there any plans to scale up these interventions across the city?",
                    desc.q6
                )}
                {renderDescQuestionAnswer(
                    "Which organizations/departments did you seek support from and what were their roles?",
                    desc.q6
                )}
            </div>
        )
        // if(!desc) {
        //     return
        // }
        // let res = []
        // desc.forEach((d, idx) => {
        //     res.push(
        //         <p key={idx}>{d}</p>
        //     )
        // })

        // return res
    }

    function renderTeamLogo(noSImages, cityName, projectCode) {
        let res = []
        for(let i=0; i<noSImages; i++) {
            res.push(
                <div key={i} className="col-md-4">
                    <img src={"/img/city/" + cityName + "_" + projectCode + "_SH/SH_" + (i+1) + ".jpg"} alt="" />
                </div>
            )
        }

        return res
    }

    function renderTeamNames(names) {
        let res = []
        names.forEach((n, idx) => {
            res.push(
                <div key={idx} className="col-md-4">
                    <h4>{n.name}</h4>
                </div>
            )
        })

        return res
    }

    console.log(projectData)

    if(Object.keys(projectData).length === 0) {
        return(<h1></h1>)
    }
    return (
        <>
        <CityPageHero noGImages={projectData.noGImages} cityName={cityName} projectIndex={projectIndex}/>
        


        <div className="CityPage">
            
            <div className="project-container">
                <div className="container">
                    <h1>{projectData.name}</h1>
                    <div className="info-container">
                        <div className="info">
                            <div className="icon-container">
                                <img src={LocationIcon} alt="" />
                            </div>
                            <div className="value-container">
                                {projectData.location}
                            </div>
                        </div>
                        <div className="info">
                            <div className="icon-container">
                                <img src={RupeeIcon} alt="" />
                            </div>
                            <div className="value-container">
                                {projectData.cost} Lakh
                            </div>
                        </div>
                        {/* <div className="info">
                            <div className="icon-container">
                                <img src={ContactIcon} alt="" />
                            </div>
                            <div className="value-container">
                                40,000
                            </div>
                        </div> */}
                    </div>
                    {renderDescription(projectData.description)}
                </div>
                <div className="section-container">
                    <div className="container">
                        <h2>Meet the team behind the initiative</h2>
                        <div className="row team-logo">
                            {renderTeamLogo(projectData.noSImages, cityName, projectData.code)}
                        </div>
                    </div>
                    {() => {
                        if(projectData.team.teamImg) {
                            return <img className="team-img" src={projectData.team.teamImg} alt="" />
                        }
                    }}
                    <div className="team-name-container">
                        <div className="container">
                            <div className="row">
                                {renderTeamNames(projectData.team.members)}
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

                {/* <div className="tweet-container">
                    <h2>Citizen Feedback</h2>
                    <div className="tweet-timeline">
                        <Timeline dataSource={{ sourceType: "profile", screenName: "AmritMahotsav" }} />
                    </div>
                </div> */}
                
            </div>
        </div>
        </>
    )
}

export default CityPage;
