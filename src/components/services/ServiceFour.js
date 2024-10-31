import React from 'react';
import {Link} from 'react-router-dom';

export default class ServiceFour extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="services-one-sec services-one-sec--services">
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sec-title__tagline">
                                <span className="left"></span>
                                <h6>Our Services</h6> <span className="right"></span>
                            </div>
                            <h2 className="sec-title__title">Our Professional Services</h2>
                        </div>

                        <div className="row">
                            {/* Start Services One Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="services-one__single">
                                    <div className="services-one__single-img">
                                        <img src={publicUrl+"assets/images/services/services-v1-img1.jpg"} alt="" />
                                    </div>

                                    <div className="services-one__single-content">
                                        <div className="services-one__single-content-title">
                                            <h2><Link to={process.env.PUBLIC_URL + `/general-contracting`}>House Extensions</Link></h2>
                                        </div>

                                        <div className="services-one__single-content-bottom">
                                            <p>Ut enim ad minim veniam, quis nostrude ex exercitation ullamco laboris nisi ut
                                                aliquip ea commodo consequat. </p>

                                            <div className="services-one__single-btn">
                                                <Link to={process.env.PUBLIC_URL + `/general-contracting`} className="thm-btn" data-text="Read More +">Read More +</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single */}

                            {/* Start Services One Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="services-one__single">
                                    <div className="services-one__single-img">
                                        <img src={publicUrl+"assets/images/services/services-v1-img2.jpg"} alt="" />
                                    </div>

                                    <div className="services-one__single-content">
                                        <div className="services-one__single-content-title">
                                            <h2><Link to={process.env.PUBLIC_URL + `/general-contracting`}>Exterior Design</Link></h2>
                                        </div>

                                        <div className="services-one__single-content-bottom">
                                            <p>Ut enim ad minim veniam, quis nostrude ex exercitation ullamco laboris nisi ut
                                                aliquip ea commodo consequat. </p>

                                            <div className="services-one__single-btn">
                                                <Link to={process.env.PUBLIC_URL + `/general-contracting`} className="thm-btn" data-text="Read More +">Read More +</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single */}

                            {/* Start Services One Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="services-one__single">
                                    <div className="services-one__single-img">
                                        <img src={publicUrl+"assets/images/services/services-v1-img3.jpg"} alt="" />
                                    </div>

                                    <div className="services-one__single-content">
                                        <div className="services-one__single-content-title">
                                            <h2><Link to={process.env.PUBLIC_URL + `/general-contracting`}>Electrical Services</Link></h2>
                                        </div>

                                        <div className="services-one__single-content-bottom">
                                            <p>Ut enim ad minim veniam, quis nostrude ex exercitation ullamco laboris nisi ut
                                                aliquip ea commodo consequat. </p>

                                            <div className="services-one__single-btn">
                                                <Link to={process.env.PUBLIC_URL + `/general-contracting`} className="thm-btn" data-text="Read More +">Read More +</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}