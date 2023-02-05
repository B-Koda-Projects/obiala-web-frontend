import Link from 'next/link';

import { BiMenuAltRight } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { DarkLogo } from './svgs/FigmaSVGs';
import styles from 'styles/components/mainnavbar.module.scss';
import { useEffect, useState } from 'react';

const MainNavbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [overlayStyle, setOverlayStyle] = useState({
    zIndex: '-1',
    backgroundColor: 'transparent',
    backdropFilter: 'blur(0rem) '
  });

  useEffect(() => {
    if (mobileMenu) {
      setOverlayStyle({
        zIndex: '1',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(0.4rem) '
      });
    } else {
      setOverlayStyle({
        backgroundColor: 'transparent',
        backdropFilter: 'blur(0rem) '
      });
      setTimeout(() => {
        setOverlayStyle({
          zIndex: '-1',
          backgroundColor: 'transparent',
          backdropFilter: 'blur(0rem) '
        });
      }, 600);
    }
  }, [mobileMenu]);

  return (
    <div className={styles.mainNavbar}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <DarkLogo />
        </div>
        <div
          className={styles.hamburgerMenu}
          onClick={() => setMobileMenu(true)}
        >
          <BiMenuAltRight />
        </div>
        <div
          className={styles.mobileOverlay}
          onClick={() => setMobileMenu(false)}
          style={overlayStyle}
        ></div>
        <nav
          className={styles.navigation}
          style={mobileMenu ? { transform: 'translateX(0%)' } : {}}
        >
          <div className={styles.close} onClick={() => setMobileMenu(false)}>
            <IoClose />
          </div>
          <Link href='/'>Careers</Link>
          <Link href='/'>About Us</Link>
          <Link href='/'>Contact Us</Link>
          <Link href='/' className={styles.darkButton}>
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MainNavbar;
