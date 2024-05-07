import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'git lecture',
  description: 'git lecture',
  markdown: {
    theme: {
      light: 'github-dark',
      dark: 'github-dark'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/basic': [
        {
          text: '基礎編',
          items: [
            { text: '準備', link: '/basic/introduction.md' },
            { text: '変更をコミットする', link: '/basic/commit' },
            { text: 'プルリクエストを出す', link: '/basic/pr' },
            { text: '補足説明', link: '/basic/supplement' },
            { text: 'おまけ1: CLIによるGit操作', link: '/basic/cli' },
            { text: 'おまけ2: SSHの設定', link: '/basic/ssh' }
          ]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
})
