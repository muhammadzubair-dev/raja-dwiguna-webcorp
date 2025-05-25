import React from 'react';
import { withTranslation } from 'react-i18next';
import { urlFor } from '../../sanityClient';

class TestimonialOne extends React.Component {
  componentDidMount() {
    const $ = window.$;

    if ($('.testimonials-one__carousel').length) {
      $('.testimonials-one__carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        smartSpeed: 500,
        autoHeight: false,
        autoplay: true,
        dots: false,
        autoplayTimeout: 10000,
        navText: [
          '<i className="fa fa-angle-double-left" aria-hidden="true"></i>',
          '<i className="fa fa-angle-double-right" aria-hidden="true"></i>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          800: {
            items: 2,
          },
          992: {
            items: 2,
          },
          1200: {
            items: 3,
          },
        },
      });
    }
  }
  render() {
    const { data, t } = this.props;
    let publicUrl = process.env.PUBLIC_URL + '/';
    return (
      <>
        <section className="testimonials-one-sec" id="testimonials-one">
          <div className="shape1">
            <img
              src={
                publicUrl + 'assets/images/shapes/testimonials-v1-shape1.png'
              }
              alt=""
            />
          </div>
          <div className="shape2">
            <img
              src={
                publicUrl + 'assets/images/shapes/testimonials-v1-shape2.png'
              }
              alt=""
            />
          </div>
          <div className="container">
            <div className="sec-title text-center">
              <div className="sec-title__tagline">
                <span className="left"></span>
                <h6>{t('ourTestimonials')}</h6> <span className="right"></span>
              </div>
              <h2 className="sec-title__title">{t('ourSweetClient')}</h2>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="testimonials-one__carousel owl-carousel owl-theme">
                  {data.map((item) => (
                    <div className="testimonials-one__single">
                      <div className="rating">
                        <ul>
                          {[...Array(item.rating)].map((_, index) => (
                            <li key={index}>
                              <span className="icon-star"></span>
                            </li>
                          ))}
                          {[...Array(5 - item.rating)].map((_, index) => (
                            <li key={item.rating + index}>
                              <span className="icon-star-1"></span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-box">
                        <p style={{ whiteSpace: 'pre-wrap' }}>
                          {item?.testimonial}
                        </p>
                      </div>
                      <div className="client-info">
                        <div className="img-box">
                          <img
                            src={urlFor(item.photo).url()}
                            alt={item?.clientName}
                            style={{
                              width: 65,
                              height: 65,
                              objectFit: 'cover',
                            }}
                          />
                        </div>

                        <div className="title-box">
                          <h2>{item?.clientName}</h2>
                          <span>{item?.position}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withTranslation()(TestimonialOne);
