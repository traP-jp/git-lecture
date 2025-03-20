# Git リポジトリの作成

Gitea にアクセスしてリポジトリを作成し、お使いのデバイスに複製するところまで行います。

## リポジトリの作成

[git-lecture.trap.jp](https://git-lecture.trap.jp/) にアクセスしたら、右上のボタンからログインしてください。ログインができたら右上の ＋ ボタンを押して、リポジトリを作成する画面に飛んでください。

![](https://md.trap.jp/uploads/upload_f34ee9b8e0f954bd4d12fa6d9f43975c.png)

橙色の枠で囲った部分のみ編集して、最下部の「リポジトリを作成」ボタンを押してください。

![](https://md.trap.jp/uploads/upload_97a6661f6353c68432894c178a3e2f53.png)

リポジトリが作成されるとこんな画面に飛びます。

![](https://md.trap.jp/uploads/upload_9cbdf6b5927aa95d5399b7dc45ddccaf.png)

橙色の丸で囲ったボタンをクリックして以下のテキストを入手します。

```txt
ssh://git@git.trap.jp:2200/kitsne/mydrive.git
```

これは SSH アドレスといって、URL みたいなものです。よくみる https:// の形式（HTTP プロトコル）ではなく SSH プロトコルを採用していますが、基本的な役割は同じです。GitHub のアカウントに SSH キーを登録する方法は [なろう講習会テキスト](https://traptitech.github.io/naro-text/chapter1/dicts/ssh/0_index.html) を参照してください。