# Git の操作の実体

この章では、前編で行ってきた VSCode 上のボタン操作の裏でどんな処理がなされていたのかを解説し `git fetch` や `git pull` といったコマンドとの関係を明らかにします。

大抵の開発ではこれらの操作の細かい意味合いはあまり強く意識されず、それを深く理解していなくても Git を開発に役立てることは十分に可能です。とはいえ、これらは Git の最も基本的な操作とされていて、その大まかな役割を知らなければ解決が難しい問題に遭遇することも稀ではないので、以降の内容をなんとなくでも把握しておくことをおすすめします。

## ブランチ内での操作

以下の図は 1 本のブランチ（ここでは main という名前のブランチ）に関する操作の一覧です。

![](https://md.trap.jp/uploads/upload_20ec43238b38dfef06c692b80c4469fa.png)

全体が同期するので 1 本と見なすことが一般的ですが、実際には

- **リモートブランチ**
- **リモート追跡ブランチ**
- **作業ブランチ**

の 3 本が束になっています。リモートブランチは Gitea のサーバー上にあり、他の 2 本はローカル（お使いのデバイスの中）にあります。

:::tip リモート追跡ブランチはブランチではない
紛らわしいですが、厳密にはリモート追跡ブランチはブランチではありません。リモート追跡ブランチは「リモートブランチのスナップショット」に過ぎず、fetch 以外の更新操作を受け付けません。ローカル環境におけるリモートブランチの代役という認識でよいと思います。
:::

上図における各操作の意味は以下の通りです。

<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th style="width: auto; text-align: center">操作</th>
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
      <td>作業ブランチに変更を加えること</td>
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
      <th style="width: 100%;">操作</th>
      <th style="width: auto; text-align: center; text-wrap: nowrap">Git コマンド</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>コマンド <code>git clone {リポジトリの URL}</code> の実行</td>
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

:::info コミット ≠ ファイルの編集
commit の説明として「作業ブランチに変更を加えること」と書きましたが、上記の対応から分かるように、ただ単に作業ディレクトリのファイルの内容を編集するだけでは commit にはなりません。ファイルの変更をステージし、明示的にコミットして初めてブランチが伸びます。
:::

日頃の開発で「ブランチにコミットする」という言葉を聞いたら、通常は以下の一連の操作を指すと思ってよいでしょう。

1. 開発途中のブランチの最新状態をリモートから pull (fetch + merge) してくる
2. ファイルの中身を変更し、作業ブランチに commit する
3. 作業ブランチの変更を push してリモートブランチに反映させる

1 と 3 は結局のところ「リモートとローカルを同期する」ための操作です。「ブランチへのコミット」という操作は「**同期** → **作業ブランチへのコミット** → **同期**」という 3 段階によってリモートとローカルの両方に同じ変更を加えることを意味しています。

---

[#event/workshop/git/exercise](https://q.trap.jp/channels/event/workshop/git/exercise) の『**前編完走**』にスタンプをつけよう！