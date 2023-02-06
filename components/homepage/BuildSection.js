import Image from 'next/image';
import Link from 'next/link';
import { IoArrowForwardCircle } from 'react-icons/io5';
import styles from 'styles/components/homepage/buildsection.module.scss';

const BuildSection = () => {
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
            We do standard knowledge based skilled assesment test in other to
            vett the talents we use get onboard
          </p>
          <div className={styles.step}>
            <div className={styles.orangeBar}></div>
            <div className={styles.stepNo}>01</div>
            <div className={styles.stepDetails}>
              <span className={styles.title}>Assesments</span>
              <span>
                We do standard knowledge based skilled assesment test in other
                to vett the technical skills of the talents and ensure they are
                eligible and with the right experience
              </span>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.orangeBar}></div>
            <div className={styles.stepNo}>02</div>
            <div className={styles.stepDetails}>
              <span className={styles.title}>Interview</span>
              <span>
                For proper validaty and proof of competency of our talents we
                take our time to conduct futher interviews to meet and know more
                about them before getting them onboard
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
