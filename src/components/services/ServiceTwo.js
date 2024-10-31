import React from 'react';
import {Link} from 'react-router-dom';

export default class ServiceTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="services-two-sec">
                    <div className="shape1 float-bob-y"><img src={publicUrl+"assets/images/shapes/services-v2-shape1.jpg"} alt="" /></div>
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sec-title__tagline">
                                <span className="left"></span>
                                <h6>Company Services</h6> <span className="right"></span>
                            </div>
                            <h2 className="sec-title__title">Our Company Best Services</h2>
                        </div>
                        <div className="row">
                            {/* Start Services Two Single */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-two__single">
                                    <div className="services-two__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/services/services-v2-img1.jpg"} alt="" />
                                        </div>
                                        <div className="icon-box">
                                            <Link to={process.env.PUBLIC_URL + `/general-contracting`}><span className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                    <div className="services-two__single-content">
                                        <h2><Link to={process.env.PUBLIC_URL + `/general-contracting`}>Heavy Equipment</Link></h2>
                                        <p>Ut enim ad minim veniam, quis nostrude ex exercitation ullamco laboris nisi ut
                                            aliquip ea commodo consequat. </p>
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/general-contracting`}>Read More <span className="icon-plus-sign"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Services Two Single */}

                            {/* Start Services Two Single */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-two__single">
                                    <div className="services-two__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/services/services-v2-img2.jpg"} alt="" />
                                        </div>
                                        <div className="icon-box">
                                            <Link to={process.env.PUBLIC_URL + `/general-contracting`}><span className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                    <div className="services-two__single-content">
                                        <h2><Link to={process.env.PUBLIC_URL + `/general-contracting`}>Delightful Building</Link></h2>
                                        <p>Ut enim ad minim veniam, quis nostrude ex exercitation ullamco laboris nisi ut
                                            aliquip ea commodo consequat. </p>
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/general-contracting`}>Read More <span className="icon-plus-sign"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Services Two Single */}

                            {/* Start Services Two Single */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-two__single">
                                    <div className="services-two__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/services/services-v2-img3.jpg"} alt="" />
                                        </div>
                                        <div className="icon-box">
                                            <Link to={process.env.PUBLIC_URL + `/general-contracting`}><span className="icon-right-arrow"></span></Link>
                                        </div>
                                    </div>
                                    <div className="services-two__single-content">
                                        <h2><Link to={process.env.PUBLIC_URL + `/general-contracting`}>Electrical Services</Link></h2>
                                        <p>Ut enim ad minim veniam, quis nostrude ex exercitation ullamco laboris nisi ut
                                            aliquip ea commodo consequat. </p>
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/general-contracting`}>Read More <span className="icon-plus-sign"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Services Two Single */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}