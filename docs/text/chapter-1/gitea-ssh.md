# SSH キーの登録

Git リポジトリの認証に用いられる SSH キーというものを登録します。以下の操作はこの後のテキストを追うために必要ですが、操作の意味はよく分からなくても大丈夫です。

## traP Gitea

この講習会では Gitea という Web サービスを使用します。

このサービスの役割については後ほど触れますが、簡単に説明しておくと「Git リポジトリの保管庫」です。類似サービスとしては GitHub や GitLab が有名ですが、この Gitea のサーバーは traP が管理しています。

:::tip traP の 2 種類の Gitea
[git-lecture.trap.jp](https://git-lecture.trap.jp/) の Gitea は、traP の普段使いの Gitea（[git.trap.jp](https://git.trap.jp/)）とは別でこの Git 講習会の期間のみ運用されています。この資料をあとから追っている場合は前者（[git-lecture.trap.jp](https://git-lecture.trap.jp/)）が使えないことがあるので、代わりに後者（[git.trap.jp](https://git.trap.jp/)）をお使いください。
:::

[git-lecture.trap.jp](https://git-lecture.trap.jp/) にアクセスしたら、右上のボタンからログインしてください。

## SSH キーの生成

ターミナルを開き、以下を実行します。

```sh
$ ssh-keygen -t ed25519 -C {メールアドレス}
```

キーのファイルを作成する場所を聞かれますが、キーを登録したことがない人はデフォルトでよいのでそのまま Enter を押します。

```txt
Generating public/private ed25519 key pair.
Enter file in which to save the key (~/.ssh/id_ed25519):
```

:::danger キーの上書き注意
既に同じ場所に同じファイル名の SSH キーを作成したことがある場合、キーの情報が上書きされてしまうので注意してください。
:::

以下のようにパスフレーズの設定を求められますが、そのまま Enter を押します。

```txt
Enter passphrase (empty for no passphrase):
```

パスフレーズの再入力でも同様に Enter を押します。

```
Enter same passphrase again:
```

以上で SSH キーが生成できました。以下のコマンドで公開鍵を出力し、コピーしてください。

```sh
$ cat ~/.ssh/id_ed25519.pub
```

## Gitea に SSH キーを登録する

[SSH / GPGキー - traP Git](https://git.trap.jp/user/settings/keys) にアクセスし、「キーを追加」をクリックします。

「内容」の欄に先ほどコピーした文字列をペーストしてください。SSH キーはデバイスに保存されるので、複数のデバイスをお使いの場合は今操作中のデバイスを特定できるような「キー名」を付けることが望ましいです。

![](https://md.trap.jp/uploads/upload_b6b7cca28a313b327d6026693a3662b5.png)

「キーを追加」を押すことで登録が完了します。

## 接続の確認

以下のコマンドを実行してください。`yes/no/[fingerprint]` は `yes` を選択してください。

```sh
$ ssh -T ssh://git@git.trap.jp:2200
```

以下のように表示されたら成功です。

```txt
Hi there, {ユーザー名}! You've successfully authenticated with the key named {キー名}, but Gitea does not provide shell access.
If this is unexpected, please log in with password and setup Gitea under another user.
```

以上で SSH キーの設定は終了です。

## 参考

- [SSH について - GitHub Docs](https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/about-ssh)
- [既存の SSH キーの確認 - GitHub Docs](https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)
- [新しい SSH キーを生成して ssh-agent に追加する - GitHub Docs](https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [GitHub アカウントへの新しい SSH キーの追加 - GitHub Docs](https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
- [SSH 接続をテストする - GitHub Docs](https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection)