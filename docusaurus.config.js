// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

const isProd = process.env.NODE_ENV === 'production';
const sProjectName = "Controlz-Docs";

// Automatically switch baseUrl depend on running environment
const sBaseUrl = isProd ? `/${sProjectName}/` : '/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Controlz home',
  tagline: 'The official repo of Controlz app docs',
  favicon: 'img/favicon.ico',

  // Public domain
  url: 'https://OneManStudio-IL.github.io',
  baseUrl: sBaseUrl,

  organizationName: 'OneManStudio-IL',
  projectName: sProjectName,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'cn', 'cz', 'de', 'dk', 'es',
              'fi', 'fr', 'it', 'jp', 'nl', 'no',
              'pl', 'pt', 'ro', 'ru', 'se', 'sk', 
              'ua'
    ],
    localeConfigs: {
      en: { label: 'English', direction: 'ltr' },
      cn: { label: '中文 (Zhōngwén)', direction: 'ltr' },
      cz: { label: 'Čeština', direction: 'ltr' },
      de: { label: 'Deutsch', direction: 'ltr' },
      dk: { label: 'Dansk', direction: 'ltr' },
      es: { label: 'Español', direction: 'ltr' },
      fi: { label: 'Suomi', direction: 'ltr' },
      fr: { label: 'Français', direction: 'ltr' },
      it: { label: 'Italiano', direction: 'ltr' },
      jp: { label: '日本語 (Nihongo)', direction: 'ltr' },
      nl: { label: 'Nederlands', direction: 'ltr' },
      no: { label: 'Norsk', direction: 'ltr' },
      pl: { label: 'Polski', direction: 'ltr' },
      pt: { label: 'Português', direction: 'ltr' },
      ro: { label: 'Română', direction: 'ltr' },
      ru: { label: 'Русский', direction: 'ltr' },
      se: { label: 'Svenska', direction: 'ltr' },
      sk: { label: 'Slovenčina', direction: 'ltr' },
      ua: { label: 'Українська', direction: 'ltr' }
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'CONTROLZ',
      logo: {
        alt: 'Controlz Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        { to: '/blog', label: 'News', position: 'left' },
        { type: 'localeDropdown', position: 'right' },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Documentation', to: '/docs/Introducing/AboutApp' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Telegram', href: 'https://t.me/procontrolzchat' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'News', to: '/blog' },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Privacy policy', href: '/docs/Legal/PrivacyPolicy' },
            { label: 'Terms', href: '/docs/Legal/Terms' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Controlz, Inc.`,
      logo: {
        alt: 'Controlz Logo',
        src: 'img/logo-colored.svg',
        width: 160,
        height: 51,
      },
    },
    algolia: {
      appId: "AJXYEODYB6",
      apiKey: "9f69dbfa22c83cfa0712140916928f12",
      indexName: "onemanstudio_il_github_io_ajxyeodyb6_pages",
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
