import React from 'react';

export default class ContactForm extends React.Component {
    render(){
        return (
            <>
                <div className="contact-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-5">
                                <div className="contact-page__content">
                                    <div className="title">
                                        <h2>Get In Touch</h2>
                                    </div>

                                    <div className="contact-page__content-single">
                                        <div className="contact-page__content-single-inner">
                                            <div className="icon-box">
                                                <span className="icon-pin"></span>
                                            </div>

                                            <div className="content-box">
                                                <h2>Address</h2>
                                                <p>46 suvastu arcade, 3rd Floor <br /> palace road, London.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="contact-page__content-single">
                                        <div className="contact-page__content-single-inner">
                                            <div className="icon-box">
                                                <span className="icon-phone-call-1"></span>
                                            </div>

                                            <div className="content-box">
                                                <h2>Phone</h2>
                                                <p className="number1"><a href="tel:123456789">88 256 256 2584</a></p>
                                                <p className="number2"><a href="tel:123456789">88 256 256 2584</a></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="contact-page__content-single">
                                        <div className="contact-page__content-single-inner">
                                            <div className="icon-box">
                                                <span className="icon-email"></span>
                                            </div>

                                            <div className="content-box">
                                                <h2>Email </h2>
                                                <p className="email1"><a href="mailto:info@madina.com">info@madina.com</a></p>
                                                <p className="email2"><a href="mailto:info@madina.com">info@madina.com</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-8 col-lg-8 col-md-7">
                                <div className="contact-page__form">
                                    <form action="#" className="comment-one__form contact-form-validated" novalidate="novalidate">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="comment-form__input-box">
                                                    <input type="text" placeholder="Full name" name="name" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="comment-form__input-box">
                                                    <input type="email" placeholder="Email address" name="email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="comment-form__input-box">
                                                    <input type="text" placeholder="Phone" name="phone" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6">
                                                <div className="comment-form__input-box">
                                                    <input type="text" placeholder="Subject" name="subject" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12">
                                                <div className="comment-form__input-box text-message-box">
                                                    <textarea name="message" placeholder="Your Message"></textarea>
                                                </div>

                                                <button className="thm-btn comment-form__btn" data-text="Send Message +"
                                                    type="submit" data-loading-text="Please wait...">Send Message +</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}