import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { IoArrowForwardCircle } from 'react-icons/io5';
import styles from 'styles/components/homepage/buildsection.module.scss';

const BuildSection = () => {
  useEffect(() => {
    let step1 = document.querySelector('#build-step-1');
    let step2 = document.querySelector('#build-step-2');

    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.opacity = '1';
          }
        });
      },
      { rootMargin: '-15px' }
    );

    step1 ? stepObserver.observe(step1) : null;
    step2 ? stepObserver.observe(step2) : null;
  }, []);
  return (
    <section className={styles.buildSection}>
      <div className={styles.buildContainer}>
        <div className={styles.left}>
          <div className={styles.image}>
            <Image
              src={'/images/homepage/build-section-image-1.webp'}
              alt={'Image'}
              width={678}
              height={685} // fill
              style={{ objectFit: 'contain', height: 'auto', maxWidth: '100%' }}
            />
          </div>
        </div>
        <div className={styles.right}>
          <h1>Build with a solid team</h1>
          <p>
            We do a standard knowledge based skill assessment test in order to
            vet the talents we get onboard
          </p>
          <div className={styles.step} id='build-step-1'>
            <div className={styles.orangeBar}></div>
            <div className={styles.stepNo}>01</div>
            <div className={styles.stepDetails}>
              <span className={styles.title}>Assesments</span>
              <span>
                We do a standard knowledge based skill assessment test in order
                to vet the technical skills of the talents and ensure they are
                eligible and with the right experience
              </span>
            </div>
          </div>
          <div className={styles.step} id='build-step-2'>
            <div className={styles.orangeBar}></div>
            <div className={styles.stepNo}>02</div>
            <div className={styles.stepDetails}>
              <span className={styles.title}>Interview</span>
              <span>
                For proper validity and proof of competency of our talents we
                take our time to conduct further interviews to meet with, and
                learn more about the talent before recruiting them.
              </span>
            </div>
          </div>
          <Link href='/#contact'>
            Get in touch with us <IoArrowForwardCircle />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BuildSection;
