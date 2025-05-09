# SSH キーの登録

Git リポジトリを閲覧・編集する権限があることを証明するために用いられる SSH キーというものを登録します。以下の操作はこの後のテキストを追うために必要ですが、操作の意味はよく分からなくても大丈夫です。

## traP Gitea

この講習会では Gitea という Web サービスを使用します。

このサービスの役割については後ほど触れますが、簡単に説明しておくと「Git リポジトリの保管庫」です。類似サービスとしては GitHub や GitLab が有名ですが、この Gitea のサーバーは traP が管理しています。

[git.trap.jp](https://git.trap.jp/) にアクセスしたら、右上のボタンからログインしておきましょう。

## SSH キーの生成

ターミナルを開き、以下を実行します。

```sh
$ ssh-keygen -t ed25519 -C {メールアドレス}
```

キーのファイルを作成する場所を聞かれますが、キーを登録したことがない場合はデフォルトでよいので何も入力せず Enter を押します。

```txt
Generating public/private ed25519 key pair.
Enter file in which to save the key (~/.ssh/id_ed25519):
```

:::danger キーの上書き注意
既に同じ場所に同じファイル名の SSH キーを作成したことがある場合、キーの情報が上書きされてしまうので注意してください。
:::

以下のようにパスフレーズの設定を求められますが、何も入力せず Enter を押します。

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

「内容」の欄に先ほどコピーした公開鍵をペーストしてください。SSH キーはデバイスに保存されるので、複数のデバイスをお使いの場合は今操作中のデバイスを特定できるような「キー名」を付けておくことをお勧めします。

![](https://md.trap.jp/uploads/upload_b6b7cca28a313b327d6026693a3662b5.png)

「キーを追加」を押すことで登録が完了します。

## 接続の確認

以下のコマンドを実行してください。`yes/no/[fingerprint]` は `yes` を選択してください。

```sh
$ ssh -T ssh://git@git.trap.jp:2200
```

以下のように表示されたら、Gitea との SSH 接続に成功しています。

```txt
Hi there, {ユーザー名}! You've successfully authenticated with the key named {キー名}, but Gitea does not provide shell access.
If this is unexpected, please log in with password and setup Gitea under another user.
```

以上で SSH キーの設定は終了です。