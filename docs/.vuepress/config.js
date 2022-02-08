const { path } = require('@vuepress/utils')
const vuepress_plugin_simple_blog = require('../../lib/index.js')

module.exports = {
  title: 'vuepress-plugin-simple-blog',
  description: 'A simple blog plugin for vuepress v2.',
  locales: {
    '/': {
      lang: 'en-US',
      description: 'A simple blog plugin for Vuepress v2',
    },
    // '/zh/': {
    //   lang: 'zh-TW',
    //   description: '專為 Vuepress v2 而生的簡易部落格插件',
    // },
  },
  themeConfig: {
    repo: 'https://github.com/huibizhang/vuepress-plugin-simple-blog',
    docsRepo: 'https://github.com/huibizhang/vuepress-plugin-simple-blog',
    docsBranch: 'master',
    docsDir: 'docs',
    contributors: false,
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/zh/': {
        selectLanguageName: '繁體中文',
        selectLanguageText: '切換語言',
        selectLanguageAriaLabel: '切換語言',
      },
    },
    navbar: [
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Customization',
        link: '/customization/'
      },
      {
        text: 'APIs',
        link: '/api/'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: [
            '/guide/',
            '/guide/getting-started/',
          ]
        },
      ],
      '/customization/': [
        {
          text: 'Customization',
          link: '/customization/',
        },
      ],
      '/api/': [
        {
          text: 'Client APIs',
          link: '/api/',
          children: [
            '/api/pagination/',
            '/api/tag-list/',
          ]
        },
      ],
    },
  },
  plugins: [
    vuepress_plugin_simple_blog,
    ['@vuepress/register-components', {
      componentsDir: path.resolve(__dirname, './global_components'),
    }],
  ]
}
