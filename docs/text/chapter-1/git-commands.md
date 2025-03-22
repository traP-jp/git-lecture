# Git の操作の実体

この章では、前編で行ってきた VSCode 上のボタン操作の裏でどんな処理がなされていたのかを解説し `fetch` や `pull` といったコマンドとの関係性を明らかにします。

大抵の開発ではこれらの操作の細かい意味合いはあまり強く意識されず、それを深く理解していなくても Git を開発に役立てることは十分に可能です。とはいえ、これらは Git の最も基本的な操作とされていて、その役割を把握していなければ解決が難しい問題に遭遇することも稀ではないので、以降の内容をなんとなくでも把握しておくことをおすすめします。

## ブランチ内での操作

以下の図は 1 本のブランチ（ここでは main という名前のブランチ）に関する操作の一覧です。

![](https://md.trap.jp/uploads/upload_20ec43238b38dfef06c692b80c4469fa.png)

全体が同期するので 1 本と見なすことが一般的ですが、実際には

- **リモートブランチ**
- **リモート追跡ブランチ**
- **作業ブランチ**

の 3 本が束になっています。リモートブランチは Gitea のサーバー上にあり、他の 2 本はローカル（お使いのデバイスの中）にあります。

:::tip リモート追跡ブランチはブランチではない
紛らわしいですが、厳密にはリモート追跡ブランチはブランチではありません。リモート追跡ブランチは「リモートブランチのスナップショット」に過ぎず、`fetch` 以外の更新操作を受け付けません。ローカル環境におけるリモートブランチの代役という認識でよいと思います。
:::

上図における各操作の意味は以下の通りです。

<table style="width: 100%; border-collapse: collapse;">
  <tr>
    <th style="width: auto; text-align: center">操作</th>
    <th style="width: 100%;">意味</th>
  </tr>
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
</table>

前編でターミナル及び VSCode 上で行った操作との対応は以下のようになります。

<table style="width: 100%; border-collapse: collapse;">
  <tr>
    <th style="width: 100%;">操作</th>
    <th style="width: auto; text-align: center; text-wrap: nowrap">Git コマンド</th>
  </tr>
  <tr>
    <td>コマンド <code>git clone {リポジトリの URL}</code> の実行</td>
    <td style="text-align: center"><strong>clone</strong></td>
  </tr>
  <tr>
    <td>デスクトップの mydrive で README.md を編集して「コミット」ボタンを押す</td>
    <td style="text-align: center"><strong>commit</strong></td>
  </tr>
  <tr>
    <td>デスクトップの mydrive で「変更を同期」ボタンを押す</td>
    <td style="text-align: center"><strong>push</strong></td>
  </tr>
  <tr>
    <td>ダウンロードの mydrive で「変更の同期」ボタンを押す</td>
    <td style="text-align: center"><strong>pull</strong></td>
  </tr>
</table>

:::info コミット ≠ ファイルの編集
commit の説明として「作業ブランチに変更を加えること」と書きましたが、上記の対応から分かるように、ただ単に作業ディレクトリのファイルの内容を編集するだけでは commit にはなりません。ファイルの変更をステージし、明示的にコミットして初めてブランチが伸びます。
:::

日頃の開発で「ブランチにコミットする」という言葉を聞いたら、通常は以下の一連の操作を指すと思ってよいでしょう。

1. 開発途中のブランチの最新状態をリモートから pull してくる
2. ファイルの中身を変更し、作業ブランチに commit する
3. 作業ブランチの変更を push してリモートブランチに反映させる

1 と 3 は結局のところ「リモートとローカルを同期する」ための操作です。「ブランチへのコミット」という操作は「**同期** → **作業ブランチへのコミット** → **同期**」という 3 段階によって 3 本のミクロブランチの全てに同じ変更を加えることを意味しています。

:::tip VSCodeの「変更の同期」ボタン
表では「変更の同期↑」と「変更の同期↓」ボタンに別の意味を持たせましたが、両方ともやっていることは同じで「**pull** + **push**」をしているのだ、と統一して考えることもできます。リモートブランチに変更がなければ **pull** をしても何も起こらず、作業ブランチに変更がなければ **push** をしても何も起こらないからです。
:::