import Head from 'next/head';
import MainFooter from 'components/MainFooter';
import styles from '../styles/home.module.scss';
import InnovationSection from '../components/homepage/InnovationSection';
import ServicesSection from '../components/homepage/ServicesSection';
import AboutUsSection from '../components/homepage/AboutUsSection';
import CreativitySection from '../components/homepage/CreativitySection';
import BuildSection from '../components/homepage/BuildSection';
import FeedBackSection from '../components/homepage/FeedBackSection';
import ContactUsSection from '../components/homepage/ContactUsSection';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        {/* Basic */}
        <title>Obiala</title>
        <meta
          name='description'
          content='Building your brand to shape the future.
We are set to help your business create solutions digitally that will give maximum satisfaction and solve problems for your customers.'
        />

        {/* Open Graph Meta Tags */}
        <meta property='og:title' content={`Obiala`} />
        <meta property='og:type' content='article' />
        <meta
          property='og:description'
          content={`Building your brand to shape the future.
We are set to help your business create solutions digitally that will give maximum satisfaction and solve problems for your customers.`}
        />
        <meta property='og:image' content={`/obiala_icon.png`} />
        <meta property='og:site_name' content='Obiala' />

        {/* Twitter  */}
        <meta name='twitter:title' content={`Obiala`} />
        <meta
          name='twitter:description'
          content={`Building your brand to shape the future.
We are set to help your business create solutions digitally that will give maximum satisfaction and solve problems for your customers.`}
        />
        <meta name='twitter:image' content={`/obiala_icon.png`} />
        <meta name='twitter:card' content={'summary_large_image'} />
        <meta name='twitter:site' content='@obiala' />
        <meta
          name='twitter:image:alt'
          content={`Building your brand to shape the future.
          We are set to help your business create solutions digitally that will give maximum satisfaction and solve problems for your customers.`}
        />
        <link rel='icon' href='/obiala_icon.png' />
      </Head>
      <main className={styles.main}>
        <InnovationSection />
        <ServicesSection />
        <AboutUsSection />
        <CreativitySection />
        <BuildSection />
        <FeedBackSection />
        <ContactUsSection />
        <MainFooter />
      </main>
    </div>
  );
}
