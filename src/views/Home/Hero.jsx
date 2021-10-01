import SCMLogo from '../../img/scm_logo.svg';
import AkamLogo from '../../img/akam_logo.svg';
import MoHUALogo from '../../img/mohua_logo.svg';
import AatamnirbharLogo from '../../img/aatamnirbhar_logo.svg';
import SwachhLogo from '../../img/swachh_bharat_logo.svg';
import PlacemakingLogo from '../../img/placemaking_logo.svg';

function Hero() {
    return(
        <div className="Hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <img className="org-logo org-scm" src={SCMLogo} alt="" />
                    </div>
                    <div className="col-md-2">
                        <img className="org-logo org-akam" src={AkamLogo} alt="" />
                    </div>
                    <div className="col-md-4">
                        <img className="org-logo org-mohua" src={MoHUALogo} alt="" />
                    </div>
                    <div className="col-md-2">
                        <img className="org-logo org-aatam" src={AatamnirbharLogo} alt="" />
                    </div>
                    <div className="col-md-2">
                        <img className="org-logo org-swachh" src={SwachhLogo} alt="" />
                    </div>
                </div>
                <div className="placemaking-logo-container">
                    <img src={PlacemakingLogo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero;
