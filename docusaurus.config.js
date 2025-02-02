import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '程式貓',
  tagline: '讓科技變得跟貓咪一樣可愛',
  favicon: 'img/favicon.ico',
  url: 'https://www.codecat.tw',
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
          blogTitle: '部落格',
          blogSidebarTitle: '文章列表',
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
      image: 'img/social-card.png',
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
          {to: '/blog', label: '部落格', position: 'left'},
          {to: '/about', label: '團隊介紹', position: 'right'},
          {to: '/tos', abel: '服務條款', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '社群專案',
            items: [
              {
                label: '科技週刊',
                to: '/technews/intro',
              },
              {
                label: '專題百科',
                to: '/',
              },
              {
                label: 'Next.js / React 讀書會',
                to: '/',
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
            ],
          },
        ],
        copyright: `Copyright © 2024-2025 CodeCat team.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
