const vuepress_plugin_simple_blog = require('../../lib/index.js')

module.exports = {
  title: 'vuepress-plugin-simple-blog',
  description: 'A simple blog plugin for vuepress v2.',
  locales: {
    '/': {
      lang: 'en-US',
      description: 'A simple blog plugin for Vuepress v2',
    },
    '/zh/': {
      lang: 'zh-TW',
      description: '專為 Vuepress v2 而生的簡易部落格插件',
    },
  },
  themeConfig: {
    repo: 'https://github.com/huibizhang/vuepress-plugin-simple-blog',
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
        text: 'APIs',
        link: '/api/'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: [
            '/guide/index.md',
            '/guide/getting-started.md',
          ]
        },
      ],
      '/reference/': [
        {
          text: 'Reference',
          children: ['/reference/cli.md', '/reference/config.md'],
        },
      ],
    },
  },
  plugins: [
    vuepress_plugin_simple_blog,
  ]
}