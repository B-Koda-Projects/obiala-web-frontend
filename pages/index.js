import Head from 'next/head';
import MainFooter from 'components/MainFooter';
import styles from '../styles/home.module.scss';
import InnovationSection from '../components/homepage/InnovationSection';
import ServicesSection from '../components/homepage/ServicesSection';
import AboutUsSection from '../components/homepage/AboutUsSection';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Obiala</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <InnovationSection />
        <ServicesSection />
        <AboutUsSection />
        <MainFooter />
      </main>
    </div>
  );
}
