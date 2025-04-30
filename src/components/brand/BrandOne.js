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
            {/* <Swiper
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
            </Swiper> */}
            {/* <div className="sec-title text-center">
              <div className="sec-title__tagline">
                <span
                  style={{ background: '#fff' }}
                  color="#fff"
                  className="left"
                ></span>
                <h6 style={{ color: '#fff' }}>Partner & Clients</h6>{' '}
                <span style={{ background: '#fff' }} className="right"></span>
              </div>
            </div> */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {data.map((item, i) => (
                <img
                  src={urlFor(item.photo).url()}
                  alt={item.client}
                  height={55}
                />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}
