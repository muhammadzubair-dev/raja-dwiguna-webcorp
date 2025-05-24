import React from 'react';
import SmoothScroll from 'smooth-scroll';
import HeaderThree from '../common/header/HeaderThree';
import HeroThree from '../components/hero/HeroThree';
import FeatureOne from '../components/features/FeatureOne';
import ServiceOne from '../components/services/ServiceOne';
import AboutOne from '../components/about/AboutOne';
import ProjectOne from '../components/project/ProjectOne';
import WhyChooseOne from '../components/why-choose-us/WhyChooseOne';
import WorkPerformanceOne from '../components/work-performance/WorkPerformanceOne';
import FeatureFive from '../components/features/FeatureFive';
import TestimonialOne from '../components/testimonial/TestimonialOne';
import BlogThree from '../components/blog/BlogThree';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';
import client from '../sanityClient';
import HeaderThreeSticky from '../common/header/HeaderThreeSticky';
import Modal from '../components/Modal';

let publicUrl = process.env.PUBLIC_URL + '/';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 300,
  speedAsDuration: true,
});

const HomeThree = () => {
  const [profile, setProfile] = React.useState([]);
  const [hero, setHero] = React.useState([]);
  const [service, setService] = React.useState([]);
  const [about, setAbout] = React.useState([]);
  const [project, setProject] = React.useState([]);
  const [brand, setBrand] = React.useState([]);
  const [testimonial, setTestimonial] = React.useState([]);
  const [followUs, setFollowUs] = React.useState([]);
  const [openModal, setOpenModal] = React.useState({
    open: false,
    title: '',
    photo: '',
    description: '',
  });

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const onCloseModal = () => setOpenModal({ open: false, title: '' });
  const onOpenModal = (title, photo, description) =>
    setOpenModal({
      open: true,
      title: title,
      photo: photo,
      description: description,
    });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          client.fetch('*[_type == "profile"]').then(setProfile),
          client.fetch('*[_type == "hero"]').then(setHero),
          client.fetch('*[_type == "service"]').then(setService),
          client.fetch('*[_type == "about"]').then(setAbout),
          client.fetch('*[_type == "project"]').then(setProject),
          client.fetch('*[_type == "client"]').then(setBrand),
          client.fetch('*[_type == "testimonial"]').then(setTestimonial),
          client.fetch('*[_type == "followUs"]').then(setFollowUs),
        ]);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || error) {
    return (
      <div
        style={{
          height: '100vh',
          background: '#8f0000',
          backgroundImage:
            'url(' + publicUrl + 'assets/images/pattern/footer-v1-pattern.png)',
        }}
      >
        <div style={{ height: '45vh' }} />
        <p
          style={{
            fontWeight: 700,
            fontSize: 18,
            textAlign: 'center',
            color: '#fff',
          }}
        >
          {error ? error : 'Loading ...'}
        </p>
      </div>
    );
  }

  return (
    <>
      <HeaderThree data={profile} />
      <HeaderThreeSticky data={profile} />
      <HeroThree data={hero.sort((a, b) => a.number - b.number)} />
      {/* <FeatureOne /> */}
      <ServiceOne data={service.sort((a, b) => a.number - b.number)} />
      <AboutOne data={about} />
      <ProjectOne
        openModal={openModal}
        onCloseModal={onCloseModal}
        onOpenModal={onOpenModal}
        data={project.sort((a, b) => a.number - b.number)}
      />
      {/* <WhyChooseOne /> */}
      {/* <WorkPerformanceOne /> */}
      {/* <FeatureFive /> */}
      <BrandOne data={brand.sort((a, b) => a.number - b.number)} />
      <TestimonialOne data={testimonial.sort((a, b) => a.number - b.number)} />
      {/* <BlogThree /> */}
      <FooterOne
        data={profile}
        followUs={followUs.sort((a, b) => a.number - b.number)}
      />
      <Modal
        isOpen={openModal.open}
        title={openModal.title}
        photo={openModal.photo}
        description={openModal.description}
        onClose={onCloseModal}
      />
      <a
        target="_blank"
        href={`https://api.whatsapp.com/send?phone=${profile[0].whatsapp}`}
      >
        <img
          className="whatsapp"
          src={`${process.env.PUBLIC_URL}/assets/images/icon/whatsapp.png`}
        />
      </a>
    </>
  );
};

export default HomeThree;
