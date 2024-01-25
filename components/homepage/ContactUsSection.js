import styles from 'styles/components/homepage/contactussection.module.scss';
import { ContactUsSquiggle } from '../svgs/FigmaSVGs';
import { useState } from 'react';

const ContactUsSection = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
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
            <input
              type='text'
              placeholder='Full name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='text'
              placeholder='Topic '
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              type='text'
              placeholder='Your message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <a
              href={`mailto:info@obiala.com?subject=${subject}&body=Hey Obiala! My name is ${name} and I have the following enquiry.${message}`}
            >
              Send a message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
