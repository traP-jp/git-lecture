import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Git講習会 実習テキスト',
  description: 'traPで行われたGit講習会で使うためのテキストです',
  markdown: {
    theme: {
      light: 'github-dark',
      dark: 'github-dark'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Home', link: '/' }],

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
            { text: 'おまけ2: SSHの設定', link: '/basic/ssh' },
            { text: 'おまけ3: .gitignore', link: '/basic/gitignore' },
            { text: 'おまけ4: 修正コミット', link: '/basic/commit-amend' },
            { text: 'おまけ5: 現在の状況を確認する', link: '/basic/status' },
            { text: 'おまけ6: 容量の大きいファイルを扱う', link: '/basic/lfs' },
            { text: 'おまけ7: 変更をコミットせず保存する', link: '/basic/stash' },
            { text: 'おまけ8: コミットを整理する', link: '/basic/rebase' },
            { text: 'おまけ9: コミットに印をつける', link: '/basic/tag' },
            { text: 'おまけ10: 一部のコミットだけ取り込む', link: '/basic/cherry-pick' },
            { text: 'おまけ11: 変更を消して過去に戻る', link: '/basic/reset' },
            { text: 'おまけ12: 使い方を見る', link: '/basic/help' },
            { text: 'おまけ13: VSCode以外のGUI操作', link: '/basic/github-desktop' }
          ]
        }
      ]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
})
