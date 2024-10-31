import React from 'react';

export default class CtaTwo extends React.Component {
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
                <section className="video-one">
                    <div className="video-one__bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%" 
                    style={{backgroundImage: 'url('+publicUrl+'assets/images/update1.0/video-v1-bg.jpg)'}}></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="video-one__inner">
                                    <div className="text-box">
                                        <h2>Make Constraction your <br /> Dream into Reality</h2>
                                        <p>South-central construction region since 2001</p>
                                    </div>
                                    <div className="video-box">
                                        <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                            <div className="video-one__icon">
                                                <span className="icon-play-button"></span>
                                                <i className="ripple"></i>
                                            </div>
                                        </a>
                                        <span className="border-animation border-1"></span>
                                        <span className="border-animation border-2"></span>
                                        <span className="border-animation border-3"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}