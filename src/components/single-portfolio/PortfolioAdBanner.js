import React from 'react';

export default class PortfolioAdBanner extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <div className="protfolio-details__sidebar-single protfolio-details-ads-banner">
                    <div className="protfolio-details-ads-banner-img">
                        <img src={publicUrl+"assets/images/project/protfolio-details-img5.jpg"} alt="" />
                    </div>
                    <div className="protfolio-details-ads-banner-img2" style={{backgroundImage: 'url('+publicUrl+'assets/images/project/protfolio-details-img6.jpg)'}}></div>
                </div>
            </>
        )
    }
}