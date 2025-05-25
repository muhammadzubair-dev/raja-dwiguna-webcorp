import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../../sanityClient';
import { withTranslation } from 'react-i18next';
import { getLocalizedText } from '../../i18n';

 class ServiceOne extends React.Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    const { data, t, i18n } = this.props;
    
    return (
      <>
        <section className="services-one-sec" id="service-one">
          <div className="container">
            <div className="sec-title text-center">
              <div className="sec-title__tagline">
                <span className="left"></span>
                <h6>{t('ourServices')}</h6> <span className="right"></span>
              </div>
              <h2 className="sec-title__title">{t('ourProfessionalServices')}</h2>
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
                          {getLocalizedText(i18n.language, item?.titleID, item?.title)}
                          {/* </Link> */}
                        </h2>
                      </div>

                      <div className="services-one__single-content-bottom">
                        <p style={{ whiteSpace: 'pre-wrap' }}>
                          {getLocalizedText(i18n.language, item?.descriptionID, item?.description)}
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

export default withTranslation()(ServiceOne);
