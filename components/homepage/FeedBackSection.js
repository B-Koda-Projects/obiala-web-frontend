import Image from 'next/image';
import styles from 'styles/components/homepage/feedbacksection.module.scss';
import { FeedBackIcon, SquigglyLine } from '../svgs/FigmaSVGs';

const FeedBackSection = () => {
  return (
    <section className={styles.feedBackSection}>
      <div className={styles.feedBackContainer}>
        <div className={styles.top}>
          <div className={styles.sectionLabel}>
            <FeedBackIcon /> FeedBack
          </div>
          <h1>Hear from our clients</h1>
          <hr />
        </div>
        <div className={styles.testimonialContainer}>
          <div className={styles.testimonial}>
            <div className={styles.image}>
              <Image
                src={'/images/homepage/testimonial-1.png'}
                alt={'Image'}
                width={60}
                height={60} // fill
                style={{
                  objectFit: 'contain',
                  height: 'auto',
                  maxWidth: '100%'
                }}
              />
            </div>
            <div className={styles.feedBack}>
              <p>
                I enjoy working and creating solutions that will solve problems
                for people
              </p>
              <em>Tony Anyozie, Lagos Nigeria</em>
            </div>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.image}>
              {' '}
              <Image
                src={'/images/homepage/testimonial-2.png'}
                alt={'Image'}
                width={60}
                height={60} // fill
                style={{
                  objectFit: 'contain',
                  height: 'auto',
                  maxWidth: '100%'
                }}
              />
            </div>
            <div className={styles.feedBack}>
              <p>
                I enjoy working and creating solutions that will solve problems
                for people
              </p>
              <em>Oladipo Samuel, Lagos, Nigeria</em>
            </div>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.image}>
              <Image
                src={'/images/homepage/testimonial-3.png'}
                alt={'Image'}
                width={60}
                height={60} // fill
                style={{
                  objectFit: 'contain',
                  height: 'auto',
                  maxWidth: '100%'
                }}
              />
            </div>
            <div className={styles.feedBack}>
              <p>
                I enjoy working and creating solutions that will solve problems
                for people
              </p>
              <em>Anita Oladotun, Dublin, Ireland</em>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.squigglyLine}>
        <SquigglyLine />
      </div>
    </section>
  );
};

export default FeedBackSection;
