import React from 'react';

export default class PortfolioNewsletter extends React.Component {
    render(){
        return (
            <>
                <div className="protfolio-details__sidebar-single protfolio-details-newsletter">
                    <div className="title">
                        <h2>Newsletter</h2>
                    </div>

                    <div className="newsletter-box">
                        <form className="newsletter-form black_ver" action="#">
                            <input type="email" name="email" placeholder="Email Address" />
                            <button className="thm-btn" data-text="Subscirbe +" type="submit">Subscirbe +</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}