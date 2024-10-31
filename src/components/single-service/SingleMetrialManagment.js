import React from 'react';
import {Link} from 'react-router-dom';
import ButtonBox from './ButtonBox';
import ServiceContactBox from './ServiceContactBox';
import ServiceSearch from './ServiceSearch';

export default class SingleMetrialManagment extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($(".tabs-box").length) {
            $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
              e.preventDefault();
              var target = $($(this).attr("data-tab"));
        
              if ($(target).is(":visible")) {
                return false;
              } else {
                target
                  .parents(".tabs-box")
                  .find(".tab-buttons")
                  .find(".tab-btn")
                  .removeClass("active-btn");
                $(this).addClass("active-btn");
                target
                  .parents(".tabs-box")
                  .find(".tabs-content")
                  .find(".tab")
                  .fadeOut(0);
                target
                  .parents(".tabs-box")
                  .find(".tabs-content")
                  .find(".tab")
                  .removeClass("active-tab");
                $(target).fadeIn(300);
                $(target).addClass("active-tab");
              }
            });
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="services-details-page">
                    <div className="container">
                        <div className="row">
                            {/* Start Services Details Content */}
                            <div className="col-xl-7 col-lg-7">
                                <div className="services-details__content">
                                    <div className="services-details__img1">
                                        <img src={publicUrl+"assets/images/services/services-details-img1.jpg"} alt="" />
                                    </div>
                                    <div className="services-details__text-box1">
                                        <div className="title">
                                            <h2>General Contracting</h2>
                                        </div>
                                        <p className="text-1">Labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nexercitatiullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                            dolreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                            Excepteur sint </p>

                                        <p className="text-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                            voluptate </p>
                                    </div>

                                    <div className="services-details__text-box2">
                                        <div className="row">
                                            <div className="col-xl-5">
                                                <div className="services-details__text-box2-img">
                                                    <img src={publicUrl+"assets/images/services/services-details-img2.jpg"} alt="" />
                                                </div>
                                            </div>

                                            <div className="col-xl-7">
                                                <div className="services-details__text-box2-content">
                                                    <div className="title">
                                                        <h2>Planning Work</h2>
                                                    </div>
                                                    <div className="text">
                                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                            dolore eu fugiat </p>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-tick"></span>
                                                            </div>

                                                            <div className="text">
                                                                <p>Ut enim ad minim veniam</p>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-tick"></span>
                                                            </div>

                                                            <div className="text">
                                                                <p> voluptate velit esse cillum dolore eu </p>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="icon">
                                                                <span className="icon-tick"></span>
                                                            </div>

                                                            <div className="text">
                                                                <p>Kuis nostrud exercitation ullamco </p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="services-details__text-box3">
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit quia
                                            consequuntur magni dolores eos qui ratione volsnesciunt.Neque porro quisquam est,
                                            qui dolorem ipsum quia dolor sit amet, consectetur, sed quia non numquam eius modi
                                            tempora incidunt ut labore et dolore </p>

                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-tick"></span>
                                                </div>

                                                <div className="text">
                                                    <p>Nostrud exercitation ullamco laboris consequat.reprehenderit in voluptate
                                                    </p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-tick"></span>
                                                </div>

                                                <div className="text">
                                                    <p>velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                        occaecat
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>


                                    {/* Start Services Details Tab Box */}
                                    <div className="services-details__tab-box">
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="services-details__tab tabs-box">
                                                    <div className="services-details__tab-button">
                                                        <ul className="tab-buttons clearfix">
                                                            <li data-tab="#materials" className="tab-btn active-btn">
                                                                <h4>Quality Materials</h4>
                                                            </li>
                                                            <li data-tab="#design " className="tab-btn">
                                                                <h4>Interior Design</h4>
                                                            </li>
                                                            <li data-tab="#care" className="tab-btn">
                                                                <h4>Personal Care</h4>
                                                            </li>
                                                            <li data-tab="#support" className="tab-btn">
                                                                <h4>Super Support</h4>
                                                            </li>
                                                        </ul>
                                                    </div>


                                                    <div className="tabs-content">
                                                        {/* Start Tab */}
                                                        <div className="tab active-tab" id="materials">
                                                            <div className="services-details__tab-content-item">
                                                                <div className="quality-materials-tab-box">
                                                                    <div className="row">
                                                                        <div className="col-xl-6">
                                                                            <div className="quality-materials-tab-box-img">
                                                                                <img src={publicUrl+"assets/images/services/services-details-img3.jpg"} alt="" />
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-xl-6">
                                                                            <div className="quality-materials-tab-box-content">
                                                                                <p className="text1">Consequuntur magni dolores eos
                                                                                    qui ratione volsnesciunt.Neq quisquam est,
                                                                                    qui dolorem ipsum quia dolor sit amet,Nemo
                                                                                    enim ipsvoluptatequia voluptas sit</p>

                                                                                <p className="text2">aliquam quaerat
                                                                                    voluptatem. consequuntur
                                                                                    magni dolores eos qui ratione
                                                                                    volsnesciunt.Neque porro
                                                                                    quisquam est, qui quia dolor sit </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* End Tab */}

                                                        {/* Start Tab */}
                                                        <div className="tab" id="design">
                                                            <div className="services-details__tab-content-item">
                                                                <div className="interior-design-tab-box">
                                                                    <div className="row">
                                                                        <div className="col-xl-6">
                                                                            <div className="interior-design-tab-box-img">
                                                                                <img src={publicUrl+"assets/images/services/services-details-img4.jpg"} alt="" />
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-xl-6">
                                                                            <div className="interior-design-tab-box-content">
                                                                                <p className="text1">It is a long established fact
                                                                                    that a reader will be distracted by the
                                                                                    readable content of a page when looking at
                                                                                    its layout. The point of using Lorem Ipsum
                                                                                </p>

                                                                                <p className="text2">There are many variations of
                                                                                    passages of Lorem Ipsum available, but the
                                                                                    majority have suffered alteration in some
                                                                                    form, </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* End Tab */}

                                                        {/* Start Tab */}
                                                        <div className="tab" id="care">
                                                            <div className="services-details__tab-content-item">
                                                                <div className="personal-care-tab-box">
                                                                    <div className="row">
                                                                        <div className="col-xl-6">
                                                                            <div className="personal-care-tab-box-img">
                                                                                <img src={publicUrl+"assets/images/services/services-details-img5.jpg"} alt="" />
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-xl-6">
                                                                            <div className="personal-care-tab-box-content">
                                                                                <p className="text1">Contrary to popular belief,
                                                                                    Lorem Ipsum is not simply random text. It
                                                                                    has roots in a piece of classical Latin
                                                                                    literature from 45 BC, making it over 2000
                                                                                    years old</p>

                                                                                <p className="text2">The standard chunk of Lorem
                                                                                    Ipsum used since the 1500s is reproduced
                                                                                    below for those interested. Sections 1.10.32
                                                                                    and 1.10.33 from</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* End Tab */}

                                                        {/* Start Tab */}
                                                        <div className="tab" id="support">
                                                            <div className="services-details__tab-content-item">
                                                                <div className="super-support-tab-box">
                                                                    <div className="row">
                                                                        <div className="col-xl-12">
                                                                            <div className="super-support-tab-box-form">
                                                                                <form action="/assets/inc/sendemail.php"
                                                                                    className="comment-one__form contact-form-validated"
                                                                                    novalidate="novalidate">
                                                                                    <div className="row">
                                                                                        <div className="col-xl-6 col-lg-6">
                                                                                            <div
                                                                                                className="comment-form__input-box">
                                                                                                <input type="text"
                                                                                                    placeholder="Full name"
                                                                                                    name="name" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-xl-6 col-lg-6">
                                                                                            <div
                                                                                                className="comment-form__input-box">
                                                                                                <input type="email"
                                                                                                    placeholder="Email address"
                                                                                                    name="email" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-xl-12 col-lg-12">
                                                                                            <div
                                                                                                className="comment-form__input-box">
                                                                                                <textarea name="message"
                                                                                                    placeholder="Your Message"></textarea>
                                                                                            </div>
                                                                                            <button
                                                                                                className="thm-btn comment-form__btn"
                                                                                                data-text="Send Message +"
                                                                                                type="submit"
                                                                                                data-loading-text="Please wait...">Send
                                                                                                Message
                                                                                                +</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* End Tab */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Services Details Tab Box */}
                                </div>
                            </div>
                            {/* End Services Details Content */}

                            {/* Start Services Details Sidebar */}
                            <div className="col-xl-5 col-lg-5">
                                <div className="services-details__sidebar">
                                    <ServiceSearch />

                                    {/* Start Services Details Sidebar Single */}
                                    <div className="services-details__sidebar-single services-details-category">
                                        <div className="title">
                                            <h2>Services Category</h2>
                                        </div>
                                        <ul className="services-details-category-list">
                                            <li><Link to={process.env.PUBLIC_URL + `/general-contracting`}>General Contracting<span className="icon-right-arrow"></span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/metrial-managment`} className="active">Metrial Managment
                                                <span className="icon-right-arrow"></span></Link>
                                            </li>
                                            <li><Link to={process.env.PUBLIC_URL + `/building-renovation`}>Building Renovation<span className="icon-right-arrow"></span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/architecture-design`}>Architecture Design<span className="icon-right-arrow"></span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/multistory-build`}>Multistory Build<span className="icon-right-arrow"></span></Link></li>
                                        </ul>
                                    </div>
                                    {/* End Services Details Sidebar Single */}

                                    <ButtonBox />
                                    <ServiceContactBox />
                                </div>
                            </div>
                            {/* End Services Details Sidebar */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}