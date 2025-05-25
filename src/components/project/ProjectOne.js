import React, { useRef } from 'react';
import Slider from 'react-slick';
import { urlFor } from '../../sanityClient';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import { getLocalizedText } from '../../i18n';

const ProjectOne = ({ data, onOpenModal, onCloseModal }) => {
  const [type, setType] = React.useState('all');
  const [projects, setProjects] = React.useState(data);
  const { t, i18n } = useTranslation();
  const publicUrl = process.env.PUBLIC_URL + '/';
  const count = projects.length;

  // Refs for swipe detection
  const isDraggingRef = useRef(false);

  const handleMouseDown = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = () => {
    isDraggingRef.current = true;
  };

  const handleMouseUp = (item) => {
    if (!isDraggingRef.current) {
      onOpenModal(getLocalizedText(i18n.language, item?.titleID, item?.title), urlFor(item?.photo).url(), getLocalizedText(i18n.language, item?.descriptionID, item?.description));
    }
  };

  const settings = {
    dots: true,
    infinite: count > 3,
    slidesToShow: count < 3 ? count : 3,
    slidesToScroll: 1,
    pauseOnFocus: true,
    pauseOnHover: true,
    autoplay: true,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 5,
    touchMove: true,
    draggable: true,
    autoplaySpeed: 3000,
    speed: 500,
    cssEase: 'ease-out',
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToRow: count < 3 ? count : 3,
          slidesToShow: count < 3 ? count : 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: count < 2 ? count : 2,
          slidesToScroll: 1,
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

  return (
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
            <h6>{t('ourProject')}</h6> <span className="right"></span>
          </div>
          <h2 className="sec-title__title">{t('ourWorkingProject')}</h2>
        </div>

        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="project-one__menu-box">
              <ul className="project-filter clearfix post-filter has-dynamic-filters-counter">
                <li
                  data-filter=".filter-item"
                  className={type === 'all' ? 'active' : ''}
                  onClick={() => {
                    setType('all');
                    setProjects(data);
                  }}
                >
                  <span className="filter-text">{t('allProject')}</span>
                </li>
                <li
                  data-filter=".factory"
                  className={type === 'in-progress' ? 'active' : ''}
                  onClick={() => {
                    setType('in-progress');
                    setProjects(
                      data.filter((item) => item.status === 'in-progress')
                    );
                  }}
                >
                  <span className="filter-text">
                    {' '}
                    <i className="icon-wrench"></i>{t('inProgress')}
                  </span>
                </li>
                <li
                  data-filter=".offices"
                  className={type === 'finished' ? 'active' : ''}
                  onClick={() => {
                    setType('finished');
                    setProjects(
                      data.filter((item) => item.status === 'finished')
                    );
                  }}
                >
                  <span className="filter-text">
                    {' '}
                    <i className="icon-surgery"></i>{t('finished')}{' '}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <Slider {...settings}>
            {projects.map((item) => (
              <div
                key={item._id}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={() => handleMouseUp(item)}
                onTouchStart={handleMouseDown}
                onTouchMove={handleMouseMove}
                onTouchEnd={() => handleMouseUp(item)}
                style={{ cursor: 'pointer', userSelect: 'none' }}
              >
                <div style={{ position: 'relative', padding: '0 8px' }}>
                  <img
                    width="100%"
                    height={500}
                    style={{ objectFit: 'cover' }}
                    src={urlFor(item.photo).url()}
                    alt=""
                  />
                  <div
                    style={{
                      position: 'absolute',
                      color: 'white',
                      textAlign: 'center',
                      padding: '10px 16px',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      bottom: 0,
                      textAlign: 'left',
                    }}
                  >
                    <p
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        whiteSpace: 'pre-wrap',
                      }}
                    >
                      {getLocalizedText(i18n.language, item?.titleID, item?.title)}
                    </p>
                    <p
                      style={{
                        fontWeight: 400,
                        fontSize: 14,
                        whiteSpace: 'pre-wrap',
                      }}
                    >
                       {getLocalizedText(i18n.language, item?.descriptionID, item?.description)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ProjectOne;
