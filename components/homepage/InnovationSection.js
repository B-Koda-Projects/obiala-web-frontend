import MainNavbar from 'components/MainNavbar';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from 'styles/components/homepage/innovationsection.module.scss';
import {
  InnovationBackgroundDesign,
  InnovationLabelIcon
} from '../svgs/FigmaSVGs';

const InnovationSection = () => {
  useEffect(() => {
    let images = document.querySelector('#innovation-images');
    let text = document.querySelector('#innovation-text');

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
    <section id='innovation' className={styles.innovationSection}>
      <MainNavbar />
      <div className={styles.backgroundDesign}>
        <InnovationBackgroundDesign />
      </div>
      <div className={styles.innovationContainer}>
        <div className={styles.left} id={`innovation-text`}>
          <div className={styles.sectionLabel}>
            <InnovationLabelIcon /> Innovation
          </div>
          <h1>
            Building your brand to shape the <span>future</span>{' '}
          </h1>
          <p>
            We are set to help your business create solutions digitally that
            will give maximum satisfaction and solve problems for your
            customers.
          </p>
          <Link href='/#contact' className={styles.contactUs}>
            Contact Us
          </Link>
        </div>
        <div className={styles.right} id={`innovation-images`}>
          <div className={styles.image}>
            <Image
              src={'/images/homepage/innovation-section-image-1.webp'}
              alt={'Image'}
              fill
            />
          </div>
          <div className={styles.image}>
            <Image
              src={'/images/homepage/innovation-section-image-2.webp'}
              alt={'Image'}
              fill
            />
          </div>
          <div className={styles.image}>
            <Image
              src={'/images/homepage/innovation-section-image-3.webp'}
              alt={'Image'}
              fill
            />
          </div>
          <div className={styles.image}>
            <Image
              src={'/images/homepage/innovation-section-image-4.webp'}
              alt={'Image'}
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
