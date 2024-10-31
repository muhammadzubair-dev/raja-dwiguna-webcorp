import React from 'react';
import {Link} from 'react-router-dom';

export default class ProjectOne extends React.Component {
    componentDidMount() {

        const $ = window.$;

        $(window).on("load", function () {
            projectMasonaryLayout();
        });
        
        function projectMasonaryLayout() {
            if ($('.masonary-layout').length) {
              $('.masonary-layout').isotope({
                layoutMode: 'masonry'
              });
            }
            if ($('.post-filter').length) {
              $('.post-filter li').children('.filter-text').on('click', function () {
                var Self = $(this);
                var selector = Self.parent().attr('data-filter');
                $('.post-filter li').removeClass('active');
                Self.parent().addClass('active');
                $('.filter-layout').isotope({
                  filter: selector,
                  animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                  }
                });
                return false;
              });
            }
        
            if ($('.post-filter.has-dynamic-filters-counter').length) {
              // var allItem = $('.single-filter-item').length;
              var activeFilterItem = $('.post-filter.has-dynamic-filters-counter').find('li');
              activeFilterItem.each(function () {
                var filterElement = $(this).data('filter');
                var count = $('.filter-layout').find(filterElement).length;
                $(this).children('.filter-text').append('<span className="count">' + count + '</span>');
              });
            };
        }

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
                <section className="project-one-sec">
                    <div className="shape1"><img src={publicUrl+"assets/images/shapes/project-v1-shape1.png"} alt="" /></div>
                    <div className="shape2"><img src={publicUrl+"assets/images/shapes/project-v1-shape2.png"} alt="" /></div>
                    <div className="container-fluid">
                        <div className="sec-title text-center">
                            <div className="sec-title__tagline">
                                <span className="left"></span>
                                <h6>Our project</h6> <span className="right"></span>
                            </div>
                            <h2 className="sec-title__title">Our Working Project</h2>
                        </div>

                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                {/* Start project One Menu Box */}
                                <div className="project-one__menu-box">
                                    <ul className="project-filter clearfix post-filter has-dynamic-filters-counter">
                                        <li data-filter=".filter-item" className="active">
                                            <span className="filter-text"> <i className="icon-hammer"></i> All Project</span>
                                        </li>
                                        <li data-filter=".factory"><span className="filter-text"> <i className="icon-wrench"></i>Factory</span></li>
                                        <li data-filter=".offices"><span className="filter-text"> <i className="icon-surgery"></i>Offices </span></li>
                                        <li data-filter=".interios"><span className="filter-text"> <i className="icon-line-chart"></i>Interios</span></li>
                                        <li data-filter=".bulding"><span className="filter-text"> <i className="icon-hotel"></i>Bulding</span></li>
                                    </ul>
                                </div>
                                {/* End project Menu Box */}
                            </div>
                        </div>


                        <div className="row filter-layout masonary-layout">
                            {/* Start project One Single */}
                            <div className="col-xl-3 col-lg-3 col-md-6 filter-item factory bulding">
                                <div className="project-one__single">
                                    <div className="project-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/project/project-v1-img1.jpg"} alt="" />
                                            <div className="project-one__link">
                                                <a className="img-popup" href={publicUrl+"assets/images/project/project-v1-img1.jpg"}>
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
                            <div className="col-xl-3 col-lg-3 col-md-6 filter-item interios offices factory">
                                <div className="project-one__single">
                                    <div className="project-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/project/project-v1-img2.jpg"} alt="" />
                                            <div className="project-one__link">
                                                <a className="img-popup" href={publicUrl+"assets/images/project/project-v1-img2.jpg"}>
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
                            <div className="col-xl-3 col-lg-3 col-md-6 filter-item interios factory bulding">
                                <div className="project-one__single">
                                    <div className="project-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/project/project-v1-img3.jpg"} alt="" />
                                            <div className="project-one__link">
                                                <a className="img-popup" href={publicUrl+"assets/images/project/project-v1-img3.jpg"}>
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
                            <div className="col-xl-3 col-lg-3 col-md-6 filter-item bulding offices">
                                <div className="project-one__single">
                                    <div className="project-one__single-img">
                                        <div className="inner">
                                            <img src={publicUrl+"assets/images/project/project-v1-img4.jpg"} alt="" />
                                            <div className="project-one__link">
                                                <a className="img-popup" href={publicUrl+"assets/images/project/project-v1-img4.jpg"}>
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