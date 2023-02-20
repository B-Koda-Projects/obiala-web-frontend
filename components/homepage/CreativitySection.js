import Link from 'next/link';
import { IoArrowForwardCircle } from 'react-icons/io5';
import styles from 'styles/components/homepage/creativitysection.module.scss';

const CreativitySection = () => {
  return (
    <section className={styles.creativitySection}>
      <div className={styles.creativityContainer}>
        <div className={styles.creativityContent}>
          <h1>Creativity geared to provide your company with an advantage</h1>
          <p>
            Every project is incredibly distinct hence creativity is at the core
            of our ideals!
          </p>
          <Link href='/#contact'>
            Get in touch with us <IoArrowForwardCircle />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CreativitySection;
