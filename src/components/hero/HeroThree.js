import React from 'react';
import {Link} from 'react-router-dom';

export default class HeroThree extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($('.slider-carousel').length) {
            $('.slider-carousel').owlCarousel({
              animateOut: 'fadeOut',
              animateIn: 'fadeIn',
              loop: true,
              margin: 0,
              nav: false,
              singleItem: true,
              smartSpeed: 500,
              autoplay: true,
              autoplayTimeout: 6000,
              navText: ['<span class="icon-right-arrow"></span>', '<span class="icon-right-arrow"></span>'],
              responsive: {
                0: {
                  items: 1
                },
                600: {
                  items: 1
                },
                1024: {
                  items: 1
                }
              }
            });
          }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="slider-one-sec">
                    <div className="slider-carousel owl-carousel owl-theme">
                        {/* Start Slider One Single */}
                        <div className="slider-one__single">
                            <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/slider/slider-v1-img1.jpg)'}}>
                            </div>
                            <div className="container">
                                <div className="row clearfix">
                                    <div className="col-xl-12">
                                        <div className="slider-one__single-content">
                                            <h3>Our Top Construction.</h3>
                                            <h2>We Make Strong <br /> Construction</h2>
                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <br /> officia
                                                deserunt mollit anim id est laborum. </p>
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn" data-text="Read More +">Read More +</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Slider One Single */}

                        {/* Start Slider One Single */}
                        <div className="slider-one__single">
                            <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/slider/slider-v1-img2.jpg)'}}>
                            </div>
                            <div className="container">
                                <div className="row clearfix">
                                    <div className="col-xl-12">
                                        <div className="slider-one__single-content">
                                            <h3>Our Top Construction.</h3>
                                            <h2>Solutions For <br /> Industries</h2>
                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <br /> officia
                                                deserunt mollit anim id est laborum. </p>
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn" data-text="Read More +">Read More +</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Slider One Single */}

                        {/* Start Slider One Single */}
                        <div className="slider-one__single">
                            <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/slider/slider-v1-img3.jpg)'}}>
                            </div>
                            <div className="container">
                                <div className="row clearfix">
                                    <div className="col-xl-12">
                                        <div className="slider-one__single-content">
                                            <h3>Our Top Construction.</h3>
                                            <h2>We Build Your <br />Best Life</h2>
                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <br /> officia
                                                deserunt mollit anim id est laborum. </p>
                                            <div className="btn-box">
                                                <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn" data-text="Read More +">Read More +</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Slider One Single */}
                    </div>
                </section>
            </>
        )
    }
}