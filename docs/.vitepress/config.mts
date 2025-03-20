import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'git text',
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

    sidebar: {
      '/basic': [
        {
          text: '前編 - Git 個人開発',
          items: [
            { text: 'はじめに', link: '/basic/introduction.md' },
            { text: '準備', link: '/basic/setup.md' }
          ]
        },
        {
          text: '後編 - Git 共同開発',
          items: [
            { text: 'はじめに', link: '/basic/introduction.md' },
            { text: '準備', link: '/basic/setup.md' }
          ]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/traP-jp/git-lecture' }]
  }
})
