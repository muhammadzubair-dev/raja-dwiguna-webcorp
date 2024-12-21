import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../../sanityClient';

export default class HeroThree extends React.Component {
  componentDidMount() {
    const $ = window.$;

    if ($('.slider-carousel').length) {
      $('.slider-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop: true,
        margin: 0,
        nav: false,
        singleItem: true,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 6000,
        navText: [
          '<span class="icon-right-arrow"></span>',
          '<span class="icon-right-arrow"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1024: {
            items: 1,
          },
        },
      });
    }
  }
  render() {
    const { data } = this.props;

    return (
      <>
        <section className="slider-one-sec">
          <div className="slider-carousel owl-carousel owl-theme">
            {/* Start Slider One Single */}
            {data.map((item) => (
              <div className="slider-one__single" key={item._id}>
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: `url('${urlFor(item.photo).url()}')`,
                  }}
                ></div>
                <div className="container">
                  <div className="row clearfix">
                    <div className="col-xl-12">
                      <div className="slider-one__single-content">
                        <h3>{item.topText}</h3>
                        <h2 style={{ whiteSpace: 'pre-wrap' }}>{item.title}</h2>
                        <p style={{ whiteSpace: 'pre-wrap' }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* End Slider One Single */}
          </div>
        </section>
      </>
    );
  }
}
