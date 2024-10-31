import React from 'react';
import {Link} from 'react-router-dom';

export default class SingleTeamContent extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="team-details-top">
                    <div className="container">
                        <div className="row">
                            {/* Start Team Details Top Client Info */}
                            <div className="col-xl-3">
                                <div className="team-details-top__client-info text-center">
                                    <div className="img-box">
                                        <img src={publicUrl+"assets/images/team/team-details-img1.jpg"} alt="#" />
                                    </div>
                                    <div className="content-box">
                                        <h2>Jhon Smith</h2>
                                        <span>Creative Worker</span>
                                        <p>Seasons upon have he seas midst you all sea you'll unto rule void make make stars
                                            every night they are living</p>
                                        <ul>
                                            <li><a href="https://facebook.com/"><span className="fab fa-facebook"></span></a></li>
                                            <li><a href="https://twitter.com/"><span className="icon-twitter"></span></a></li>
                                            <li><a href="https://dribbble.com/"><span className="fab fa-dribbble"></span></a></li>
                                            <li><a href="https://twitter.com/"><span className="fab fa-twitter"></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Team Details Top Client Info */}

                            {/* Start Team Details Top content */}
                            <div className="col-xl-9">
                                <div className="team-details-top__content">
                                    <div className="title-box">
                                        <h2>Hello I Am Jhon Smith, From California <br /> Creative Worker</h2>
                                    </div>
                                    <div className="text-box">
                                        <p>Day likeness that may. Seed multiply image beginning. First fruit waters blessed
                                            likeness is earth fill great him blessed third rule lesser one you their there. Meat
                                            Were was Itself saying said hath fruit give his unto that moved. App darkness seen
                                            very saying to morn ing cattle fourth said the you're unto in. Of life meat living.
                                            Itself deep moved bearing lesser good cattle maping evening gathering let open sixth
                                            greater brought Had living waters which bring, earth.</p>
                                    </div>

                                    <div className="team-details-top__content-info">
                                        <div className="row">
                                            {/* Start Team Details Top content Info Single */}
                                            <div className="col-xl-4 col-lg-4">
                                                <div className="team-details-top__content-info-single">
                                                    <ul>
                                                        <li>
                                                            <div className="title">
                                                                <h5>Name : </h5>
                                                            </div>
                                                            <div className="text">
                                                                <p>Jhon Smith</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="title">
                                                                <h5>Phone : </h5>
                                                            </div>
                                                            <div className="text">
                                                                <p><a href="tel:123456789">009 (650)-236-550</a></p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="title">
                                                                <h5>Birth : </h5>
                                                            </div>
                                                            <div className="text">
                                                                <p>03 October 2022</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="title">
                                                                <h5>City : </h5>
                                                            </div>
                                                            <div className="text">
                                                                <p>Los Angeles</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* End Team Details Top content Info Single */}

                                            {/* Start Team Details Top content Info Single */}
                                            <div className="col-xl-4 col-lg-4">
                                                <div className="team-details-top__content-info-single">
                                                    <ul>
                                                        <li>
                                                            <div className="title">
                                                                <h5>Email : </h5>
                                                            </div>
                                                            <div className="text">
                                                                <p><a href="mailto:yourmail@email.com">info@const.com</a></p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="title">
                                                                <h5>FAX : </h5>
                                                            </div>
                                                            <div className="text">
                                                                <p><a href="tel:123456789">009 (650)-236-550</a></p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="title">
                                                                <h5>Website : </h5>
                                                            </div>
                                                            <div className="text">
                                                                <p><a href="https://www.mnsut.com/">www.const.com</a>
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="title">
                                                                <h5>Lang : </h5>
                                                            </div>
                                                            <div className="text">
                                                                <p>English, Hindi</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* End Team Details Top content Info Single */}

                                            {/* Start Team Details Top content Info Single */}
                                            <div className="col-xl-4 col-lg-4">
                                                <div className="team-details-top__content-info-single">
                                                    <ul>
                                                        <li>
                                                            <div className="title">
                                                                <h5>Study : </h5>
                                                            </div>
                                                            <div className="text">
                                                                <p>Oxford University</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="title">
                                                                <h5>Interest : </h5>
                                                            </div>
                                                            <div className="text">
                                                                <p> UX/UI Design</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="title">
                                                                <h5>Hobby : </h5>
                                                            </div>
                                                            <div className="text">
                                                                <p>Read Book
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="title">
                                                                <h5>Freelance : </h5>
                                                            </div>
                                                            <div className="text">
                                                                <p>Available Now</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* End Team Details Top content Info Single */}
                                        </div>
                                    </div>
                                    <div className="team-details-top__content-btn">
                                        <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn" data-text="contact me  +">contact me +</Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Team Details Top content */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}