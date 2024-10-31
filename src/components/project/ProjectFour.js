import React from 'react';
import {Link} from 'react-router-dom';

export default class ProjectFour extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($(".img-popup").length) {
            var groups = {};
            $(".img-popup").each(function () {
              var id = parseInt($(this).attr("data-group"), 10);
        
              if (!groups[id]) {
                groups[id] = [];
              }
        
              groups[id].push(this);
            });
        
            $.each(groups, function () {
              $(this).magnificPopup({
                type: "image",
                closeOnContentClick: true,
                closeBtnInside: false,
                gallery: {
                  enabled: true,
                },
              });
            });
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="project-one-sec project-one-sec--three">
                    <div className="container">
                        <div className="row">
                            {/* Start project One Single */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="project-one__single wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="project-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/project/project-v3-img1.jpg"} alt="" />
                                            <div className="project-one__link">
                                                <a className="img-popup" href={publicUrl+"assets/images/project/project-v3-img1.jpg"}>
                                                    <span className="icon-plus-sign"></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <h2><Link to={process.env.PUBLIC_URL + `/portfolio-details`}>Texture Interture</Link></h2>
                                            <p>Building Interior</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End project One Single */}

                            {/* Start project One Single */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="project-one__single wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="project-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/project/project-v3-img2.jpg"} alt="" />
                                            <div className="project-one__link">
                                                <a className="img-popup" href={publicUrl+"assets/images/project/project-v3-img2.jpg"}>
                                                    <span className="icon-plus-sign"></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <h2><Link to={process.env.PUBLIC_URL + `/portfolio-details`}>Texture Interture</Link></h2>
                                            <p>Building Interior</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End project One Single */}

                            {/* Start project One Single */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="project-one__single wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="project-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/project/project-v3-img3.jpg"} alt="" />
                                            <div className="project-one__link">
                                                <a className="img-popup" href={publicUrl+"assets/images/project/project-v3-img3.jpg"}>
                                                    <span className="icon-plus-sign"></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <h2><Link to={process.env.PUBLIC_URL + `/portfolio-details`}>Texture Interture</Link></h2>
                                            <p>Building Interior</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End project One Single */}

                            {/* Start project One Single */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="project-one__single wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="project-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/project/project-v3-img4.jpg"} alt="" />
                                            <div className="project-one__link">
                                                <a className="img-popup" href={publicUrl+"assets/images/project/project-v3-img4.jpg"}>
                                                    <span className="icon-plus-sign"></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <h2><Link to={process.env.PUBLIC_URL + `/portfolio-details`}>Texture Interture</Link></h2>
                                            <p>Building Interior</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End project One Single */}

                            {/* Start project One Single */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="project-one__single wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="project-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/project/project-v3-img5.jpg"} alt="" />
                                            <div className="project-one__link">
                                                <a className="img-popup" href={publicUrl+"assets/images/project/project-v3-img5.jpg"}>
                                                    <span className="icon-plus-sign"></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <h2><Link to={process.env.PUBLIC_URL + `/portfolio-details`}>Texture Interture</Link></h2>
                                            <p>Building Interior</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End project One Single */}

                            {/* Start project One Single */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="project-one__single wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="project-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/project/project-v3-img6.jpg"} alt="" />
                                            <div className="project-one__link">
                                                <a className="img-popup" href={publicUrl+"assets/images/project/project-v3-img6.jpg"}>
                                                    <span className="icon-plus-sign"></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <h2><Link to={process.env.PUBLIC_URL + `/portfolio-details`}>Texture Interture</Link></h2>
                                            <p>Building Interior</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End project One Single */}

                            {/* Start project One Single */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="project-one__single wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="project-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/project/project-v3-img7.jpg"} alt="" />
                                            <div className="project-one__link">
                                                <a className="img-popup" href={publicUrl+"assets/images/project/project-v3-img7.jpg"}>
                                                    <span className="icon-plus-sign"></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <h2><Link to={process.env.PUBLIC_URL + `/portfolio-details`}>Texture Interture</Link></h2>
                                            <p>Building Interior</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End project One Single */}

                            {/* Start project One Single */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="project-one__single wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="project-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/project/project-v3-img8.jpg"} alt="" />
                                            <div className="project-one__link">
                                                <a className="img-popup" href={publicUrl+"assets/images/project/project-v3-img8.jpg"}>
                                                    <span className="icon-plus-sign"></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <h2><Link to={process.env.PUBLIC_URL + `/portfolio-details`}>Texture Interture</Link></h2>
                                            <p>Building Interior</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End project One Single */}

                            {/* Start project One Single */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="project-one__single wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="project-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/project/project-v3-img9.jpg"} alt="" />
                                            <div className="project-one__link">
                                                <a className="img-popup" href={publicUrl+"assets/images/project/project-v3-img9.jpg"}>
                                                    <span className="icon-plus-sign"></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <h2><Link to={process.env.PUBLIC_URL + `/portfolio-details`}>Texture Interture</Link></h2>
                                            <p>Building Interior</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End project One Single */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}