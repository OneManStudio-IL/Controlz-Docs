import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { useHistory } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
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
  const { siteConfig } = useDocusaurusContext();
  const history = useHistory();
  const quickStartUrl = useBaseUrl(`docs/Introducing/QuickStart`);
  const supportedDevicesUrl = useBaseUrl(`docs/Introducing/SupportedDevices`);

  return (
    <div className="hero shadow--lw">
      <div className="container text--center padding-vert--xl">
        <img 
          src={siteConfig.baseUrl + "img/controlz_phone.png"}
          alt="Controlz Hero" 
          width="640"
          className="margin-bottom--lg"
          style={{ maxWidth: '100%', height: 'auto' }} 
        />
        <h1 className="hero__title"><Translate>Elevate Your LEGO® Creations</Translate></h1>
        <div className="margin-top--md">
          <button 
          className="button button--primary button--outline button--lg margin--sm"
          onClick={ () => { history.push(quickStartUrl) }}
          >
            <Translate>
            Get Started
            </Translate>
          </button>
          <button 
          className="button button--primary button--outline button--lg margin--sm"
          onClick={() => { history.push(supportedDevicesUrl) }}
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

export function GooglePlayBadge() {
  const { i18n } = useDocusaurusContext();
  let locale = i18n.currentLocale;

  if(i18n.currentLocale === i18n.defaultLocale)
  {
    locale = "US"
  }

  return (
    <a
      href="https://apps.apple.com/il/app/controlz-moc-controller/id1585138043"
      target="_blank"
      rel="noopener noreferrer"
      className="margin--sm"
    >
      <img
        src={useBaseUrl(`/img/store_badges/google/google_${locale.toUpperCase()}.png`)}
        alt="Download on the Mac App Store"
        height="60"
      />
    </a>
  );
}

export function AppStoreBadge() {
  const { i18n } = useDocusaurusContext();
  let locale = i18n.currentLocale;

  if(i18n.currentLocale === i18n.defaultLocale)
  {
    locale = "US"
  }

  return (
    <a
      href="https://apps.apple.com/il/app/controlz-moc-controller/id1585138043"
      target="_blank"
      rel="noopener noreferrer"
      className="margin--sm"
    >
      <img
        src={useBaseUrl(`/img/store_badges/ios/ios_${locale.toUpperCase()}.svg`)}
        alt="Download on the App Store"
        height="60"
      />
    </a>
  );
}

export function MacAppStoreBadge() {
  const { i18n } = useDocusaurusContext();
  let locale = i18n.currentLocale;

  if(i18n.currentLocale === i18n.defaultLocale)
  {
    locale = "US"
  }

  return (
    <a
      href="https://apps.apple.com/il/app/controlz-moc-controller/id1585138043"
      target="_blank"
      rel="noopener noreferrer"
      className="margin--sm"
    >
      <img
        src={useBaseUrl(`/img/store_badges/mac/mac_${locale.toUpperCase()}.svg`)}
        alt="Download on the Mac App Store"
        height="60"
      />
    </a>
  );
}

function DownloadSection() {
  return (
    <div className="container text--center margin-vert--xl">
      <h2 className="hero__subtitle">
        <Translate>Download the Controlz</Translate>
      </h2>
      <p className="margin-bottom--sm">
        <Translate>You can download the app from the official stores:</Translate>
      </p>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        
        <GooglePlayBadge/>
        <AppStoreBadge/>
        <MacAppStoreBadge/>

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
      <DownloadSection />
      </main>
    </Layout>
  );
}
