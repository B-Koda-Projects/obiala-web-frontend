import {
  FacebookIcon,
  InstagramIcon,
  LightLogo,
  TwitterIcon
} from './svgs/FigmaSVGs';
import styles from 'styles/components/mainfooter.module.scss';

const MainFooter = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <LightLogo />
        </div>
        <div className={styles.bottomNav}>
          <span>About</span>
          <span>Contact Us</span>
        </div>
        <div className={styles.links}>
          <span>
            <FacebookIcon />
          </span>
          <span>
            <TwitterIcon />
          </span>
          <span>
            <InstagramIcon />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
