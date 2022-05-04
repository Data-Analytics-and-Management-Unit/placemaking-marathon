import FBIcon from '../../img/social/facebook.png';
import TwitterIcon from '../../img/social/twitter.png';
// import LinkedInIcon from '../../img/social/linkedin.png';
// import InstaIcon from '../../img/social/insta.png';

import './Footer.scss';

function Footer() {
    return (
        <footer className="Footer">
            <div className="social-container">
                <a href="https://www.facebook.com/smartcitiesmohua/" target="_blank" rel="noopener noreferrer">
                    <img src={FBIcon} alt="" />
                </a>
                <a href="https://twitter.com/SmartCities_HUA" target="_blank" rel="noopener noreferrer">
                    <img src={TwitterIcon} alt="" />
                </a>
                {/* <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInIcon} alt="" />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={InstaIcon} alt="" />
                </a> */}
            </div>
            <span>© Ministry of Housing and Urban Affairs. Write to us at <a href="mailto:smartcity-mohua@gov.in">smartcity-mohua@gov.in</a></span>
        </footer>
    )
}

export default Footer;
