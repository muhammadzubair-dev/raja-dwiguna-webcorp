import React from 'react';
import {Link} from 'react-router-dom';

export default class AboutFour extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
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
                <div className="about-three">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="about-three__img">
                                    <div className="inner">
                                        <img src={publicUrl+"assets/images/update1.0/about-v3-img1.jpg"} alt="#" />
                                        <div className="about-three__img-video wow zoomIn" data-wow-delay="100ms">
                                            <a href="https://www.youtube.com/watch?v=0O2aH4XLbto" className="video-popup">
                                                <div className="about-three__img-video-icon">
                                                    <span className="fa fa-play"></span>
                                                    <i className="ripple"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="about-three__content">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6> ABOUT US </h6> <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title">Construction For Commercial</h2>
                                    </div>

                                    <div className="about-three__content-inner">
                                        <div className="text1">
                                            <p>Construction is a general term meaning the art and science to form objects
                                                systems organizations, and comes from Latin construction and Old French
                                                construction. To construct is the verb:</p>
                                        </div>
                                        <div className="text2">
                                            <h4>It is a long established fact that a reader will be distracted by the readable
                                                content </h4>
                                        </div>
                                        <ul className="about-three__content-list">
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-tick"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p> Interior Design Package</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-tick"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p> Renovaion Of Commercial Office</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-tick"></span>
                                                </div>
                                                <div className="text-box">
                                                    <p>Reparing Of Residentail Roof</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="about-three__content-btn">
                                            <Link href={`${process.env.PUBLIC_URL}/about-one`} className="thm-btn" data-text="Discover More +">
                                                Discover More +</Link>
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