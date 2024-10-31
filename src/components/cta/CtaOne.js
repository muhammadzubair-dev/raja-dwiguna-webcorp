import React from 'react';
import {Link} from 'react-router-dom';

export default class CtaOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="cta-one">
                    <div className="cta-one__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/update1.0/cta-v1-bg.jpg)'}}></div>
                    <div className="container">
                        <div className="row">
                            <div className="cta-one__inner text-center">
                                <h2>We Provide High Performance Innovate <br /> Machines Profitable Solutions</h2>
                                <ul className="cta-one__list">
                                    <li><p>TECHNOLOGIES</p></li>
                                    <li><p>INDUSTRIES</p></li>
                                    <li><p>FACTORY</p></li>
                                </ul>

                                <div className="cta-one__btn-box">
                                    <div className="btn-box1">
                                        <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn" data-text="Read More +">Read More +</Link>
                                    </div>

                                    <div className="btn-box2">
                                        <Link to={process.env.PUBLIC_URL + `/contact`} className="thm-btn" data-text="Contact Now +">Contact Now +</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}