import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '程式貓',
  tagline: '讓科技變得跟貓咪一樣可愛',
  favicon: 'img/favicon.ico',
  url: 'https://codecat.tw',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/technews',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-TYG0NLG76M',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '程式貓',
        logo: {
          alt: 'CodeCat Logo',
          src: 'img/logo.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: "left",
            label: '科技週刊',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            to: '/about',
            label: '團隊介紹',
            position: 'right',
          },
          {
            to: '/tos',
            label: '服務條款',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '服務項目',
            items: [
              {
                label: '科技週刊',
                to: '/technews/intro',
              },
            ],
          },
          {
            title: '更多我們',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/codecat.tw',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@codecat-tw',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/profile.php?id=61559911739266&mibextid=JRoKGi',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/XT2PyGtPyN',
              },
              {
                label: 'Threads',
                href: 'https://www.threads.net/@codecat.tw',
              },
            ],
          },
          {
            title: '合作夥伴',
            items: [
              {
                label: 'YD遊戲頻',
                href: 'https://www.youtube.com/@playeryd',
              },
              {
                label: '明月楓夜',
                href: 'https://www.youtube.com/@user-senryckey',
              },
              {
                label: '枯楓亡月',
                href: 'https://www.instagram.com/withered_mable.leaf_dead_moon/',
              },
            ],
          },
        ],
        copyright: `Copyright © 2024 CodeCat team.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
