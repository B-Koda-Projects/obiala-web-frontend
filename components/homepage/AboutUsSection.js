import Image from 'next/image';
import { useEffect } from 'react';
import { BsCheckCircleFill, BsLaptopFill } from 'react-icons/bs';
import styles from 'styles/components/homepage/aboutussection.module.scss';
import { GroupIcon, ServicesLabelIcon } from '../svgs/FigmaSVGs';

const AboutUsSection = () => {
  useEffect(() => {
    let images = document.querySelector('#about-image');
    let text = document.querySelector('#about-text');

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.opacity = '1';
          }
        });
      },
      { rootMargin: '-50px' }
    );

    images ? cardObserver.observe(images) : null;
    text ? cardObserver.observe(text) : null;
  }, []);
  return (
    <section id='about' className={styles.aboutUsSection}>
      <div className={styles.aboutUsContainer}>
        <div className={styles.left} id='about-image'>
          <div className={styles.image}>
            <Image
              src={'/images/homepage/about-us-section-image-2.webp'}
              alt={'Image'}
              width={718}
              height={647} // fill
              style={{ objectFit: 'contain', height: 'auto', maxWidth: '100%' }}
            />
          </div>
        </div>
        <div className={styles.right} id={`about-text`}>
          <div className={styles.sectionLabel}>
            <ServicesLabelIcon /> About Us
          </div>
          <h1>Get to know who we are </h1>
          <hr />
          <p>
            At Obiala we assure you of creating quality mobile and web
            applications by making use of the right technology and approach in
            creating digital products with our team of highly skilled
            proffesionals we will help you in building a working scalable
            application that will create value and solve user problems in turn
            bringing desired business profit. We assist businesses in building
            elite teams by hiring, developing, and managing tech talent
            remotely.
          </p>
          <div className={styles.statistics}>
            <div className={styles.clients}>
              <GroupIcon />
              <span>20+</span>
              CLIENTS
            </div>
            <div className={styles.projects}>
              <BsLaptopFill />
              <span>100+</span>
              PROJECTS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
