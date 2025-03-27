// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Controlz home',
  tagline: 'The official repo of Controlz app docs',
  favicon: 'img/favicon.ico',
  url: 'https://OneManStudio-IL.github.io',
  //baseUrl: '/', // For debugging on local machine
  baseUrl: '/Controlz-Docs/',

  // GitHub pages deployment config:
  organizationName: 'OneManStudio-IL',
  projectName: 'Controlz-Docs',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    localeConfigs: {
      en: { label: 'English' },
      ru: { label: 'Русский', direction: 'ltr' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          //editUrl: 'https://github.com/OneManStudio-IL/Controlz-Docs/blob/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          //editUrl: 'https://github.com/OneManStudio-IL/Controlz-Docs/blob/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      metadata: [
        { name: 'algolia-site-verification', content: '4FEFB4141FE3A030' }
      ],
      navbar: {
        title: 'Controlz',
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
          {to: '/blog', label: 'News', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/Introducing/AboutApp',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/procontrolzchat',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'News',
                to: '/blog',
              }
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy policy',
                href: '/docs/Legal/PrivacyPolicy',
              },
              {
                label: 'Terms',
                href: '/docs/Legal/Terms',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Controlz, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
