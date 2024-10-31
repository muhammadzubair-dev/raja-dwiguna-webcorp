import React from 'react';
import {Link} from 'react-router-dom';

export default class ServiceThree extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="services-three">
                    <div className="shape1"><img src={publicUrl+"assets/images/shapes/services-v3-shape1.png"} alt="#" /></div>
                    <div className="shape2 rotate-me"><img src={publicUrl+"assets/images/update1.0/services-v3-shape2.png"} alt="#" /></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="services-three__top">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6>COMPANY SERVICES </h6> <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title">Our Company Best <br /> Services</h2>
                                    </div>
                                    <div className="text-box">
                                        <p>There are many variations of passages of Lorem Ipsum available, but <br /> the majority
                                            have suffered alteration in some form.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {/* Start Services One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="services-three__single active">
                                    <div className="services-three__single__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/services/services-v1-bg.jpg)'}}></div>
                                    <div className="services-three__single-icon">
                                        <span className="icon-crane"></span>
                                    </div>
                                    <h3><Link to={process.env.PUBLIC_URL + `/general-contracting`}>Coal Excavation</Link></h3>
                                    <p>Lorem ipsum is simply free text dolor amett consec adipisc.</p>
                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/general-contracting`}><span className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single */}

                            {/* Start Services One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="services-three__single">
                                    <div className="services-three__single__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/services/services-v1-bg.jpg)'}}></div>
                                    <div className="services-three__single-icon">
                                        <span className="icon-interior-design-1"></span>
                                    </div>
                                    <h3><Link to={process.env.PUBLIC_URL + `/general-contracting`}>House Planning</Link></h3>
                                    <p>Lorem ipsum is simply free text dolor amett consec adipisc.</p>
                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/general-contracting`}><span className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single */}

                            {/* Start Services One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="services-three__single">
                                    <div className="services-three__single__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/services/services-v1-bg.jpg)'}}></div>
                                    <div className="services-three__single-icon">
                                        <span className="icon-surgery"></span>
                                    </div>
                                    <h3><Link to={process.env.PUBLIC_URL + `/general-contracting`}>Mine Factory</Link></h3>
                                    <p>Lorem ipsum is simply free text dolor amett consec adipisc.</p>
                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/general-contracting`}><span className="icon-right-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Services One Single */}

                            {/* Start Services One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="services-three__single">
                                    <div className="services-three__single__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/services/services-v1-bg.jpg)'}}></div>
                                    <div className="services-three__single-icon">
                                        <span className="icon-painting"></span>
                                    </div>
                                    <h3><Link to={process.env.PUBLIC_URL + `/general-contracting`}>icon-painting</Link></h3>
                                    <p>Lorem ipsum is simply free text dolor amett consec adipisc.</p>
                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/general-contracting`}><span className="icon-right-arrow"></span></Link>
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