import React from 'react';
import {Link} from 'react-router-dom';

export default class ErrorContent extends React.Component {
    render(){
        return (
            <>
                <div className="error-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="error-page__wrapper text-center">
                                    <div className="error-page__content">
                                        <h2>404</h2>
                                        <h3>Opps! Page Not Found</h3>
                                        <p>Sorry, but the page you are looking for does not exist.</p>
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn" data-text="Go To Home +">Go To Home
                                                +</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}