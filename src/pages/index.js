import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import PartnerCarousel from '@site/src/components/HomepageFeatures/PartnerCarousel';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Head from '@docusaurus/Head';

export default function Home() {
  return (
    <Layout
      description="讓科技變得跟貓咪一樣可愛。致力於提供最親民的科技內容！">
      <Head>
        <meta property="og:type" content="website" />
      </Head>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            程式貓
          </Heading>
          <p className="hero__subtitle">讓科技變得跟貓咪一樣可愛</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/technews/intro">
              熱門內容: 科技週刊！
            </Link>
          </div>
        </div>
      </header>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
