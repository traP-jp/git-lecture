# 必要なツール

この講習会で必要になるソフトウェアは以下の通りです。

- Visual Studio Code（以下 VSCode）
- Git（Windows なら WSL2 上のもの）

VSCode がお使いのデバイスにインストールされていない方はプログラミング基礎講習会の [第 0 章](https://pg-basic.trap.show/text/chapter-0/) に従ってインストールと設定を済ませてから次に進んでください。

## Git が入っていることの確認

ターミナルを開いて以下を実行してください。

```sh
git --version
```

お使いのデバイスに Git がインストールされているならば、たとえば以下のように Git のバージョンを表す文字列が表示されます。

```txt
git version 2.39.5 (Apple Git-154)
```

もしデバイスに Git が入っているという確信が持てなければ、TA を呼んでください。

:::warning コマンド入力の注意
コマンド例に『ユーザー名』や『メールアドレス』などのように日本語の記述が登場したら、必ず**全体をあなた自身の情報に置き換えて**ください。

```sh
git config --global user.name ユーザー名
```

たとえば上記のコマンド例を実行するときは `git config --global user.name kitsne` のように入力して Enter を押してください。

また、`#` から始まる行は**単なる補足なので無視**してください。
:::

## Git の設定

ターミナルで以下のコマンドを一つずつ実行してください。

```sh
# ユーザー名の設定。traP か GitHub の ID がおすすめ
git config --global user.name ユーザー名

# メールアドレスの設定。既に GitHub のアカウントを持っていれば同じものにしてください
git config --global user.email メールアドレス

# コミットメッセージを VScode で書けるようにする設定
git config --global core.editor 'code --wait'

# デフォルトのブランチを master から main に変更。GitHub や Gitea に合わせます
git config --global init.defaultBranch main
```

以上で Git の設定は終了です。

:::tip Windows の環境の使い分け
Windows の方はプログラミング基礎講習会にて WSL2 という環境を構築する操作を行いました。この環境は Windows ネイティブ環境と異なり、UNIX 系と呼ばれる Mac や Linux と同類の環境です。

諸般の事情から、**Web 開発をするには WSL2 環境、Unity などを用いたゲーム開発には Windows ネイティブ環境**が適しているとされています。WSL2 ではなく Windows ネイティブ環境で Git を活用するには、Windows ネイティブ環境側でも別途 Git の設定をする必要があります。

この講習会では、Windows デバイスなら WSL2 上で Git を扱います。
:::

## VSCode の設定

VSCode に一つだけ設定を加えます。VSCode を開いた状態で、Mac の場合は `Command` + `,`、Windows の場合は `Ctrl` + `,` を同時押しして設定を開きます。

開けたら、設定の検索欄に "autofetch" と入力して "Git: Autofetch" 設定を見つけてください。デフォルトでは `false` になっていますが、これを `true` に切り替えてください。

![](https://md.trap.jp/uploads/upload_548a7000d4128b08a7a36fcd1efec2ac.png)

以上で VSCode の設定は終了です。