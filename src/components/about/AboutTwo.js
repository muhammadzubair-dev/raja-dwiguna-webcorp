import React from 'react';
import { Link } from 'react-router-dom';

export default class AboutTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="about-two-sec">
                    <div className="container">
                        <div className="row">
                            {/* Start About Two Img */}
                            <div className="col-xl-6">
                                <div className="about-two__img">
                                    <div className="about-two__img1">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/about/about-v2-img1.jpg"} alt="" />
                                        </div>
                                    </div>
                                    <div className="about-two__img2">
                                        <img src={publicUrl+"assets/images/about/about-v2-img2.jpg"} alt="" />
                                    </div>
                                </div>
                            </div>
                            {/* End About Two Img */}

                            {/* Start About Two Content */}
                            <div className="col-xl-6">
                                <div className="about-two__content">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6>About Company </h6> <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title">Company Work Systam <br /> Management</h2>
                                        <p className="sec-title__text">Neque porro quisquam est, qui dolorem ipsum quidolor sit
                                            amet, consectetur, adipisci velit, sed quia nnumquam eius modi tempora
                                            inciduntaliquam quaerat </p>
                                    </div>
                                    <div className="about-two__content-text1">
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat nulla pariatur. </p>
                                    </div>

                                    <div className="about-two__content-text2">
                                        <div className="text-box">
                                            <p>Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco laboris </p>
                                        </div>

                                        <div className="icon-box">
                                            <span className="icon-chart"></span>
                                        </div>
                                    </div>

                                    <div className="about-two__content-bottom">
                                        <div className="btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/about-one`} className="thm-btn" data-text="Discover More +">Discover More +</Link>
                                        </div>
                                        <div className="author-box">
                                            <div className="img-box">
                                                <img src={publicUrl+"assets/images/about/about-v2-author-img.jpg"} alt="" />
                                            </div>
                                            <div className="title-box">
                                                <h2>Lark Hander</h2>
                                                <span>Ceo - Conts</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End About Two Content */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}