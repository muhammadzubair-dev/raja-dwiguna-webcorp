import React from 'react';
import { urlFor } from '../../sanityClient';

export default class AboutOne extends React.Component {
  componentDidMount() {
    const $ = window.$;

    if ($('.count-bar').length) {
      $('.count-bar').appear(
        function () {
          var el = $(this);
          var percent = el.data('percent');
          $(el).css('width', percent).addClass('counted');
        },
        {
          accY: -50,
        }
      );
    }

    if ($('.odometer').length) {
      var odo = $('.odometer');
      odo.each(function () {
        $(this).appear(function () {
          var countNumber = $(this).attr('data-count');
          $(this).html(countNumber);
        });
      });
    }
  }
  render() {
    const { data } = this.props;
    const about = data.length > 0 ? data[0] : null;

    return (
      <>
        <section className="about-one-sec" id="about-one">
          <div className="container-fluid">
            <div className="row">
              {/* Start About One Img */}
              <div className="col-xl-6">
                <div className="about-one__img-box">
                  <div
                    className="about-one__img-box-bg"
                    style={{
                      backgroundImage: `url('${urlFor(about?.photo).url()}')`,
                    }}
                  ></div>

                  <div className="about-one__img-box-overlay">
                    <h2>
                      <span
                        className="odometer"
                        data-count={about?.projectDone}
                      >
                        {about?.projectDone}
                      </span>
                      {about?.projectDoneWithPlus && (
                        <span className="plus">+</span>
                      )}
                      <br />
                      Project
                      <br />
                      Done
                    </h2>
                  </div>
                </div>
              </div>
              {/* End About One Img */}

              {/* Start About One Content */}
              <div className="col-xl-6">
                <div className="about-one__content">
                  <div className="sec-title">
                    <div className="sec-title__tagline">
                      <h6>About Company </h6> <span className="right"></span>
                    </div>
                    <h2 className="sec-title__title">{about?.title}</h2>
                    <p className="sec-title__text">{about?.description}</p>
                  </div>

                  <div className="about-one__conten-bottom">
                    {/* <p>
                      Consectetur, adipisci velit, sed quia nnumquam eius modi
                      tempora inciduntaliquam quaerat{' '}
                    </p> */}

                    <div className="about-one__progress">
                      {/* Start About One Progress Single */}
                      <div className="about-one__progress-single">
                        <h4 className="about-one__progress-single-title">
                          Quality Provide
                        </h4>
                        <div className="bar">
                          <div
                            className="bar-inner count-bar"
                            data-percent={`${about?.qualityProvide}%`}
                          >
                            <div className="count-text">{`${about?.qualityProvide}%`}</div>
                          </div>
                        </div>
                      </div>
                      {/* End About One Progress Single */}

                      {/* Start About One Progress Single */}
                      <div className="about-one__progress-single mar0">
                        <h4 className="about-one__progress-single-title">
                          Project Planing
                        </h4>
                        <div className="bar">
                          <div
                            className="bar-inner count-bar"
                            data-percent={`${about?.projectPlanning}%`}
                          >
                            <div className="count-text">{`${about?.projectPlanning}%`}</div>
                          </div>
                        </div>
                      </div>
                      {/* End About One Progress Single */}
                    </div>
                  </div>
                </div>
              </div>
              {/* End About One Content */}
            </div>
          </div>
        </section>
      </>
    );
  }
}
