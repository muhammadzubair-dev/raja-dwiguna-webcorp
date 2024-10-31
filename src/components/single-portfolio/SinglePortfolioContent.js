import React from 'react';
import {Link} from 'react-router-dom';
import PortfolioAdBanner from './PortfolioAdBanner';
import PortfolioNewsletter from './PortfolioNewsletter';
import PortfolioTag from './PortfolioTag';

export default class SinglePortfolioContent extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($(".video-popup").length) {
            $(".video-popup").magnificPopup({
              type: "iframe",
              mainClass: "mfp-fade",
              removalDelay: 160,
              preloader: true,
        
              fixedContentPos: false,
            });
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="protfolio-details">
                    <div className="container">
                        <div className="row">
                            {/* Start Protfolio Details Content */}
                            <div className="col-xl-7 col-lg-7">
                                <div className="protfolio-details__content">
                                    <div className="protfolio-details__content-img1">
                                        <img src={publicUrl+"assets/images/project/protfolio-details-img1.jpg"} alt="" />
                                    </div>

                                    <div className="protfolio-details__content-text1">
                                        <p>Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nexercitatiullamco
                                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolreprehenderit in
                                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sinoccaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id elaborum.
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium </p>
                                    </div>

                                    <div className="protfolio-details__content-text2">
                                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </p>
                                    </div>

                                    <div className="protfolio-details__content-img2">
                                        <img src={publicUrl+"assets/images/project/protfolio-details-img2.jpg"} alt="" />
                                        <div className="icon wow zoomIn" data-wow-delay="300ms" data-wow-duration="1500ms">
                                            <a className="video-popup" title=" Video" href="https://www.youtube.com/watch?v=p25gICT63ek">
                                                <span className="icon-play-button"></span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="protfolio-details__content-text3">
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit quia
                                            consequuntur magni dolores eos qui ratione volsnesciunt.Neque porro quisquam est,
                                            qui dolorem ipsum quia dolor sit amet, consectetur, sed quia non numquam eius modi
                                            tempora incidunt ut labore et dolore aliquam quaerat voluptatem.</p>
                                    </div>

                                    <div className="protfolio-details__content-img3">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="protfolio-details__content-img3-single">
                                                    <img src={publicUrl+"assets/images/project/protfolio-details-img3.jpg"} alt="" />
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="protfolio-details__content-img3-single">
                                                    <img src={publicUrl+"assets/images/project/protfolio-details-img4.jpg"} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="protfolio-details__content-text4">
                                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptat velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid proident, sunt
                                            in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatistra
                                            iunde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                                            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto </p>
                                    </div>

                                    <div className="protfolio-details__content-text5">
                                        <p>aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui atione
                                            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum qdolor sit
                                            amet, consectetur, adipisci velit, sed quia non numquam eius modi te incidunt </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Protfolio Details Content */}

                            {/* Start Protfolio Details Sidebar */}
                            <div className="col-xl-5 col-lg-5">
                                <div className="protfolio-details__sidebar">
                                    {/* Start Protfolio Details Sidebar Single */}
                                    <div className="protfolio-details__sidebar-single protfolio-details-category">
                                        <div className="title">
                                            <h2>Category</h2>
                                        </div>
                                        <ul className="protfolio-details-category-list">
                                            <li><Link to={process.env.PUBLIC_URL + `/`} className="active">Home Buying<span className="icon-right-arrow"></span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/`}>Metrial Managment<span className="icon-right-arrow"></span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/`}>Management Property<span className="icon-right-arrow"></span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/`}>Escrow Services<span className="icon-right-arrow"></span></Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + `/`}>Mortgage Service<span className="icon-right-arrow"></span></Link></li>
                                        </ul>
                                    </div>
                                    {/* End Protfolio Details Sidebar Single */}

                                    <PortfolioAdBanner />
                                    <PortfolioTag />
                                    <PortfolioNewsletter />
                                </div>
                            </div>
                            {/* End Protfolio Details Sidebar */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}