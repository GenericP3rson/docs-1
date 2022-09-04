import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container section-hero">
        <div className={styles.heroTitle}>{siteConfig.title}</div>
        <div className={styles.heroSubtitle}>{siteConfig.tagline}</div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/what-is-sonr">
            Lets get started 🚀
          </Link>

          <Link
            className="button button--primary button--lg white-text"
            to="https://sonr.fyi/">
            See Roadmap →
          </Link>

        </div>
      </div>
    </header >
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello Sonr Devs!`}
      description="Lets build a better Internet together.">
      <HomepageHeader />
      <main>
        <div className="section">
          <HomepageFeatures />
        </div>

      </main>
    </Layout>
  );
}
