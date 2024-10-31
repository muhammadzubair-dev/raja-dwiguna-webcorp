import React from 'react';
import {Link} from 'react-router-dom';

export default class PricingOne extends React.Component {
    render(){
        return (
            <>
                <section className="pricing-plan-one">
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sec-title__tagline">
                                <span className="left"></span>
                                <h6>PRICING & PLANS</h6>
                                <span className="right"></span>
                            </div>
                            <h2 className="sec-title__title">Pricing Plan</h2>
                        </div>
                        <div className="row">
                            {/* Start Single Pricing Plan One */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="pricing-plan-one__single">
                                    <div className="pricing-plan-one__single-inner">
                                        <div className="table-header text-center">
                                            <div className="category-wrapper">
                                                <h3>Start Plan</h3>
                                            </div>
                                            <h2>$79.99</h2>
                                            <p>Per Month</p>
                                        </div>

                                        <div className="table-content">
                                            <ul>
                                                <li>100% Insurance</li>
                                                <li>Custom Business Rules</li>
                                                <li>Professional Design</li>
                                                <li>Design and Build</li>
                                                <li>10 Year maintenance</li>
                                            </ul>
                                        </div>

                                        <div className="table-footer">
                                            <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn" data-text="Buy Now +">Buy Now +</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Pricing Plan One */}

                            {/* Start Single Pricing Plan One */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="pricing-plan-one__single">
                                    <div className="pricing-plan-one__single-inner">
                                        <div className="table-header text-center">
                                            <div className="category-wrapper">
                                                <h3>Standard Plan</h3>
                                            </div>
                                            <h2>$89.99</h2>
                                            <p>Per Month</p>
                                        </div>

                                        <div className="table-content">
                                            <ul>
                                                <li>100% Insurance</li>
                                                <li>Custom Business Rules</li>
                                                <li>Professional Design</li>
                                                <li>Design and Build</li>
                                                <li>10 Year maintenance</li>
                                            </ul>
                                        </div>

                                        <div className="table-footer">
                                            <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn" data-text="Buy Now +">Buy Now +</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Pricing Plan One */}

                            {/* Start Single Pricing Plan One */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.5s">
                                <div className="pricing-plan-one__single">
                                    <div className="pricing-plan-one__single-inner">
                                        <div className="table-header text-center">
                                            <div className="category-wrapper">
                                                <h3>Premium Plan</h3>
                                            </div>
                                            <h2>$99.99</h2>
                                            <p>Per Month</p>
                                        </div>

                                        <div className="table-content">
                                            <ul>
                                                <li>100% Insurance</li>
                                                <li>Custom Business Rules</li>
                                                <li>Professional Design</li>
                                                <li>Design and Build</li>
                                                <li>10 Year maintenance</li>
                                            </ul>
                                        </div>

                                        <div className="table-footer">
                                            <Link to={process.env.PUBLIC_URL + `/`} className="thm-btn" data-text="Buy Now +">Buy Now +</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Pricing Plan One */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}