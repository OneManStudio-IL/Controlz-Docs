import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { useHistory } from '@docusaurus/router';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function GetStarted() {

  const { i18n } = useDocusaurusContext();
  const history = useHistory();

  // Prefix links with current locale if needed
  const prefix = i18n.currentLocale === i18n.defaultLocale ? '' : `/${i18n.currentLocale}`;

  const goToQuickStart = () => {
    history.push(`${prefix}/docs/Introducing/QuickStart`);
  };

  const goToSupportedDevices = () => {
    history.push(`${prefix}/docs/Introducing/SupportedDevices`);
  };

  return (
    <div className="hero shadow--lw">
      <div className="container text--center padding-vert--xl">
        <h1 className="hero__title"><Translate>Elevate Your LEGO® Creations</Translate></h1>
        <div className="margin-top--md">
          <button 
          className="button button--primary button--outline button--lg margin--sm"
          onClick={goToQuickStart}
          >
            <Translate>
            Get Started
            </Translate>
          </button>
          <button 
          className="button button--primary button--outline button--lg margin--sm"
          onClick={goToSupportedDevices}
          >
            <Translate>
            Supported devices
            </Translate>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
      <GetStarted />
      </main>
    </Layout>
  );
}
