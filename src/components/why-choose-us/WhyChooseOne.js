import React from 'react';

export default class WhyChooseOne extends React.Component {
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
                <section className="why-choose-one-sec">
                    <div className="container">
                        <div className="row">
                            {/* Start Why Choose One Content */}
                            <div className="col-xl-6">
                                <div className="why-choose-one__content">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6> Why Choose Us </h6> <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title">Why We Are The Best</h2>
                                        <p className="sec-title__text">Sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. enim ad minim veniam, quis nostrupidatat exercitation ullamco laboris nisi a
                                            ut aliquip ex ea commodo a consequat.
                                        </p>
                                    </div>
    
                                    <div className="why-choose-one__content-top">
                                        <div className="img-box">
                                            <img src={publicUrl+"assets/images/resources/why-choose-v1-img1.jpg"} alt="" />
                                        </div>
                                        <div className="text-box">
                                            <p>It is a long established fact that a reader will be distracted by the readable
                                                content of a page when looking at its layout. The point of using Lorem Ipsum is
                                                that it has a more-or-less normal distribution of letters, as opposed to using
                                                making it look like readable English.</p>
                                        </div>
                                    </div>
    
                                    <div className="why-choose-one__content-bottom">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="why-choose-one__content-bottom-single">
                                                    <h2>Legel Advice</h2>
                                                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim
                                                        ad minim veniam, quis nostrupidatat.
                                                    </p>
                                                </div>
                                            </div>
    
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="why-choose-one__content-bottom-single">
                                                    <h2>Our Mission</h2>
                                                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim
                                                        ad minim veniam, quis nostrupidatat .
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Why Choose One Content */}
    
                            {/* Start Why Choose One Img */}
                            <div className="col-xl-6">
                                <div className="why-choose-one__img">
                                    <div className="row">
                                        {/* Start Why Choose One Img Single */}
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="why-choose-one__img-single">
                                                <div className="img-box">
                                                    <img src={publicUrl+"assets/images/resources/why-choose-v1-img2.jpg"} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Why Choose One Img Single */}
    
                                        {/* Start Why Choose One Img Single */}
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="why-choose-one__img-single">
                                                <div className="img-box">
                                                    <img src={publicUrl+"assets/images/resources/why-choose-v1-img3.jpg"} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Why Choose One Img Single */}
    
                                        {/* Start Why Choose One Img Single */}
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="why-choose-one__img-single">
                                                <div className="img-box style2">
                                                    <img src={publicUrl+"assets/images/resources/why-choose-v1-img4.jpg"} alt="" />
                                                    <div className="video-box">
                                                        <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                                                            className="video-popup">
                                                            <div className="why-choose-one__video-icon">
                                                                <span className="fa fa-play"></span>
                                                                <i className="ripple"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Why Choose One Img Single */}
    
                                        {/* Start Why Choose One Img Single */}
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="why-choose-one__img-single">
                                                <div className="img-box">
                                                    <img src={publicUrl+"assets/images/resources/why-choose-v1-img5.jpg"} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Why Choose One Img Single */}
                                    </div>
                                </div>
                            </div>
                            {/* End Why Choose One Img */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}