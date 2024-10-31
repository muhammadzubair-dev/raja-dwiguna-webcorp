import React from 'react';

export default class CounterTwo extends React.Component {
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
        return (
            <>
                <section className="progress-one">
                    <div className="container">
                        <div className="row">
                            {/* Start Progress One Single */}
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="progress-one__single">
                                    <div className="progress-box">
                                        <div className="graph-outer">
                                            <input type="text" className="dial" data-fgColor="#ff5e14" data-bgColor="#ebebeb"
                                                data-width="170" data-height="170" data-linecap="normal" value="98" />
                                            <div className="inner-text count-box"><span className="count-text" data-stop="98"
                                                    data-speed="2000"></span><span className="count-Parsent">%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="title-box">
                                        <h4>our happy clients</h4>
                                        <p>Lorem Ipsum is simply <br /> dummy text</p>
                                    </div>

                                </div>
                            </div>
                            {/* End Progress One Single */}

                            {/* Start Progress One Single */}
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="progress-one__single">
                                    <div className="progress-box">
                                        <div className="graph-outer">
                                            <input type="text" className="dial" data-fgColor="#ff5e14" data-bgColor="#ebebeb"
                                                data-width="170" data-height="170" data-linecap="normal" value="85" />
                                            <div className="inner-text count-box"><span className="count-text" data-stop="85"
                                                    data-speed="2000"></span><span className="count-Parsent">%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="title-box">
                                        <h4>completed projects</h4>
                                        <p>Lorem Ipsum is simply <br /> dummy text</p>
                                    </div>

                                </div>
                            </div>
                            {/* End Progress One Single */}

                            {/* Start Progress One Single */}
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="progress-one__single">
                                    <div className="progress-box">
                                        <div className="graph-outer">
                                            <input type="text" className="dial" data-fgColor="#ff5e14" data-bgColor="#ebebeb"
                                                data-width="170" data-height="170" data-linecap="normal" value="95" />
                                            <div className="inner-text count-box"><span className="count-text" data-stop="95"
                                                    data-speed="2000"></span><span className="count-Parsent">%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="title-box">
                                        <h4>Skilled People</h4>
                                        <p>Lorem Ipsum is simply <br /> dummy text</p>
                                    </div>

                                </div>
                            </div>
                            {/* End Progress One Single */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}