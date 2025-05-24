import React from 'react';
import Slider from 'react-slick';
import { urlFor } from '../../sanityClient';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectOne = ({ data, onOpenModal, onCloseModal }) => {
  const [type, setType] = React.useState('all');
  const [projects, setProjects] = React.useState(data);
  const publicUrl = process.env.PUBLIC_URL + '/';
  const count = projects.length;

  const settings = {
    dots: true,
    infinite: count > 3,
    slidesToShow: count < 3 ? count : 3,
    slidesToScroll: 1,
    pauseOnFocus: true,
    pauseOnHover: true,
    autoplay: true,

    // Properti untuk swipe
    swipe: true, // Mengaktifkan swipe
    swipeToSlide: true, // Memungkinkan swipe ke slide manapun
    touchThreshold: 5, // Sensitivitas swipe (semakin rendah semakin sensitif)
    touchMove: true, // Mengaktifkan gerakan sentuh
    draggable: true, // Memungkinkan drag dengan mouse

    // Perbaikan pengaturan kecepatan
    autoplaySpeed: 3000, // Waktu antara perpindahan slide (dalam ms)
    speed: 500, // Kecepatan animasi slide (dalam ms)
    cssEase: 'ease-out', // Jenis animasi yang lebih alami
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
            <h6>Our project</h6> <span className="right"></span>
          </div>
          <h2 className="sec-title__title">Our Working Project</h2>
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
                  <span className="filter-text">All Project</span>
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
                    <i className="icon-wrench"></i>In Progress
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
                    <i className="icon-surgery"></i>Finished{' '}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <Slider {...settings}>
            {projects.map((item) => (
              <div key={item._id}>
                <div
                  style={{ position: 'relative', padding: '0 8px' }}
                  onClick={() =>
                    onOpenModal(
                      item?.title,
                      urlFor(item?.photo).url(),
                      item?.description
                    )
                  }
                >
                  <img
                    width="100%"
                    height={500}
                    style={{ objectFit: 'cover' }}
                    src={urlFor(item.photo).url()}
                    alt=""
                  />
                  {/* Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      color: 'white',
                      textAlign: 'center',
                      padding: '10px 16px',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
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
                      {item?.title}
                    </p>
                    <p
                      style={{
                        fontWeight: 400,
                        fontSize: 14,
                        whiteSpace: 'pre-wrap',
                      }}
                    >
                      {item?.description}
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
