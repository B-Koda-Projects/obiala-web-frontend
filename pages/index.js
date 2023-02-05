import Head from 'next/head';
import MainFooter from '../components/MainFooter';
import MainNavbar from '../components/MainNavbar';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Obiala</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <MainNavbar />
        <MainFooter />
      </main>
    </div>
  );
}
