import React, {Suspense, useEffect, useState} from 'react';
import { renderURL } from './Config';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import CityPage from './views/CityPage/CityPage';
import FeedbackForm from './views/FeedbackForm/FeedbackForm';

import './App.scss';

// function HeaderComponent()
// {
//     const {t} = useTranslation('common');
//     return <h1>{t('welcome.title')}</h1>
// }

function App() {

	const [cityData, setCityData] = useState({})

	useEffect(() => {
        // fetch('https://gist.githubusercontent.com/upperwal/98773fc01a4f53cddfc07cb94c5f4ed0/raw/placemaking_data.json')
        fetch(renderURL('/data.json'))
            .then(res => res.json())
            .then(res => {
                setCityData(res)
            })
    }, [])

	return (
		<Suspense fallback="loading">
			<div className="App">
				<Router>
					<Switch>
						<Route exact path="/">
							<Home cityData={cityData}/>
						</Route>
						<Route path="/p/:cityName/:projectIndex">
							<CityPage cityData={cityData}/>
						</Route>
						<Route path="/feedback">
							<FeedbackForm/>
						</Route>
					</Switch>
				</Router>
				{/* <HeaderComponent/> */}		
				<Footer/>
			</div>
		</Suspense>
	);
}

export default App;
