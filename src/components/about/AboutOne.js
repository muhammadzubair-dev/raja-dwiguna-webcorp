import React from 'react';

export default class AboutOne extends React.Component {
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

        if ($(".odometer").length) {
            var odo = $(".odometer");
            odo.each(function () {
              $(this).appear(function () {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
              });
            });
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="about-one-sec">
                    <div className="container-fluid">
                        <div className="row">
                            {/* Start About One Img */}
                            <div className="col-xl-6">
                                <div className="about-one__img-box">
                                    <div className="about-one__img-box-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/about/about-v1-img1.jpg)'}}></div>

                                    <div className="about-one__img-box-overlay">
                                        <h2>
                                            <span className="odometer" data-count="400">00</span>
                                            <span className="plus">+</span> <br />Project<br />Done
                                        </h2>
                                    </div>

                                </div>
                            </div>
                            {/* End About One Img */}

                            {/* Start About One Content */}
                            <div className="col-xl-6">
                                <div className="about-one__content">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6>About Company </h6> <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title">Our Modern Construction <br />Agency</h2>
                                        <p className="sec-title__text">There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered alteration in some form, by injected
                                            humour, or randomised words which don't look even slightly.</p>
                                    </div>

                                    <div className="about-one__conten-bottom">
                                        <p>Consectetur, adipisci velit, sed quia nnumquam eius modi tempora inciduntaliquam quaerat </p>

                                        <div className="about-one__progress">
                                            {/* Start About One Progress Single */}
                                            <div className="about-one__progress-single">
                                                <h4 className="about-one__progress-single-title">Quality Provide</h4>
                                                <div className="bar">
                                                    <div className="bar-inner count-bar" data-percent="74%">
                                                        <div className="count-text">74%</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End About One Progress Single */}

                                            {/* Start About One Progress Single */}
                                            <div className="about-one__progress-single mar0">
                                                <h4 className="about-one__progress-single-title">Project Planing</h4>
                                                <div className="bar">
                                                    <div className="bar-inner count-bar" data-percent="80%">
                                                        <div className="count-text">80%</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End About One Progress Single */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End About One Content */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}