import React from 'react';

export default class FaqTwo extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($('.accordion-box').length) {
            $(".accordion-box").on('click', '.acc-btn', function () {
        
              var outerBox = $(this).parents('.accordion-box');
              var target = $(this).parents('.accordion');
        
              if ($(this).hasClass('active') !== true) {
                $(outerBox).find('.accordion .acc-btn').removeClass('active');
              }
        
              if ($(this).next('.acc-content').is(':visible')) {
                return false;
              } else {
                $(this).addClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                target.addClass('active-block');
                $(this).next('.acc-content').slideDown(300);
              }
            });
        }
          
    }
    render(){
        return (
            <>
                <section className="faq-one faq-one--faq">
                    <div className="container">
                        <div className="row">
                            {/* Start Faq One Accordion */}
                            <div className="col-xl-12">
                                <div className="faq-one__accordion">
                                    <ul className="accordion-box">
                                        <li className="accordion block">
                                            <div className="acc-btn">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-sign"></i>
                                                </div>
                                                <h3>1. What is included in your service?</h3>
                                            </div>
                                            <div className="acc-content">
                                                <div className="inner">
                                                    <p>There are many variations of passages the majority have suffered
                                                        alteration
                                                        in some fo injected humour, or randomised words believable.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="accordion block active-block">
                                            <div className="acc-btn active">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-sign"></i>
                                                </div>
                                                <h3>2. Can i get payment terms?</h3>
                                            </div>
                                            <div className="acc-content current">
                                                <div className="inner">
                                                    <p>There are many variations of passages the majority have suffered
                                                        alteration in some fo injected humour, or randomised words believable.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="accordion block mb0">
                                            <div className="acc-btn">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-sign"></i>
                                                </div>
                                                <h3>3. We create sustainable growth.</h3>
                                            </div>
                                            <div className="acc-content">
                                                <div className="inner">
                                                    <p>There are many variations of passages the majority have suffered
                                                        alteration in some fo injected humour, or randomised words believable.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="accordion block mb0">
                                            <div className="acc-btn">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-sign"></i>
                                                </div>
                                                <h3>4. Why we are best company?</h3>
                                            </div>
                                            <div className="acc-content">
                                                <div className="inner">
                                                    <p>There are many variations of passages the majority have suffered
                                                        alteration in some fo injected humour, or randomised words believable.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="accordion block mb0">
                                            <div className="acc-btn">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-sign"></i>
                                                </div>
                                                <h3>5. How the template process works?</h3>
                                            </div>
                                            <div className="acc-content">
                                                <div className="inner">
                                                    <p>There are many variations of passages the majority have suffered
                                                        alteration in some fo injected humour, or randomised words believable.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="accordion block mb0">
                                            <div className="acc-btn">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-sign"></i>
                                                </div>
                                                <h3>6. Company mission & vision?</h3>
                                            </div>
                                            <div className="acc-content">
                                                <div className="inner">
                                                    <p>There are many variations of passages the majority have suffered
                                                        alteration in some fo injected humour, or randomised words believable.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="accordion block mb0">
                                            <div className="acc-btn">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-sign"></i>
                                                </div>
                                                <h3>7. Best trusted performance?</h3>
                                            </div>
                                            <div className="acc-content">
                                                <div className="inner">
                                                    <p>There are many variations of passages the majority have suffered
                                                        alteration in some fo injected humour, or randomised words believable.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="accordion block mb0">
                                            <div className="acc-btn">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-sign"></i>
                                                </div>
                                                <h3>8. I need more information about Theme.</h3>
                                            </div>
                                            <div className="acc-content">
                                                <div className="inner">
                                                    <p>There are many variations of passages the majority have suffered
                                                        alteration in some fo injected humour, or randomised words believable.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Faq One Accordion */}

                        </div>
                    </div>
                </section>
            </>
        )
    }
}