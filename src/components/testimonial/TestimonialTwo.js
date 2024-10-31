import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Thumbs } from "swiper";

const TestimonialTwo = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    let publicUrl = process.env.PUBLIC_URL+'/'
    return (
        <>
        <section className="testimonials-two-sec">
            <div className="testimonials-two__left-img wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                <img src={publicUrl+"assets/images/testimonial/testimonials-v2-img2.png"} alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4"></div>
                    {/* Start Testimonials Two Right */}
                    <div className="col-xl-8 col-lg-8">
                        <div className="testimonials-two__right">
                            <div className="sec-title">
                                <div className="sec-title__tagline">
                                    <h6>Testimonials</h6> <span className="right"></span>
                                </div>
                                <h2 className="sec-title__title">Our Client Says</h2>
                            </div>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                loop={true}
                                spaceBetween={20}
                                slidesPerView={3}
                                speed={1400}
                                freeMode={true}
                                watchSlidesVisibility={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Pagination, Thumbs]}
                                className="swiper-container"
                                id="testimonials-two__thumb">
                                <div className="swiper-wrapper">

                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonials-two__right-img">
                                            <div className="inner">
                                                <img src={publicUrl+"assets/images/testimonial/testimonials-v2-1.png"} alt="" />
                                            </div>
                                            <div className="icon">
                                                <span className="fa fa-quote-left"></span>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonials-two__right-img">
                                            <div className="inner">
                                                <img src={publicUrl+"assets/images/testimonial/testimonials-v2-2.png"} alt="" />
                                            </div>
                                            <div className="icon">
                                                <span className="fa fa-quote-left"></span>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonials-two__right-img">
                                            <div className="inner">
                                                <img src={publicUrl+"assets/images/testimonial/testimonials-v2-3.png"} alt="" />
                                            </div>
                                            <div className="icon">
                                                <span className="fa fa-quote-left"></span>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                </div>
                            </Swiper>


                            <Swiper
                                loop={true}
                                spaceBetween={10}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Pagination, Thumbs]}
                                pagination={{
                                    el: '#testimonials-two__carousel-pagination',
                                    type: 'bullets',
                                    clickable: true
                                }} 
                                className="testimonials-two-content"
                                >
                                <div className="swiper-container" id="testimonials-two__carousel">
                                    <div className="swiper-wrapper">
                                        {/* Start Swiper Slide */}
                                        <SwiperSlide className="swiper-slide">
                                            <div className="testimonials-two-content__single">
                                                <div className="testimonials-two-content__single-inner">
                                                    <div className="icon-box">
                                                        <span className="fa fa-quote-left"></span>
                                                    </div>
                                                    <div className="img-box">
                                                        <img src={publicUrl+"assets/images/testimonial/testimonials-v2-4.png"} alt="" />
                                                    </div>

                                                    <div className="content-box">
                                                        <h4>Green us fish rule third dry his for. Created signs under.
                                                            Day
                                                            shall yearswhich rule made first, make a our night life herb
                                                            midst isn't fish give lights land </h4>

                                                        <div className="name">
                                                            <h4>Mss. Sumi Aktar</h4>
                                                            <span>Mountain Inc.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        {/* End Swiper Slide */}

                                        {/* Start Swiper Slide */}
                                        <SwiperSlide className="swiper-slide">
                                            <div className="testimonials-two-content__single">
                                                <div className="testimonials-two-content__single-inner">
                                                    <div className="icon-box">
                                                        <span className="fa fa-quote-left"></span>
                                                    </div>
                                                    <div className="img-box">
                                                        <img src={publicUrl+"assets/images/testimonial/testimonials-v2-5.png"} alt="" />
                                                    </div>

                                                    <div className="content-box">
                                                        <h4>Green us fish rule third dry his for. Created signs under.
                                                            Day
                                                            shall yearswhich rule made first, make a our night life herb
                                                            midst isn't fish give lights land </h4>

                                                        <div className="name">
                                                            <h4>Mkael Dodson</h4>
                                                            <span>Mountain Inc.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        {/* End Swiper Slide */}

                                        {/* Start Swiper Slide */}
                                        <SwiperSlide className="swiper-slide">
                                            <div className="testimonials-two-content__single">
                                                <div className="testimonials-two-content__single-inner">
                                                    <div className="icon-box">
                                                        <span className="fa fa-quote-left"></span>
                                                    </div>
                                                    <div className="img-box">
                                                        <img src={publicUrl+"assets/images/testimonial/testimonials-v2-6.png"} alt="" />
                                                    </div>

                                                    <div className="content-box">
                                                        <h4>Green us fish rule third dry his for. Created signs under.
                                                            Day
                                                            shall yearswhich rule made first, make a our night life herb
                                                            midst isn't fish give lights land </h4>

                                                        <div className="name">
                                                            <h4>Dani Smith</h4>
                                                            <span>Mountain Inc.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        {/* End Swiper Slide */}
                                    </div>
                                </div>
                                <div id="testimonials-two__carousel-pagination"></div>

                                {/* Testimonials Two Carousel Pagination */}
                            </Swiper>
                        </div>
                    </div>
                    {/* End Testimonials Two Right */}
                </div>
            </div>
        </section>
    </>
    )
}

export default TestimonialTwo;