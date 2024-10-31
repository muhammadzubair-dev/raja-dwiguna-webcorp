import React from 'react';
import {Link} from 'react-router-dom';

export default class BlogTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="blog-one-sec blog-one-sec--two">
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sec-title__tagline">
                                <span className="left"></span>
                                <h6>Our Latest</h6> <span className="right"></span>
                            </div>
                            <h2 className="sec-title__title">Our Latest Blog & News</h2>
                        </div>
                        <div className="row">
                            {/* Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/blog/blog-v2-img1.jpg"} alt="" />
                                        </div>
                                        <div className="blog-one__single-content">
                                            <div className="inner-content">
                                                <ul className="meta-info">
                                                    <li><span className="icon-account"></span><Link to={process.env.PUBLIC_URL + `/`}>jhon Smith</Link></li>
                                                    <li><span className="icon-bubble-chat"></span><Link to={process.env.PUBLIC_URL + `/`}>2 Comment</Link></li>
                                                </ul>
                                                <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>The Coal Mine Production And <br /> Transportation</Link></h2>
                                                <div className="btn-box">
                                                    <Link to={process.env.PUBLIC_URL + `/blog-details`} className="thm-btn" data-text="Read More +">Read More +</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog One Single */}

                            {/* Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/blog/blog-v2-img2.jpg"} alt="" />
                                        </div>
                                        <div className="blog-one__single-content">
                                            <div className="inner-content">
                                                <ul className="meta-info">
                                                    <li><span className="icon-account"></span><Link to={process.env.PUBLIC_URL + `/`}>jhon Smith</Link></li>
                                                    <li><span className="icon-bubble-chat"></span><Link to={process.env.PUBLIC_URL + `/`}>2 Comment</Link></li>
                                                </ul>
                                                <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Improve Workflow With Agile <br /> Construction</Link></h2>
                                                <div className="btn-box">
                                                    <Link to={process.env.PUBLIC_URL + `/blog-details`} className="thm-btn" data-text="Read More +">Read More +</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog One Single */}

                            {/* Start Blog One Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.5s">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/blog/blog-v2-img3.jpg"} alt="" />
                                        </div>
                                        <div className="blog-one__single-content">
                                            <div className="inner-content">
                                                <ul className="meta-info">
                                                    <li><span className="icon-account"></span><Link to={process.env.PUBLIC_URL + `/`}>jhon Smith</Link></li>
                                                    <li><span className="icon-bubble-chat"></span><Link to={process.env.PUBLIC_URL + `/`}>2 Comment</Link></li>
                                                </ul>
                                                <h2><Link to={process.env.PUBLIC_URL + `/blog-details`}>Recent Commercial Real Estate <br /> Transactions</Link></h2>
                                                <div className="btn-box">
                                                    <Link to={process.env.PUBLIC_URL + `/blog-details`} className="thm-btn" data-text="Read More +">Read More +</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog One Single */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}