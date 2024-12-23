import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../../sanityClient';

export default class ServiceOne extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    const { data } = this.props;
    return (
      <>
        <section className="services-one-sec" id="service-one">
          <div className="container">
            <div className="sec-title text-center">
              <div className="sec-title__tagline">
                <span className="left"></span>
                <h6>Our Services</h6> <span className="right"></span>
              </div>
              <h2 className="sec-title__title">Our Professional Services</h2>
            </div>

            <div className="row">
              {data.map((item) => (
                <div className="col-xl-4 col-lg-4">
                  <div className="services-one__single">
                    <div className="services-one__single-img">
                      <img src={urlFor(item.photo).url()} alt="" />
                    </div>

                    <div className="services-one__single-content">
                      <div className="services-one__single-content-title">
                        <h2 style={{ whiteSpace: 'pre-wrap' }}>
                          {/* <Link
                          to={process.env.PUBLIC_URL + `/general-contracting`}
                        > */}
                          {item.title}
                          {/* </Link> */}
                        </h2>
                      </div>

                      <div className="services-one__single-content-bottom">
                        <p style={{ whiteSpace: 'pre-wrap' }}>
                          {item.description}
                        </p>

                        {/* <div className="services-one__single-btn">
                          <Link
                            to={process.env.PUBLIC_URL + `/general-contracting`}
                            className="thm-btn"
                            data-text="Read More +"
                          >
                            Read More +
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}
