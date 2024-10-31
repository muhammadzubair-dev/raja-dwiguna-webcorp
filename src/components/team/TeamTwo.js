import React from 'react';
import {Link} from 'react-router-dom';

export default class TeamTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="team-one-sec team-one-sec--two">
                    <div className="container">
                        <div className="row">
                            {/* Start Team One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms"
                                data-wow-duration="1000ms">
                                <div className="team-one__single">
                                    <div className="team-one__single-img">
                                        <img src={publicUrl+"assets/images/team/team-v1-img4.jpg"} alt="" />
                                        <div className="content-box">
                                            <h2><Link to={process.env.PUBLIC_URL + `/team-details`}>Martyn D Joseph</Link></h2>
                                            <span>Senior Worker</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Team One Single */}

                            {/* Start Team One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms"
                                data-wow-duration="1000ms">
                                <div className="team-one__single">
                                    <div className="team-one__single-img">
                                        <img src={publicUrl+"assets/images/team/team-v1-img5.jpg"} alt="" />
                                        <div className="content-box">
                                            <h2><Link to={process.env.PUBLIC_URL + `/team-details`}>Martyn D Joseph</Link></h2>
                                            <span>Senior Worker</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Team One Single */}

                            {/* Start Team One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="0ms"
                                data-wow-duration="1000ms">
                                <div className="team-one__single">
                                    <div className="team-one__single-img">
                                        <img src={publicUrl+"assets/images/team/team-v1-img6.jpg"} alt="" />
                                        <div className="content-box">
                                            <h2><Link to={process.env.PUBLIC_URL + `/team-details`}>Martyn D Joseph</Link></h2>
                                            <span>Senior Worker</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Team One Single */}

                            {/* Start Team One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms"
                                data-wow-duration="1000ms">
                                <div className="team-one__single">
                                    <div className="team-one__single-img">
                                        <img src={publicUrl+"assets/images/team/team-v1-img7.jpg"} alt="" />
                                        <div className="content-box">
                                            <h2><Link to={process.env.PUBLIC_URL + `/team-details`}>Martyn D Joseph</Link></h2>
                                            <span>Senior Worker</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Team One Single */}

                            {/* Start Team One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms"
                                data-wow-duration="1000ms">
                                <div className="team-one__single">
                                    <div className="team-one__single-img">
                                        <img src={publicUrl+"assets/images/team/team-v1-img8.jpg"} alt="" />
                                        <div className="content-box">
                                            <h2><Link to={process.env.PUBLIC_URL + `/team-details`}>Martyn D Joseph</Link></h2>
                                            <span>Senior Worker</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Team One Single */}

                            {/* Start Team One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms"
                                data-wow-duration="1000ms">
                                <div className="team-one__single">
                                    <div className="team-one__single-img">
                                        <img src={publicUrl+"assets/images/team/team-v1-img9.jpg"} alt="" />
                                        <div className="content-box">
                                            <h2><Link to={process.env.PUBLIC_URL + `/team-details`}>Martyn D Joseph</Link></h2>
                                            <span>Senior Worker</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Team One Single */}

                            {/* Start Team One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="0ms"
                                data-wow-duration="1000ms">
                                <div className="team-one__single">
                                    <div className="team-one__single-img">
                                        <img src={publicUrl+"assets/images/team/team-v1-img10.jpg"} alt="" />
                                        <div className="content-box">
                                            <h2><Link to={process.env.PUBLIC_URL + `/team-details`}>Martyn D Joseph</Link></h2>
                                            <span>Senior Worker</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Team One Single */}

                            {/* Start Team One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms"
                                data-wow-duration="1000ms">
                                <div className="team-one__single">
                                    <div className="team-one__single-img">
                                        <img src={publicUrl+"assets/images/team/team-v1-img11.jpg"} alt="" />
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