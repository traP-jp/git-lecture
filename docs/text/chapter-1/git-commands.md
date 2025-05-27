# Git の操作の実体

この章では、前編で行ってきた VSCode 上のボタン操作の裏でどんな処理がなされていたのかを解説し `git fetch` や `git pull` といったコマンドとの関係を明らかにします。

## ブランチ内での操作

以下の図は 1 本のブランチ（ここでは main という名前のブランチ）に関する操作の一覧です。

![](https://md.trap.jp/uploads/upload_20ec43238b38dfef06c692b80c4469fa.png)

全体が同期するので 1 本と見なすことが一般的ですが、実際には

- **リモートブランチ**
- **リモート追跡ブランチ**
- **作業ブランチ**

の 3 本が束になっています。リモートブランチは Gitea のサーバー上にあり、他の 2 本はローカル（お使いのデバイスの中）にあります。

:::tip リモート追跡ブランチはブランチではない
リモート追跡ブランチは Git のシステムにおいて通常のブランチと同等なものではありません。リモート追跡ブランチは「リモートブランチのスナップショット」に過ぎず、fetch 以外の更新操作を受け付けません。ローカル環境におけるリモートブランチの代役という認識でよいと思います。
:::

上図における各操作の意味は以下の通りです。

<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th style="width: auto; text-align: center; text-wrap: nowrap">Git 操作</th>
      <th style="width: 100%;">意味</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center"><strong>clone</strong></td>
      <td>リモートからコピーして、ローカルにリモート追跡ブランチと作業ブランチを用意する</td>
    </tr>
      <tr>
      <td style="text-align: center"><strong>fetch</strong></td>
      <td>リモート追跡ブランチを現在のリモートブランチと同じ状態にする</td>
    </tr>
    <tr>
      <td style="text-align: center"><strong>merge</strong></td>
      <td>リモート追跡ブランチの変更を作業ブランチに反映する</td>
    </tr>
    <tr>
      <td style="text-align: center"><strong>commit</strong></td>
      <td>作業ブランチに変更を記録する</td>
    </tr>
    <tr>
      <td style="text-align: center"><strong>pull</strong></td>
      <td>fetch + merge</td>
    </tr>
    <tr>
      <td style="text-align: center"><strong>push</strong></td>
      <td>作業ブランチの変更をリモートブランチに反映する</td>
    </tr>
  </tbody>
</table>

前編でターミナル及び VSCode 上で行った操作との対応は以下のようになります。

<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th style="width: 100%;">ターミナル & VSCode 上での操作</th>
      <th style="width: auto; text-align: center; text-wrap: nowrap">Git 操作</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>コマンド <code>git clone ssh://から始まる文字列</code> の実行</td>
      <td style="text-align: center"><strong>clone</strong></td>
    </tr>
    <tr>
      <td>Desktop の mydrive で README.md を編集して「コミット」ボタンを押す</td>
      <td style="text-align: center"><strong>commit</strong></td>
    </tr>
    <tr>
      <td>Desktop の mydrive で「変更を同期 ↑1」ボタンを押す</td>
      <td style="text-align: center"><strong>push</strong></td>
    </tr>
    <tr>
      <td>Downloads の mydrive で「変更の同期 ↓1」ボタンを押す</td>
      <td style="text-align: center"><strong>merge</strong></td>
    </tr>
  </tbody>
</table>

この表には fetch が含まれていませんが、[必要なツール](/text/chapter-1/requirements.html#vscode-の設定) の章で Autofetch 設定を `true` にしたことで作業ブランチへの fetch 操作が 180 秒おきに自動で行われるようになっています。[コミットと同期](/text/chapter-1/commit-and-sync.html#リポジトリの同期) の章で Downloads の mydrive を開いてすぐ「コミット」ボタンが勝手に「変更の同期 1↓」ボタンに変化したのは、この Autofetch が働いたからです。

:::tip ターミナルから Git を操作する
[CLI と GUI](/text/chapter-1/cli-and-gui.html) の章で紹介したように、Git は CLI ソフトウェアなので Git リポジトリの操作は全てターミナル上で行うことができ、そしてそれが本来想定されていた使い方だったりします。[リポジトリの作成](/text/chapter-1/make-repo.html) および [コミットと同期](/text/chapter-1/commit-and-sync.html) で行ってきた全ての操作は以下のコマンド列で再現することができます。

```sh
# 1. Desktop ディレクトリと Downloads ディレクトリにリポジトリをクローン
cd ~/Desktop
git clone ssh://から始まる文字列
cd ~/Downloads
git clone ssh://から始まる文字列

# 2. Desktop ディレクトリの mydrive の README.md に nano で変更を加える
cd ~/Desktop/mydrive
nano README.md

# 3. 変更をコミット・プッシュする
git add README.md
git commit -m "README.md 更新"
git push origin main

# 4. Downloads ディレクトリの mydrive で変更をプルする
cd ~/Downloads/mydrive
git pull origin main
```

途中で登場する nano はターミナル上で動作するテキストエディタです。[プログラミング基礎講習会第 1 章の練習問題](https://pg-basic.trap.show/text/chapter-1/practice/nano-test.html) にも登場していますね。`Ctrl` + `X` の同時押しでエディタの終了操作、そこで `y` に続いて `Enter` を押すことで変更の保存ができます。
:::

日頃の開発で「ブランチにコミットする」という言葉を聞いたら、通常は以下の一連の操作を指すと思ってよいでしょう。

1. 開発途中のブランチの最新状態をリモートから pull (fetch + merge) してくる
2. ファイルの中身を変更し、作業ブランチに commit する
3. 作業ブランチの変更を push してリモートブランチに反映させる

1 と 3 は結局のところ「リモートとローカルを同期する」ための操作です。「ブランチへのコミット」という操作は「**同期** → **作業ブランチへのコミット** → **同期**」という 3 段階によってリモートとローカルの両方に同じ変更を加えることを意味しています。

---

[#event/workshop/git/exercise](https://q.trap.jp/channels/event/workshop/git/exercise) の『**前編完走**』にスタンプをつけよう！