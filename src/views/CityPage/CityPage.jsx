import {useLayoutEffect, useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import {renderURL, processCityName} from '../../Config';

import LocationIcon from '../../img/location_icon.svg';
import RupeeIcon from '../../img/rupee_icon.svg';
import HomeIcon from '../../img/home_icon.svg';

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
                    <img src={renderURL("/img/city/" + props.cityName + "_P" + imgIdx + "_Photos/Before.jpg")} className="d-block-inline w-100" alt="..."/>
                </div>
            </div>,
            <div className="carousel-item" data-bs-interval="6000">
                <div className="before-after-container">
                    {/* <div className="time-tag">
                        AFTER
                    </div> */}
                    <img src={renderURL("/img/city/" + props.cityName + "_P" + imgIdx + "_Photos/After.jpg")} className="d-block-inline w-100" alt="..."/>
                </div>
            </div>
        ]

        for(let idx=0; idx < props.noGImages; idx++) {
            resButton.push(
                <button type="button" data-bs-target="#carouselCityProfile" data-bs-slide-to={idx + 2} className="" aria-current="false" aria-label="Slide 1"></button>
            )
            resDiv.push(
                <div className="carousel-item" data-bs-interval="6000">
                    <img src={renderURL("/img/city/" + props.cityName + "_P" + imgIdx + "_Photos/Gallery_" + (idx+1) + ".jpg")} className="d-block-inline w-100" alt="..."/>
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
        //             <img src={renderURL("/img/city/" + props.cityName + "_P" + imgIdx + "_Photos/Before.jpg")} className="d-block-inline w-50" alt="..."/>
        //             <img src={renderURL("/img/city/" + props.cityName + "_P" + imgIdx + "_Photos/After.jpg")} className="d-block-inline w-100" alt="..."/>
        //         </div>
        //     )
        // })

        return ([
            resButton, resDiv
        ])
    }

    return (
        <div className="CityPageHero">
            <Link to="/">
                <img className="city-akam-logo" src={renderURL("/logos/" + props.cityName + "_AKAM_PM_Col.svg")} alt="" />
            </Link>
            <Link className="home-icon" to="/">
                <img src={HomeIcon} alt="" />
            </Link>
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
        if(a && a !== undefined && a !== '') {
            let res = []
            a.forEach((para, idx) => {
                if(para !== '') {
                    res.push(
                        <li>{para}</li>
                    )
                }
            })
            if(res.length === 0) {
                return
            }
            return (
                <>
                    <div className="row ques-row">
                        <div className="col-md-4">
                            <h3>{q}</h3>
                        </div>
                        <div className="col-md-8">
                            <ul>
                                {res}
                            </ul>
                        </div>
                    </div>
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
                    "What were the key outcomes of the proposed interventions?",
                    desc.q8
                )}
                {renderDescQuestionAnswer(
                    "How did the team execute this in 75 hours?",
                    desc.q4
                )}
                {renderDescQuestionAnswer(
                    "If there were any challenges, how were they mitigated?",
                    desc.q5
                )}
                {renderDescQuestionAnswer(
                    "Are there any plans to scale up these interventions across the city? Please specify how.",
                    desc.q6
                )}
                {renderDescQuestionAnswer(
                    "Which organizations/ departments did you seek support from and what were their roles?",
                    desc.q7
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
        let divSize = '3'
        let imgList = []
        let rem = noSImages % 4

        if(noSImages == 0) {
            return
        }
        // if(noSImages < 4) {
        //     divSize = (12 / noSImages).toString()
        // }
        /* for(let i=0; i<noSImages; i++) {
            if(rem !== 0 && i < rem) {
                divSize = (12 / rem).toString()
            } else {
                divSize = '3'
            }
            res.push(
                <div key={i} className={"org-logo-container col-md-" + divSize}>
                    <img src={renderURL("/img/city/" + cityName + "_" + projectCode + "_SH/SH_" + (i+1) + ".jpg")} alt="" />
                </div>
            )
        } */

        for(let i=0; i<noSImages; i++) {
            imgList.push(
                <img src={renderURL("/img/city/" + cityName + "_" + projectCode + "_SH/SH_" + (i+1) + ".jpg")} className="w-10" alt="" />
            )
            if((i+1) % 5 == 0) {
                res.push(
                    <div key={i} class={i < 5 ? "carousel-item active" : "carousel-item"}>
                        <div className="stakeholder-logo">
                            {imgList}
                        </div>
                    </div>
                )
                imgList = []
            }
        }
        if(imgList.length > 0) {
            res.push(
                <div key={'last'} class={res.length === 0 ? "carousel-item active" : "carousel-item"}>
                    <div className="stakeholder-logo">
                        {imgList}
                    </div>
                </div>
            )
        }

        return (
            <div id="carousalStakeholderLogos" className="carousel slide carousel-dark" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {res}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousalStakeholderLogos" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousalStakeholderLogos" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }

    function renderTeamNames(names) {
        let res = []
        names.forEach((n, idx) => {
            res.push(
                <div key={idx} className="col-md-6">
                    <h4>{n.name}</h4>
                </div>
            )
        })
        
        if(res.length > 0) {
            return(
                <div className="team-name-container">
                    <div className="container">
                        <div className="row">
                            {res}
                        </div>
                    </div>
                </div>
            )
        }
    }

    function renderFeedback(cityName, projectData) {
        if(projectData.feedbackPresent) {
            return(
                <div className="section-container">
                    <div className="container">
                        <h2>Citizen Views</h2>
                        <div className="feedback-container">
                            <img src={renderURL("/img/feedback/" + cityName + "_" + projectData.code + ".jpg")} alt="" />
                        </div>
                    </div>
                </div>
            )
        }
    }

    function renderTeamImage(cityName, projectData) {
        if(projectData.teamImagePresent) {
            return(
                <img className="team-img" src={renderURL("/img/city/" + cityName + "_" + projectData.code + "_Photos/Team.jpg")} alt="" />
            )
        }
    }

    console.log(projectData)

    if(Object.keys(projectData).length === 0) {
        return(null)
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
                                {projectData.location + (projectData.location !== '' ? ', ' : '') + processCityName(cityName, 'display')}
                            </div>
                        </div>
                        <div className="info">
                            <div className="icon-container">
                                <img src={RupeeIcon} alt="" />
                            </div>
                            <div className="value-container">
                                {projectData.cost ? projectData.cost + ' Lakh' : 'NA'}
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
                
                
                {renderFeedback(cityName, projectData)}
                
                
                <div className="section-container">
                    <div className="container">
                        <h2>Meet the team behind the initiative</h2>
                        <div className="row team-logo">
                            {renderTeamLogo(projectData.noSImages, cityName, projectData.code)}
                        </div>
                    </div>
                    {renderTeamImage(cityName, projectData)}
                    {renderTeamNames(projectData.team.members.concat(projectData.team.orgs))}
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
