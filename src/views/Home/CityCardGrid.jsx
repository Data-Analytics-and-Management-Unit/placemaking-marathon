import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Data from './data.json';

function CardProjectName(props) {

    function renderTags(tags) {
        let res = []
        tags.forEach((tag, idx) => {
            res.push(
                <span key={idx} className="tag">{tag}</span>
            )
        })
        return res
    }
    return(
        <div className="CardProjectName">
            <div className="tag-container">
                {renderTags(props.projectData.tags)}
            </div>
            <Link to="/city">
                <h4>{props.projectData.name}</h4>
            </Link>
        </div>
    )
}

function CityCard(props) {

    function renderProjectDetails(projects) {
        let res = []
        projects.forEach((project, idx) => {
            res.push(
                <CardProjectName key={idx} projectData={project}/>
            )
        })
        return res
    }

    return(
        <div className="CityCard">
            <div className="city-name">
                {props.cityName.toUpperCase()}
            </div>
            <div className="city-image-container">
                <img src={props.cityData.img} alt="" />
            </div>
            {renderProjectDetails(props.cityData.projects)}
        </div>
    )
}

function CityCardGrid(props) {

    const [cityData, setCityData] = useState({})

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/upperwal/98773fc01a4f53cddfc07cb94c5f4ed0/raw/26e194d172125beaa54f5f148c698cf8455574cf/placemaking_data.json')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setCityData(res)
            })
    }, [])

    useEffect(() => {
        if(props.searchInput && props.searchInput.length > 2) {
            filterSearchResult(Data, props.searchInput)
        } else {
            setCityData(Data)
        }
    }, [props.searchInput])

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

    function renderCityCards(data) {
        let res = []
        Object.keys(data).forEach((cityName, idx) => {
            res.push(
                <div key={idx} className="col-md-3">
                    <CityCard key={idx} cityData={data[cityName]} cityName={cityName}/>
                </div>
            )
        })

        return res
    }

    return(
        <div className="CityCardGrid">
            <div className="container">
                <div className="row">
                    {renderCityCards(cityData)}
                </div>
            </div>
        </div>
    )
}

export default CityCardGrid;
