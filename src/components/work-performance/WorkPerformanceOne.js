import React from 'react';

export default class WorkPerformanceOne extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($('.dial').length) {
            $('.dial').appear(function () {
              var elm = $(this);
              var color = elm.attr('data-fgColor');
              var perc = elm.attr('value');
              elm.knob({
                'value': 0,
                'min': 0,
                'max': 100,
                'skin': 'tron',
                'readOnly': true,
                'thickness': 0.15,
                'dynamicDraw': true,
                'displayInput': false
              });
              $({
                value: 0
              }).animate({
                value: perc
              }, {
                duration: 2000,
                easing: 'swing',
                progress: function () {
                  elm.val(Math.ceil(this.value)).trigger('change');
                }
              });
              $(this).append(function () {});
            }, {
              accY: 20
            });
        }

        if ($(".count-box").length) {
            $(".count-box").appear(
              function () {
                var $t = $(this),
                  n = $t.find(".count-text").attr("data-stop"),
                  r = parseInt($t.find(".count-text").attr("data-speed"), 10);
        
                if (!$t.hasClass("counted")) {
                  $t.addClass("counted");
                  $({
                    countNum: $t.find(".count-text").text(),
                  }).animate({
                    countNum: n,
                  }, {
                    duration: r,
                    easing: "linear",
                    step: function () {
                      $t.find(".count-text").text(
                        Math.floor(this.countNum)
                      );
                    },
                    complete: function () {
                      $t.find(".count-text").text(this.countNum);
                    },
                  });
                }
              }, {
                accY: 0
              }
            );
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="work-perfomance-one-sec">
                    <div className="container">
                        <div className="row">
                            {/* Start Work Perfomance One Content */}
                            <div className="col-xl-7">
                                <div className="work-perfomance-one__content">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6> Work Perfomance</h6> <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title">We Are Build Strong Building <br /> In Town</h2>
                                        <p className="sec-title__text">Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </p>
                                    </div>
                                    <div className="work-perfomance-one__content-bottom">
                                        <div className="progress-box">
                                            <div className="inner-box">
                                                <div className="graph-outer">
                                                    <input type="text" className="dial" data-fgColor="#ff5e14"
                                                        data-bgColor="#ebebeb" data-width="100" data-height="100"
                                                        data-linecap="normal" value="85" />
                                                    <div className="inner-text count-box"><span className="count-text" data-stop="85"
                                                            data-speed="2000"></span><span className="count-Parsent">%</span></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-box">
                                            <h2>Satisfied Customer</h2>
                                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* End Work Perfomance One Content */}
                            </div>

                            {/* Start Work Perfomance One Img */}
                            <div className="col-xl-5">
                                <div className="work-perfomance-one__img">
                                    <img src={publicUrl+"assets/images/resources/work-perfomance-v1-img1.jpg"} alt="" />
                                </div>
                            </div>
                            {/* Start Work Perfomance One Img */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}