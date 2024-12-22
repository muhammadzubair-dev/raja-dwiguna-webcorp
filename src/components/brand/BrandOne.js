import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { urlFor } from '../../sanityClient';

export default class BrandOne extends React.Component {
  render() {
    const { data } = this.props;
    let publicUrl = process.env.PUBLIC_URL + '/';
    return (
      <>
        <section className="brand-one-sec">
          <div
            className="brand-one__bg"
            style={{
              backgroundImage:
                'url(' +
                publicUrl +
                'assets/images/backgrounds/brand-v1-bg.png)',
            }}
          ></div>
          <div className="container">
            <Swiper
              loop={true}
              spaceBetween={50}
              slidesPerView={5}
              speed={1400}
              freeMode={true}
              watchSlidesVisibility={true}
              watchSlidesProgress={true}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                0: {
                  spaceBetween: 30,
                  slidesPerView: 1,
                },
                375: {
                  spaceBetween: 30,
                  slidesPerView: 2,
                },
                575: {
                  spaceBetween: 30,
                  slidesPerView: 2,
                },
                767: {
                  spaceBetween: 30,
                  slidesPerView: 3,
                },
                991: {
                  spaceBetween: 30,
                  slidesPerView: 4,
                },
                1199: {
                  spaceBetween: 30,
                  slidesPerView: 4,
                },
              }}
              className="thm-swiper__slider swiper-container"
            >
              <div className="swiper-wrapper">
                {data.map((item, i) => (
                  <SwiperSlide className="swiper-slide">
                    <Link to={process.env.PUBLIC_URL + `/`}>
                      <img src={urlFor(item.photo).url()} alt={item.client} />
                    </Link>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </section>
      </>
    );
  }
}
