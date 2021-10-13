import Hero from './Hero';
import CityList from './CityList';

import './Home.scss';

function Home(props) {
    return (
        <>
            <Hero/>
            <CityList cityData={props.cityData}/>
        </>
    )
}

export default Home;
