# おまけ2: SSHの設定

プッシュしたりプルしたりするときに、何回もユーザー名とパスワードを求められて入力がめんどくさかったのではないでしょうか。そんな人はパスワード認証より安全な、SSH認証を使うようにしましょう。

既に鍵を登録してあるかどうかは [SSH / GPGキー - traP Git](https://git.trap.jp/user/settings/keys) で確認できます。

まだ登録していない人は以下の手順で作成・登録してください。

### 鍵の生成

```bash
$ ssh-keygen -t ed25519 -C {GitHub or traQ に登録してあるメールアドレス}
Generating public/private ed25519 key pair.
Enter file in which to save the key (~/.ssh/id_ed25519):
```

鍵のファイルを作成する場所を聞かれますが、鍵を登録したことがない人はデフォルトでよいのでそのまま Enter を押します。

::: danger
既に同じ場所に同じファイル名の鍵を作成したことがある場合、上書きされてしまうので注意してください。
:::

以下のようにパスフレーズの設定を求められますが、そのまま Enter を押します。

```bash
Enter passphrase (empty for no passphrase):
```

パスフレーズの再入力でも同様に Enter を押します。

```bash
Enter same passphrase again:
```

### 鍵の登録

今生成した鍵の公開鍵を以下のコマンドで表示します。

```bash
$ cat ~/.ssh/id_ed25519.pub
```

出力された文字列をコピーしてください(メールアドレスが含まれていますが、それも含めて 1 行丸ごとコピーしてください)。
Mac の場合は以下のコマンドを実行すると、結果を出力せずにコピーできます。

```zsh
$ cat ~/.ssh/id_ed25519.pub | pbcopy
```

[SSH and GPG keys](https://git.trap.jp/user/settings/keys) にアクセスし、「キーを追加」をクリックします。

キー名: `id_ed25519`
内容: `{先ほどコピーした文字列}`

を入力し、「キーを追加」をクリックします。
これで登録が完了です。

### 接続確認

以下のコマンドを実行してください。`yes/no/[fingerprint]`は yes を選択してください。

```bash
$ ssh -T ssh://git@git.trap.jp:2200
```

以下のように表示されたら成功です。

```bash
Hi there, {ユーザー名}! You've successfully authenticated with the key named id_ed25519, but Gitea does not provide shell access.
If this is unexpected, please log in with password and setup Gitea under another user.
```

これで SSH 接続できるようになりました。
リポジトリをクローンするときは以下の画像のように、SSH の方を選択して URI をコピーするようにしてください。

![](https://md.trap.jp/uploads/upload_3b5f6128fa73ad298435adb9178310e6.png)

また、既に https の方でクローンしてしまった場合は以下のコマンドで URL を変更できます。

```bash
$ git remote set-url origin {SSHのURL}
```

## 参照

- [SSH について - GitHub Docs](https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/about-ssh)
- [既存の SSH キーの確認 - GitHub Docs](https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)
- [新しい SSH キーを生成して ssh-agent に追加する - GitHub Docs](https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [GitHub アカウントへの新しい SSH キーの追加 - GitHub Docs](https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
- [SSH 接続をテストする - GitHub Docs](https://docs.github.com/ja/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection)
