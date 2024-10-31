import React from 'react';
import {Link} from 'react-router-dom';

export default class FeatureTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="feature-two-sec">
                    <div className="feature-two__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/benefits-v1-bg.jpg)'}}></div>
                    <div className="shape3 float-bob-y"><img src={publicUrl+"assets/images/shapes/feature-v2-shape1.png"} alt="" /></div>
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sec-title__tagline">
                                <span className="left"></span>
                                <h6>Our Feature</h6> <span className="right"></span>
                            </div>
                            <h2 className="sec-title__title">Why Choose Us</h2>
                        </div>
                        <div className="row">
                            {/* Start Feature Two Single */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="feature-two__single">
                                    <div className="shape1"></div>
                                    <div className="shape2"></div>
                                    <div className="icon">
                                        <span className="icon-crane"></span>
                                    </div>
                                    <h3><Link to={process.env.PUBLIC_URL + `/`}>Coal Excavation</Link></h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam, </p>
                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/`}><span className="icon-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Feature Two Single */}

                            {/* Start Feature Two Single */}
                            <div className="col-xl-3  col-lg-6 col-md-6">
                                <div className="feature-two__single">
                                    <div className="shape1"></div>
                                    <div className="shape2"></div>
                                    <div className="icon">
                                        <span className="icon-interior-design-1"></span>
                                    </div>
                                    <h3><Link to={process.env.PUBLIC_URL + `/`}>House Planning</Link></h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam, </p>
                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/`}><span className="icon-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Feature Two Single */}

                            {/* Start Feature Two Single */}
                            <div className="col-xl-3  col-lg-6 col-md-6">
                                <div className="feature-two__single">
                                    <div className="shape1"></div>
                                    <div className="shape2"></div>
                                    <div className="icon">
                                        <span className="icon-surgery"></span>
                                    </div>
                                    <h3><Link to={process.env.PUBLIC_URL + `/`}>Mine Factory</Link></h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam, </p>
                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/`}><span className="icon-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Feature Two Single */}

                            {/* Start Feature Two Single */}
                            <div className="col-xl-3  col-lg-6 col-md-6">
                                <div className="feature-two__single">
                                    <div className="shape1"></div>
                                    <div className="shape2"></div>
                                    <div className="icon">
                                        <span className="icon-painting"></span>
                                    </div>
                                    <h3><Link to={process.env.PUBLIC_URL + `/`}>Interior Design</Link></h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam, </p>
                                    <div className="btn-box">
                                        <Link to={process.env.PUBLIC_URL + `/`}><span className="icon-right-arrow-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* End Feature Two Single */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}