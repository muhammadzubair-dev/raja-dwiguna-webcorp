import React from 'react';

export default class AppointmentOne extends React.Component {
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
                <section className="appointment-one-sec">
                    <div className="shape1"></div>
                    <div className="appointment-one__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/appointment-v1-bg.jpg)'}}></div>
                    <div className="video-box">
                        <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                            <div className="appointment-one__video-icon">
                                <span className="fa fa-play"></span>
                                <i className="ripple"></i>
                            </div>
                        </a>
                    </div>
                    <div className="container">
                        <div className="row">
                            {/* Start Appointment One Form */}
                            <div className="col-xl-5">
                                <div className="appointment-one__form">
                                    <div className="title-box">
                                        <h2>Get in Touch</h2>
                                    </div>
                                    <div className="form-box">
                                        <form method="post" action="index.html">
                                            <div className="form-group">
                                                <input type="text" name="username" placeholder="Your Name" required="" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="phone" placeholder="Phone Number" required="" />
                                            </div>
                                            <div className="form-group">
                                                <textarea placeholder="Your Message"></textarea>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div className="button-box">
                                                        <input id="form_botcheck" name="form_botcheck" className="form-control"
                                                            type="hidden" value="" />
                                                        <button className="thm-btn" data-text="Free Estimate +" type="submit"
                                                            data-loading-text="Please wait...">Free Estimate +</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                            {/* Start Appointment One Form */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}