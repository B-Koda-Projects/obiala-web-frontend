import styles from 'styles/components/homepage/contactussection.module.scss';
import { ContactUsSquiggle } from '../svgs/FigmaSVGs';

const ContactUsSection = () => {
  return (
    <section id='contact' className={styles.contactUsSection}>
      <div className={styles.contactUsContainer}>
        <div className={styles.squiggle}>
          <ContactUsSquiggle />
        </div>
        <div className={styles.left}>
          <h2>Reach out to us today</h2>
          <p>We will really love to hear from you and work with you </p>
        </div>
        <div className={styles.right}>
          <div className={styles.form}>
            <input type='text' placeholder='Full name' />
            <input type='text' placeholder='Email address' />
            <textarea type='text' placeholder='Your message' />
            <button>Send a message</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
