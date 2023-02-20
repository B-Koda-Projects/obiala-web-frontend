import { AiFillMobile } from 'react-icons/ai';
import { BsLaptopFill, BsMegaphoneFill } from 'react-icons/bs';

import { ServicesLabelIcon } from 'components/svgs/FigmaSVGs';

import styles from 'styles/components/homepage/servicessection.module.scss';
import { UIUXDesignIcon } from '../svgs/FigmaSVGs';
import { useEffect } from 'react';

const ServicesSection = () => {
  useEffect(() => {
    let top = document.querySelector('#services-top');
    let card1 = document.querySelector('#services-card-1');
    let card2 = document.querySelector('#services-card-2');
    let card3 = document.querySelector('#services-card-3');
    let card4 = document.querySelector('#services-card-4');

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

    top ? cardObserver.observe(top) : null;
    card1 ? cardObserver.observe(card1) : null;
    card2 ? cardObserver.observe(card2) : null;
    card3 ? cardObserver.observe(card3) : null;
    card4 ? cardObserver.observe(card4) : null;
  }, []);

  return (
    <section id='services' className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <div className={styles.top} id='services-top'>
          <div className={styles.sectionLabel}>
            <ServicesLabelIcon /> SERVICES
          </div>
          <h1>What we offer</h1>
          <hr />
          <p>
            Here&apos;s a glimpse of our expert digital services, ranging from
            web and mobile apps to corporate websites, UI/UX design and graphic
            design services.
          </p>
        </div>
        <div className={styles.serviceCards}>
          <div className={styles.card} id='services-card-1'>
            <div className={styles.icon}>
              <AiFillMobile />
            </div>
            <h2>Mobile Application Development</h2>
            <p>
              With the help of our skilled mobile application developers we can
              build mobile applictations for your business for both android and
              IOS devices with the use of various cutting edge technology and
              frame work.
            </p>
          </div>
          <div className={styles.card} id='services-card-2'>
            <div className={styles.icon}>
              <BsLaptopFill />
            </div>
            <h2>Website Development</h2>
            <p>
              For your company, brand, business, or organization, our talented
              web designers and developers are always willing to provide
              attractive, useful, and responsive websites of any kind.
            </p>
          </div>
          <div className={styles.card} id='services-card-3'>
            <div className={styles.icon}>
              <UIUXDesignIcon />
            </div>
            <h2>UI/UX Design</h2>
            <p>
              For modern interfaces to be successfully deployed and meet the
              needs of clients and end users, the proper balance of research and
              design must be used. We are here to support you in achieving this
              and many more goals!
            </p>
          </div>
          <div className={styles.card} id='services-card-4'>
            <div className={styles.icon}>
              <BsMegaphoneFill />
            </div>
            <h2>Branding & Graphics Design</h2>
            <p>
              For your business or startup to stand out you need to have a
              unique identity and selling point. We are here to help you create
              logos and designs that would give clients insights on what value
              proposition to expect from your company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
