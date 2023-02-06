import {
  FacebookIcon,
  InstagramIcon,
  LightLogo,
  TwitterIcon
} from './svgs/FigmaSVGs';
import styles from 'styles/components/mainfooter.module.scss';
import Link from 'next/link';

const MainFooter = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link href='/'>
            <LightLogo />
          </Link>
        </div>
        <div className={styles.bottomNav}>
          <Link href='/#about'>About</Link>
          <Link href='/#contact'>Contact Us</Link>
        </div>
        <div className={styles.links}>
          <Link href='/'>
            <FacebookIcon />
          </Link>
          <Link href='/'>
            <TwitterIcon />
          </Link>
          <Link href='/'>
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
