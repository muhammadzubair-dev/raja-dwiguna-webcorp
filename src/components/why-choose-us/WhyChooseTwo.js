import React from 'react';

export default class WhyChooseTwo extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($('.count-bar').length) {
            $('.count-bar').appear(function () {
              var el = $(this);
              var percent = el.data('percent');
              $(el).css('width', percent).addClass('counted');
            }, {
              accY: -50
            });
        
        }

        if ($(".circle-progress").length) {
            $(".circle-progress").appear(function () {
              let circleProgress = $(".circle-progress");
              circleProgress.each(function () {
                let progress = $(this);
                let progressOptions = progress.data("options");
                progress.circleProgress(progressOptions);
              });
            });
          }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="why-choose-two-sec">
                    <div className="shape1 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <img src={publicUrl+"assets/images/shapes/why-choose-v2-shape1.png"} alt="" />
                    </div>
                    <div className="container">
                        <div className="row">
                            {/* Start Why Choose Two Content */}
                            <div className="col-xl-6">
                                <div className="why-choose-two__content">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6>Why Choose Us </h6> <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title">Superior And Popular <br /> Services Provide </h2>
                                        <p className="sec-title__text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                                            odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                            nesciunt. </p>
                                    </div>

                                    <div className="why-choose-two__content-progress">
                                        {/* Start Why Choose Two Content Progress Single */}
                                        <div className="why-choose-two__content-progress-single">
                                            <div className="top">
                                                <h3>Project Planning - </h3>
                                                <div className="count-text">85%</div>
                                            </div>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="85%">
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Why Choose Two Content Progress Single */}

                                        {/* Start Why Choose Two Content Progress Single */}
                                        <div className="why-choose-two__content-progress-single">
                                            <div className="top">
                                                <h3>Project Planning - </h3>
                                                <div className="count-text">75%</div>
                                            </div>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="75%">
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Why Choose Two Content Progress Single */}

                                        {/* Start Why Choose Two Content Progress Single */}
                                        <div className="why-choose-two__content-progress-single mar0">
                                            <div className="top">
                                                <h3>Project Planning - </h3>
                                                <div className="count-text">65%</div>
                                            </div>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="65%">
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Why Choose Two Content Progress Single */}
                                    </div>
                                </div>
                            </div>
                            {/* End Why Choose Two Content */}

                            {/* Start Why Choose Two Img */}
                            <div className="col-xl-6">
                                <div className="why-choose-two__img" style={{backgroundImage: 'url('+publicUrl+'assets/images/resources/why-choose-v2-bg.jpg)'}}></div>
                            </div>
                            {/* End Why Choose Two Img */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}