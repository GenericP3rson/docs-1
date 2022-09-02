import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Web3 Integrations',
    src: require('@site/static/img/integrations.png').default,
    description: (
      <>
        Sonr provides easy to use methods to interact with IPFS, Ethereum, and other blockchain networks.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    /* It's a prop that is being passed to the Feature component. */
    src: require('@site/static/img/focus.png').default,
    description: (
      <>
        The Cross-platform Motor SDK is a set of libraries and tools that allow developers to easily interact with Sonr's blockchain and network.
      </>
    ),
  },
  {
    title: 'All of the Platforms',
    src: require('@site/static/img/universal.png').default,
    description: (
      <>
        Sonr is available on desktop, mobile, and web. It's easy to use and easy to integrate with your existing applications.
      </>
    ),
  },
];

function Feature({ src, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={src} alt={title} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
