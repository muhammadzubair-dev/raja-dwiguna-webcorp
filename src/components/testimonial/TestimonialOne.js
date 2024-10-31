import React from 'react';

export default class TestimonialOne extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".testimonials-one__carousel").length) {
            $(".testimonials-one__carousel").owlCarousel({
              loop: true,
              margin: 30,
              nav: false,
              smartSpeed: 500,
              autoHeight: false,
              autoplay: true,
              dots: false,
              autoplayTimeout: 10000,
              navText: [
                '<i className="fa fa-angle-double-left" aria-hidden="true"></i>',
                '<i className="fa fa-angle-double-right" aria-hidden="true"></i>',
              ],
              responsive: {
                0: {
                  items: 1,
                },
                600: {
                  items: 1,
                },
                800: {
                  items: 2,
                },
                992: {
                  items: 2,
                },
                1200: {
                  items: 3,
                },
              },
            });
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="testimonials-one-sec">
                    <div className="shape1"><img src={publicUrl+"assets/images/shapes/testimonials-v1-shape1.png"} alt="" /></div>
                    <div className="shape2"><img src={publicUrl+"assets/images/shapes/testimonials-v1-shape2.png"} alt="" /></div>
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sec-title__tagline">
                                <span className="left"></span>
                                <h6>Our Testimonials</h6> <span className="right"></span>
                            </div>
                            <h2 className="sec-title__title">Our Sweet Client Say</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="testimonials-one__carousel owl-carousel owl-theme">
                                    {/* Start Testimonials One Single */}
                                    <div className="testimonials-one__single">
                                        <div className="rating">
                                            <ul>
                                                <li><span className="icon-star"></span></li>
                                                <li><span className="icon-star"></span></li>
                                                <li><span className="icon-star"></span></li>
                                                <li><span className="icon-star"></span></li>
                                                <li><span className="icon-star-1"></span></li>
                                            </ul>
                                        </div>
                                        <div className="text-box">
                                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim
                                                veniam, quis nostrupidatat exercitation ullamco laboris nisi a ut aliquip ex ea
                                                commodo a consequat. reprehenderit in voluptate velit esse cillum dolore eu
                                                fugiat nulla pariatur. Excepteur sint occaecat non proident,</p>
                                        </div>
                                        <div className="client-info">
                                            <div className="img-box">
                                                <img src={publicUrl+"assets/images/testimonial/testimonials-v1-img1.jpg"} alt="" />
                                            </div>

                                            <div className="title-box">
                                                <h2>Dani Smith</h2>
                                                <span>Founder, Seo</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Testimonials One Single */}

                                    {/* Start Testimonials One Single */}
                                    <div className="testimonials-one__single">
                                        <div className="rating">
                                            <ul>
                                                <li><span className="icon-star"></span></li>
                                                <li><span className="icon-star"></span></li>
                                                <li><span className="icon-star"></span></li>
                                                <li><span className="icon-star"></span></li>
                                                <li><span className="icon-star-1"></span></li>
                                            </ul>
                                        </div>
                                        <div className="text-box">
                                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim
                                                veniam, quis nostrupidatat exercitation ullamco laboris nisi a ut aliquip ex ea
                                                commodo a consequat. reprehenderit in voluptate velit esse cillum dolore eu
                                                fugiat nulla pariatur. Excepteur sint occaecat non proident,</p>
                                        </div>
                                        <div className="client-info">
                                            <div className="img-box">
                                                <img src={publicUrl+"assets/images/testimonial/testimonials-v1-img2.jpg"} alt="" />
                                            </div>

                                            <div className="title-box">
                                                <h2>Jhon Smith</h2>
                                                <span>Founder, Seo</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Testimonials One Single */}

                                    {/* Start Testimonials One Single */}
                                    <div className="testimonials-one__single">
                                        <div className="rating">
                                            <ul>
                                                <li><span className="icon-star"></span></li>
                                                <li><span className="icon-star"></span></li>
                                                <li><span className="icon-star"></span></li>
                                                <li><span className="icon-star"></span></li>
                                                <li><span className="icon-star-1"></span></li>
                                            </ul>
                                        </div>
                                        <div className="text-box">
                                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim
                                                veniam, quis nostrupidatat exercitation ullamco laboris nisi a ut aliquip ex ea
                                                commodo a consequat. reprehenderit in voluptate velit esse cillum dolore eu
                                                fugiat nulla pariatur. Excepteur sint occaecat non proident,</p>
                                        </div>
                                        <div className="client-info">
                                            <div className="img-box">
                                                <img src={publicUrl+"assets/images/testimonial/testimonials-v1-img3.jpg"} alt="" />
                                            </div>

                                            <div className="title-box">
                                                <h2>David Cooper</h2>
                                                <span>Founder, Seo</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Testimonials One Single */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}