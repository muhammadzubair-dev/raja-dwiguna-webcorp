import React from 'react';
import {Link} from 'react-router-dom';

export default class Breadcrumb extends React.Component {
    render(){
        let heading = this.props.heading;
        let publicUrl = process.env.PUBLIC_URL+'/'
        let currentPage = this.props.currentPage ? this.props.currentPage : heading
        let Img = this.props.Img ? this.props.Img :'page-header-img.jpg'
        return (
            <>
                <section className="page-header">
                    <div className="page-header__bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/'+Img+')'}}></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="page-header__wrapper">
                                    <div className="page-header__content">
                                        <h2>{heading}</h2>
                                        <div className="page-header__menu">
                                            <ul>
                                                <li><Link to={process.env.PUBLIC_URL + `/`}>Home</Link></li>
                                                <li>{currentPage}</li>
                                            </ul>
                                        </div>
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