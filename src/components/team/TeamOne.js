import React from 'react';
import { Link } from 'react-router-dom';

export default class TeamOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="team-one-sec">
                    <div className="shape1 float-bob-y"><img src={publicUrl+"assets/images/shapes/team-v1-shape1.png"} alt="" /></div>
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sec-title__tagline">
                                <span className="left"></span>
                                <h6>Our Team</h6> <span className="right"></span>
                            </div>
                            <h2 className="sec-title__title">Our Expert Member</h2>
                        </div>
                        <div className="row">
                            {/* Start Team One Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="team-one__single">
                                    <div className="team-one__single-img">
                                        <img src={publicUrl+"assets/images/team/team-v1-img1.jpg"} alt="" />
                                        <div className="content-box">
                                            <h2><Link to={process.env.PUBLIC_URL + `/team-details`}>Martyn D Joseph</Link></h2>
                                            <span>Senior Worker</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Team One Single */}

                            {/* Start Team One Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="team-one__single">
                                    <div className="team-one__single-img">
                                        <img src={publicUrl+"assets/images/team/team-v1-img2.jpg"} alt="" />
                                        <div className="content-box">
                                            <h2><Link to={process.env.PUBLIC_URL + `/team-details`}>Martyn D Joseph</Link></h2>
                                            <span>Senior Worker</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Team One Single */}

                            {/* Start Team One Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.5s">
                                <div className="team-one__single">
                                    <div className="team-one__single-img">
                                        <img src={publicUrl+"assets/images/team/team-v1-img3.jpg"} alt="" />
                                        <div className="content-box">
                                            <h2><Link to={process.env.PUBLIC_URL + `/team-details`}>Martyn D Joseph</Link></h2>
                                            <span>Senior Worker</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Team One Single */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}