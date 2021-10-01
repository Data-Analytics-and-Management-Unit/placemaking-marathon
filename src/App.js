import React, {Suspense} from 'react';
import {useTranslation} from "react-i18next";
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

function HeaderComponent()
{
    const {t} = useTranslation('common');
    return <h1>{t('welcome.title')}</h1>
}

function App() {
	return (
		<Suspense fallback="loading">
			<div className="App">
				<Router>
					<Switch>
						<Route exact path="/">
							<Home/>
						</Route>
						<Route path="/city">
							<CityPage/>
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
