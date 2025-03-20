import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Git 講習会',
  description: 'traPで行われたGit講習会で使うためのテキストです',
  markdown: {
    theme: {
      light: 'github-dark',
      dark: 'github-dark'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [{ text: 'Home', link: '/' }],

    sidebar: [
      {
        text: '前編 - Git 個人開発',
        link: '/text/chapter-1/',
        items: [
          { text: '必要なツール', link: '/text/chapter-1/requirements' },
          { text: 'CLI と GUI', link: '/text/chapter-1/cliandgui' }
        ]
      },
      {
        text: '後編 - Git 共同開発',
        link: '/text/chapter-2/',
        items: [
          { text: 'はじめに', link: '/text/chapter-2/introduction' },
          { text: '準備', link: '/text/chapter-2/introduction' }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/traP-jp/git-lecture' }]
  }
})
