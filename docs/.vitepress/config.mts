import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Git 講習会',
  description: 'traPで行われたGit講習会で使うためのテキストです',
  markdown: {
    theme: {
      light: 'github-dark',
      dark: 'github-dark'
    },
    math: true
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
          {
            text: '事前準備',
            collapsed: false,
            items: [
              { text: '用語の復習', link: '/text/chapter-1/review' },
              { text: '必要なツール', link: '/text/chapter-1/requirements' },
              { text: 'SSH キーの登録', link: '/text/chapter-1/gitea-ssh' }
            ]
          },
          { text: 'CLI と GUI', link: '/text/chapter-1/cli-and-gui' },
          { text: 'リポジトリの作成', link: '/text/chapter-1/make-repo' },
          { text: 'コミットと同期', link: '/text/chapter-1/commit-and-sync' },
          { text: 'ブランチ', link: '/text/chapter-1/branch' },
          { text: 'Git の操作の実体', link: '/text/chapter-1/git-commands' }
        ]
      },
      {
        text: '後編 - Git 共同開発',
        link: '/text/chapter-2/',
        items: [
          { text: 'リポジトリ', link: '/text/chapter-2/repository' },
          { text: 'ブランチを生やす', link: '/text/chapter-2/grow-a-branch' },
          { text: 'プルリクエストのマージ', link: '/text/chapter-2/merge' },
          { text: '共同開発の基本', link: '/text/chapter-2/team-development' }
        ]
      },
      {
        text: '発展',
        link: '/text/chapter-3/',
        items: [
          { text: '認証済みコミット', link: '/text/chapter-3/verified' },
          { text: '.gitignore', link: '/text/chapter-3/gitignore' },
          { text: 'コンフリクトの解決', link: '/text/chapter-3/conflict' },
          { text: 'マージのしくみ', link: '/text/chapter-3/how-merging-works' },
          { text: '共同開発のすすめ', link: '/text/chapter-3/best-practice' }
        ]
      },
      {
        text: 'あとがき',
        link: '/text/afterword'
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/traP-jp/git-lecture' }]
  }
})
