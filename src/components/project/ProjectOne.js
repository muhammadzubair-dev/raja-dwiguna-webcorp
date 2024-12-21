import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const settings = {
  dots: true,

  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  appendDots: (dots) => <ul>{dots}</ul>,

  autoplay: true,
  speed: 5000,

  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 3000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // infinite: true,
        // dots: true,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        // initialSslide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default class ProjectOne extends React.Component {
  componentDidMount() {
    const $ = window.$;

    $(window).on('load', function () {
      projectMasonaryLayout();
    });

    function projectMasonaryLayout() {
      if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
          layoutMode: 'masonry',
        });
      }
      if ($('.post-filter').length) {
        $('.post-filter li')
          .children('.filter-text')
          .on('click', function () {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            $('.post-filter li').removeClass('active');
            Self.parent().addClass('active');
            $('.filter-layout').isotope({
              filter: selector,
              animationOptions: {
                duration: 500,
                easing: 'linear',
                queue: false,
              },
            });
            return false;
          });
      }

      if ($('.post-filter.has-dynamic-filters-counter').length) {
        // var allItem = $('.single-filter-item').length;
        var activeFilterItem = $(
          '.post-filter.has-dynamic-filters-counter'
        ).find('li');
        activeFilterItem.each(function () {
          var filterElement = $(this).data('filter');
          var count = $('.filter-layout').find(filterElement).length;
          // $(this)
          //   .children('.filter-text')
          //   .append('<span className="count">' + count + '</span>');
        });
      }
    }

    if ($('.img-popup').length) {
      var groups = {};
      $('.img-popup').each(function () {
        var id = parseInt($(this).attr('data-group'), 10);

        if (!groups[id]) {
          groups[id] = [];
        }

        groups[id].push(this);
      });

      $.each(groups, function () {
        $(this).magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          closeBtnInside: false,
          gallery: {
            enabled: true,
          },
        });
      });
    }
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    return (
      <>
        <section className="project-one-sec" id="project-one">
          <div className="shape1">
            <img
              src={publicUrl + 'assets/images/shapes/project-v1-shape1.png'}
              alt=""
            />
          </div>
          <div className="shape2">
            <img
              src={publicUrl + 'assets/images/shapes/project-v1-shape2.png'}
              alt=""
            />
          </div>
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
                      <span className="filter-text">
                        {/* <i className="icon-hammer"></i> */}
                        All Project
                      </span>
                    </li>
                    <li data-filter=".factory">
                      <span className="filter-text">
                        {' '}
                        <i className="icon-wrench"></i>In Progress
                      </span>
                    </li>
                    <li data-filter=".offices">
                      <span className="filter-text">
                        {' '}
                        <i className="icon-surgery"></i>Finished{' '}
                      </span>
                    </li>
                    {/* <li data-filter=".interios"><span className="filter-text"> <i className="icon-line-chart"></i>Interios</span></li>
                                        <li data-filter=".bulding"><span className="filter-text"> <i className="icon-hotel"></i>Bulding</span></li> */}
                  </ul>
                </div>
                {/* End project Menu Box */}
              </div>
            </div>

            <div className="slider-container">
              <Slider {...settings}>
                {[1, 2, 3, 4].map((row) => (
                  <div>
                    <div style={{ position: 'relative', padding: '0 8px' }}>
                      <img
                        width="100%"
                        height={500}
                        style={{ objectFit: 'cover' }}
                        src={`${publicUrl}assets/images/project/project-v1-img${row}.jpg`}
                        alt=""
                      />

                      {/* Overlay */}
                      <div
                        style={{
                          position: 'absolute',
                          // top: '50%',
                          // left: '50%',
                          // transform: 'translate(-50%, -50%)',
                          color: 'white',
                          textAlign: 'center',
                          padding: '10px 16px',
                          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
                          // borderRadius: '8px',
                          bottom: 0,
                          textAlign: 'left',
                        }}
                      >
                        <p style={{ fontSize: 20, fontWeight: 'bold' }}>
                          Nama Project {row}
                        </p>
                        <p style={{ fontWeight: 400, fontSize: 14 }}>
                          Description Project Here {row}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
      </>
    );
  }
}
