import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

// function CardProjectName(props) {

//     function renderTags(tags) {
//         return ''
//         let res = []
//         tags.forEach((tag, idx) => {
//             res.push(
//                 <span key={idx} className="tag">{tag}</span>
//             )
//         })
//         return res
//     }
//     return(
//         <div className="CardProjectName">
//             <div className="tag-container">
//                 {renderTags(props.projectData.tags)}
//             </div>
//             <Link to={"/p/" + props.cityName + '/' + props.projectId}>
//                 <h4>{props.projectData.name}</h4>
//             </Link>
//         </div>
//     )
// }

function CityCard(props) {

    /* function renderProjectDetails(projects, cityName) {
        let res = []
        projects.forEach((project, idx) => {
            if(project.description.q1 === '') {
                return
            }
            res.push(
                <CardProjectName key={idx} projectData={project} cityName={cityName} projectId={idx}/>
            )
        })
        return res
    } */

    return(
        <div className="CityCard">
            <div className="city-image-container">
                <img src={"/img/homepage/" + props.cityName + "_" + props.projectData.code + ".jpg"} alt="" />
            </div>
            <div className="city-name-project-container">
                <div className="fit-box city-name">
                    {props.cityName.toUpperCase()}
                </div>
                <div className="fit-box project-name">
                    {props.projectData.name}
                </div>
            </div>
            
            {/* {renderProjectDetails(props.cityData.projects, props.cityName)} */}
        </div>
    )
}

function CityCardGrid(props) {

    console.log(props)
    const [cityData, setCityData] = useState({})
    const [category, setCategory] = useState('All')
    const [city, setCity] = useState('All')

    useEffect(() => {
        if(props.searchInput && props.searchInput.length > 2) {
            filterSearchResult(props.cityData, props.searchInput)
        } else {
            setCityData(props.cityData)
        }
    }, [props.searchInput, props.cityData])

    function isSearchStringInTags(tags, searchString) {
        for(let i=0; i<tags.length; i++) {
            if(tags[i].search(new RegExp(searchString, 'i')) > -1) {
                return true
            }
        }
        return false
    }

    function isSearchStringInProjects(projects, searchString) {
        for(let i=0; i<projects.length; i++) {
            if(
                projects[i].name.search(new RegExp(searchString, 'i')) > -1 ||
                isSearchStringInTags(projects[i].tags, searchString)
            ) {
                return true
            }
        }
        return false
    }

    function filterSearchResult(completeData, searchString) {
        let results = {}
        Object.keys(completeData).forEach((cityName) => {
            if(
                cityName.search(new RegExp(searchString, 'i')) > -1 ||
                isSearchStringInProjects(completeData[cityName].projects, searchString)
            ) {
                results[cityName] = completeData[cityName]
            }
        })
        setCityData(results)
    }

    function checkCategories(proj) {
        if(category === 'All' || proj.tags.includes(category)) {
            return true
        }
        return false
    }

    function isCityInFilter(c) {
        if(city === 'All' || c === city) {
            return true
        }
        return false
    }

    function renderCityCards(data) {
        let res = []
        Object.keys(data).forEach((cityName, idx) => {
            if(!isCityInFilter(cityName)) {
                return
            }
            data[cityName].projects.forEach((project, pIdx) => {
                if(checkCategories(project)) {
                    res.push(
                        <div key={10*idx + pIdx} className="col-md-3">
                            <Link to={"/p/" + cityName + "/" + pIdx}>
                                <CityCard key={idx} projectData={project} cityName={cityName}/>
                            </Link>
                        </div>
                    )
                }
            })
        })

        return res
    }

    function renderCategories() {
        let tagsObj = {}
        Object.keys(cityData).forEach((cityName) => {
            cityData[cityName].projects.forEach((p) => {
                if(p.tags) {
                    p.tags.forEach((t) => {
                        tagsObj[t] = true
                    })
                }
            })
        })

        let res = [<option value="All">All</option>]
        Object.keys(tagsObj).forEach((t, idx) => {
            res.push(
                <option key={idx} value={t}>{t}</option>
            )
        })
        return res
    }

    function renderCities() {
        let res = [<option value="All">All</option>]
        Object.keys(cityData).forEach((cityName, idx) => {
            res.push(
                <option key={idx} value={cityName}>{cityName}</option>
            )
        })
        return res
    }

    return(
        <div className="CityCardGrid">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="filter-container">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Category</label>
                                <select id="exampleInputEmail1" className="form-select" aria-label="Default select example" onChange={e => {setCategory(e.target.value)}}>
                                    {renderCategories()}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">City</label>
                                <select id="exampleInputEmail1" className="form-select" aria-label="Default select example" onChange={e => {setCity(e.target.value)}}>
                                    {renderCities()}
                                </select>
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            {renderCityCards(cityData)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CityCardGrid;
