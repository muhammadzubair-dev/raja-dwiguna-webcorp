import React from 'react';

export default class CounterOne extends React.Component {
    componentDidMount() {

        const $ = window.$;

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
                <section className="counter-one">
                    <div className="counter-one__pattern" style={{backgroundImage: 'url('+publicUrl+'assets/images/pattern/counter-v1-pattern.png)'}}></div>
                    <div className="container">
                        <div className="row">
                            {/* Start Counter One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="counter-one__single">
                                    <div className="counter-one__single-inner">
                                        <div className="icon-box">
                                            <span className="fas fa-award"></span>
                                        </div>
                                        <div className="text-box">
                                            <h3 className="odometer" data-count="500">00</h3>
                                            <span className="counter-one__letter">K</span>
                                            <span className="counter-one__plus">+</span>
                                            <p className="counter-one__text">Awards Win</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Counter One Single */}

                            {/* Start Counter One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="counter-one__single">
                                    <div className="counter-one__single-inner">
                                        <div className="icon-box">
                                            <span className="icon-interior-design-1"></span>
                                        </div>
                                        <div className="text-box">
                                            <h3 className="odometer" data-count="1002">00</h3>
                                            <span className="counter-one__letter">K</span>
                                            <p className="counter-one__text">Completed Project</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Counter One Single */}

                            {/* Start Counter One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="counter-one__single">
                                    <div className="counter-one__single-inner">
                                        <div className="icon-box">
                                            <span className="icon-account"></span>
                                        </div>
                                        <div className="text-box">
                                            <h3 className="odometer" data-count="566">00</h3>
                                            <span className="counter-one__letter">K</span>
                                            <span className="counter-one__plus">+</span>
                                            <p className="counter-one__text">Happy Clients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Counter One Single */}

                            {/* Start Counter One Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="counter-one__single">
                                    <div className="counter-one__single-inner">
                                        <div className="icon-box">
                                            <span className="icon-line-chart"></span>
                                        </div>
                                        <div className="text-box">
                                            <h3 className="odometer" data-count="450">00</h3>
                                            <span className="counter-one__letter">K</span>
                                            <span className="counter-one__plus">+</span>
                                            <p className="counter-one__text">Finish The Job</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Counter One Single */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}