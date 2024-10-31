import React from 'react';
import {Link} from 'react-router-dom';

export default class ProjectTwo extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($(".project-two__carousel").length) {
            $(".project-two__carousel").owlCarousel({
              loop: true,
              margin: 30,
              nav: false,
              smartSpeed: 500,
              autoHeight: false,
              autoplay: true,
              dots: false,
              autoplayTimeout: 6000,
              navText: [
                '<i className="fa fa-angle-double-left" aria-hidden="true"></i>',
                '<i className="fa fa-angle-double-right" aria-hidden="true"></i>',
              ],
              responsive: {
                0: {
                  items: 1,
                },
                600: {
                  items: 1,
                },
                800: {
                  items: 1,
                },
                1000: {
                  items: 1,
                },
                1350: {
                  items: 1,
                },
              },
            });
        }

        if ($(".video-popup").length) {
            $(".video-popup").magnificPopup({
              type: "iframe",
              mainClass: "mfp-fade",
              removalDelay: 160,
              preloader: true,
        
              fixedContentPos: false,
            });
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="project-two-sec">
                    <div className="container">
                        <div className="project-two__top">
                            <div className="sec-title">
                                <div className="sec-title__tagline">
                                    <h6>Our Work</h6> <span className="right"></span>
                                </div>
                                <h2 className="sec-title__title">Complated Project</h2>
                            </div>
                            <div className="btn-box">
                                <Link to={process.env.PUBLIC_URL + `/portfolio`} className="thm-btn" data-text="View All Portfolio +">View All Portfolio +</Link>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="project-two__carousel owl-carousel owl-theme">
                                    {/* Start Project Two Single */}
                                    <div className="project-two__single">
                                        <div className="project-two__single-img">
                                            <img src={publicUrl+"assets/images/project/project-v2-img1.jpg"} alt="" />
                                            <div className="video-box">
                                                <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                                    <div className="project-two__video-icon">
                                                        <span className="fa fa-play"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Project Two Single */}

                                    {/* Start Project Two Single */}
                                    <div className="project-two__single">
                                        <div className="project-two__single-img">
                                            <img src={publicUrl+"assets/images/project/project-v2-img2.jpg"} alt="" />
                                            <div className="video-box">
                                                <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                                    <div className="project-two__video-icon">
                                                        <span className="fa fa-play"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Project Two Single */}

                                    {/* Start Project Two Single */}
                                    <div className="project-two__single">
                                        <div className="project-two__single-img">
                                            <img src={publicUrl+"assets/images/project/project-v2-img3.jpg"} alt="" />
                                            <div className="video-box">
                                                <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                                    <div className="project-two__video-icon">
                                                        <span className="fa fa-play"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Project Two Single */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}