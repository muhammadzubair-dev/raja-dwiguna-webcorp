import React from 'react';

export default class BenefitsOne extends React.Component {
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
                <section className="benefits-one-sec">
                    <div className="container">
                        <div className="row">
                            {/* Start Benefits One Content */}
                            <div className="col-xl-6">
                                <div className="benefits-one__content">
                                    <div className="sec-title">
                                        <div className="sec-title__tagline">
                                            <h6>Our Benefits </h6> <span className="right"></span>
                                        </div>
                                        <h2 className="sec-title__title">We Are Provide Surperior <br />And Quality Results</h2>
                                        <p className="sec-title__text">Duis aute irure dolor in reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla pariatur. sint occaecat cupidatat non
                                            sunt in culpa qui officia deserunt mollit anim </p>
                                    </div>

                                    <ul className="benefits-one__content-list">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-tick"></span>
                                            </div>
                                            <div className="text">
                                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="icon-tick"></span>
                                            </div>
                                            <div className="text">
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum </p>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="benefits-one__content-progress">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="benefits-one__content-progress-single">
                                                    <div className="progress-box">
                                                        <div className="graph-outer">
                                                            <input type="text" className="dial" data-fgColor="#ff5e14"
                                                                data-bgColor="#ebebeb" data-width="90" data-height="90"
                                                                data-linecap="normal" value="66" />
                                                            <div className="inner-text count-box"><span className="count-text"
                                                                    data-stop="66" data-speed="2000"></span><span
                                                                    className="count-Parsent">%</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="title-box">
                                                        <h4>complated <br /> Work</h4>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="benefits-one__content-progress-single">
                                                    <div className="progress-box">
                                                        <div className="graph-outer">
                                                            <input type="text" className="dial" data-fgColor="#ff5e14"
                                                                data-bgColor="#ebebeb" data-width="90" data-height="90"
                                                                data-linecap="normal" value="85" />
                                                            <div className="inner-text count-box"><span className="count-text"
                                                                    data-stop="85" data-speed="2000"></span><span
                                                                    className="count-Parsent">%</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="title-box">
                                                        <h4>Satisfied <br /> Client</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Benefits One Content */}

                            {/* Start Benefits One Img */}
                            <div className="col-xl-6">
                                <div className="benefits-one__img wow slideInRight" data-wow-delay="500ms"
                                    data-wow-duration="2500ms">
                                    <div className="shape1 zoom-fade"></div>
                                    <div className="shape2 zoom-fade"></div>
                                    <img src={publicUrl+"assets/images/resources/benefits-v1-img1.jpg"} alt="" />
                                </div>
                            </div>
                            {/* End Benefits One Img */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}