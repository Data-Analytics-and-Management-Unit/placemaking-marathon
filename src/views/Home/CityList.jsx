import {useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CityCardGrid from './CityCardGrid';


import SearchIcon from '../../img/search_icon.svg';

function CityList(props) {
    const [alignment, setAlignment] = useState('grid');
    const [searchInput, setSearchInput] = useState(undefined)

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <div className="CityList">
            {/* <div className="container">
                <h1 className="text-center">How are <span className="highlight">cities</span> contributing to placemaking?</h1>
                <div className="control-container">
                    <div className="row">
                        <div className="col-md-5">
                            <ToggleButtonGroup
                                color="primary"
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                >
                                <ToggleButton value="grid">Grid View</ToggleButton>
                                <ToggleButton value="map">Map View</ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                        <div className="col-md-12">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                    <img src={SearchIcon} alt="" />
                                </span>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Search for your city or project" 
                                    aria-label="" 
                                    aria-describedby="basic-addon1"
                                    onChange={(e) => setSearchInput(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <CityCardGrid searchInput={searchInput} cityData={props.cityData}/>
        </div>
    )
}

export default CityList;
