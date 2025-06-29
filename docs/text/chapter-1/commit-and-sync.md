# コミットと同期

クラウドストレージの利点は「異なる場所からアクセスし、編集し、同期できる」ことです。Git と Gitea を使って作ったクラウドストレージで同じことをしてみましょう。

## リポジトリの更新

ディレクトリを VSCode で開くには `code` コマンドを用います。ターミナルで以下のコマンドを **1 行ずつ** 実行していくと、3 行目の実行によって VSCode が起動し、Desktop の mydrive が開かれます。

```sh
cd ~          # 1. ホームディレクトリに移動
cd Desktop    # 2. ホームディレクトリ直下の Desktop ディレクトリに移動
code mydrive  # 3. Desktop の中の mydrive ディレクトリを VSCode で開く
```

ウェルカムページが表示されたら閉じ、エディタでは README.md を開いておきます。また、ウィンドウ左のアクティビティバーからソース管理タブ（○ が 3 つ曲線で繋がれた図形）を開き、以下のような画面にしてください。

![](https://md.trap.jp/uploads/upload_ab7b01699a147f647ee4877360035b4c.png)

この状態で README.md を編集して保存すると画面に色々変化が生じます。

![](https://md.trap.jp/uploads/upload_692f288ff341740034e6b5dcd1f12ddd.png)

- README.md で編集した部分の左側に青色 or 緑色の縦線が入る
- サイドバーの「変更」の部分に README.md が追加される
- 「コミット」ボタンが使用可能になる

など。この状態で以下を順に実行してください。

1. カーソルを「コミット」ボタンの直下にある「変更」の文字の上に持っていき、すぐ右隣に表示される「＋」を押す
2. 「コミット」ボタンの上の入力欄に「README.md 更新」と書き入れて「コミット」ボタンを押す
3. 「コミット」ボタンが「変更の同期 1↑」ボタンに切り替わるので、それも押す

![](https://md.trap.jp/uploads/upload_3f6e6d08bf6ff02c34ee21cc4b1e9e4d.png)
<p style="font-size: 12px; text-align: center; margin: -16px 0 20px 0">手順 2 の途中</p>

:::info COMMIT_EDITMSG
入力欄（コミットメッセージ）が空欄のまま「コミット」ボタンを押すと VSCode が英語が書かれた謎のファイルを表示して脅かして来ますが、単純に「入力欄が空欄だよ〜」と言われているだけです。開かれたファイルを閉じてコミットメッセージを書くことで問題なくコミットできます。

![](https://md.trap.jp/uploads/upload_b695d2874b17d74872c5d08de0bebf70.png)

ちなみに、このファイルの 1 行目もコミットメッセージの入力欄として機能しています。コミットメッセージを書き込んでファイルを閉じると「コミット」ボタンを押したのと同じ扱いになります。
:::

ここまで終わったら、Gitea のリポジトリのページに飛んでみます。リロードすると先ほどの更新が反映されていることが確認できます。

![](https://md.trap.jp/uploads/upload_87cc42f0fb8105190a1ec3fc6e9d3556.png)

## リポジトリの同期

今度は Downloads ディレクトリにある mydrive を VSCode の別のウィンドウで開きます。以下のコマンドを 1 行ずつ実行してください。

```sh
cd ~
cd Downloads
code mydrive
```

:::tip 同じ働きのコマンド
ちなみに、上の 3 行のコマンドと同じことを以下の 1 行で実行することもできます。
```sh
code ~/Downloads/mydrive
```
:::

今回、2 つの mydrive は同一の環境に存在しますが、本当はそれぞれ別のデバイスにリポジトリをクローンしてクラウドストレージにアクセスしているという想定です。

![](https://md.trap.jp/uploads/upload_32e50e69539a1b8f890a2bcae1be5aa8.png)

VSCode で開いて少し待つと「コミット」ボタンが「変更の同期 1↓」ボタンに変化します。

:::tip 同期の方向
先ほどと違うのは矢印が上ではなく下を向いている点です。これは先ほどの同期が「Desktop の mydrive → Gitea 上の mydrive」だったのに対し、今回の同期が「Gitea 上の mydrive → Downloads の mydrive」であることを表しています。
:::

「変更の同期 1↓」ボタンを押すと README.md の内容が書き変わります。先ほど Desktop ディレクトリ内の mydrive で行った変更が、今開いている Downloads ディレクトリ内の mydrive にも同期されました。

![](https://md.trap.jp/uploads/upload_abd67dc27feefeff9b60fe81052d43f9.png)

今回はリポジトリに元からただ一つ置かれていた README.md というテキストファイルの更新と同期を試しましたが、新しいファイルを同じ場所に置いて同期させることもできます。授業ノートも書きかけのレポートももちろん載せられます（個人的な用途ではリポジトリは非公開に設定しておきましょう）。

Git と Gitea を使ってクラウドストレージを作ることができましたね。

---

[#event/workshop/git/exercise](https://q.trap.jp/channels/event/workshop/git/exercise) の『**コミットと同期 まで**』にスタンプをつけよう！