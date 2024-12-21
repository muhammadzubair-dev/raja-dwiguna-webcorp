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
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          client.fetch('*[_type == "profile"]').then(setProfile),
          client.fetch('*[_type == "hero"]').then(setHero),
          client.fetch('*[_type == "service"]').then(setService),
          client.fetch('*[_type == "about"]').then(setAbout),
          client.fetch('*[_type == "project"]').then(setProject),
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
      <HeroThree data={hero.sort((a, b) => a.number - b.number)} />
      {/* <FeatureOne /> */}
      <ServiceOne data={service.sort((a, b) => a.number - b.number)} />
      <AboutOne data={about} />
      <ProjectOne data={project.sort((a, b) => a.number - b.number)} />
      {/* <WhyChooseOne /> */}
      {/* <WorkPerformanceOne /> */}
      {/* <FeatureFive /> */}
      <BrandOne />
      <TestimonialOne />
      {/* <BlogThree /> */}
      <FooterOne />
      <a
        target="_blank"
        href={`https://api.whatsapp.com/send?phone=${profile[0].phone}`}
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
