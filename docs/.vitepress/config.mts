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
          { text: 'SSH キーの登録', link: '/text/chapter-1/gitea-ssh' },
          { text: 'CLI と GUI', link: '/text/chapter-1/cli-and-gui' },
          { text: 'リポジトリの作成', link: '/text/chapter-1/make-repo' },
          { text: 'コミットと同期', link: '/text/chapter-1/commit-and-sync' },
          { text: 'ブランチ', link: '/text/chapter-1/branch' },
          { text: '補足 - Git の操作の実体', link: '/text/chapter-1/git-commands' }
        ]
      },
      {
        text: '後編 - Git 共同開発',
        link: '/text/chapter-2/',
        items: [
          { text: 'リポジトリ', link: '/text/chapter-2/repository' },
          { text: 'ブランチを生やす', link: '/text/chapter-2/grow-a-branch' },
          { text: 'ブランチのマージ', link: '/text/chapter-2/merge' },
          { text: '共同開発の基本', link: '/text/chapter-2/team-development' }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/traP-jp/git-lecture' }]
  }
})
