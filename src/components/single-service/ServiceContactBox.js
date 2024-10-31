import React from 'react';

export default class ServiceContactBox extends React.Component {
    render(){
        return (
            <>
                <div className="services-details__sidebar-single services-details-contact-box">
                    <div className="title">
                        <h2>Need Any Help</h2>
                    </div>
                    <p>Ut enim ad minim veniam, nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor        
                        reprehenderit in voluptate velit esse </p>
                    <div className="number">
                        <a href="tel:123456789"><span className="icon-phone-call"></span>666-555-999-00</a>
                    </div>
                </div>
            </>
        )
    }
}