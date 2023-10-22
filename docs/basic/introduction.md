# 準備

Gitの練習をするための準備をしていきます。

## 注意

**Git講習会中はGitサービスとして https://git-lecture.trap.jp (Gitea) を使います。**  
普段の開発では https://git.trap.jp を用いることが多いです。  
中身は同じなので、講習会後に復習する場合で前者のURLが切れている場合、後者のURLで進めてもらうことも可能です。

また、Git講習会では事前に以下の環境が整っている必要があります。

- Visual Studio Code
- (Windowsの場合はWSL2)

:::warning
この資料では`{}`でくくられているところは自分の情報に合わせて書き換えてください

例:

```bash
git config --global user.name {userName}
↓
git config --global user.name mehm8128
```

:::

## Gitの設定

ターミナルで以下のコマンドを実行してください。

```bash
# ユーザー名の設定。任意だがtraPかGitHubのIDがおすすめ
$ git config --global user.name {userName}
# メールアドレスの設定。既にGitHubのアカウントを持っている人はGitHubと同じにしてください
$ git config --global user.email {userEmail}
# コミットメッセージをVScodeで書けるようにする設定
$ git config --global core.editor 'code --wait'
```

## Gitリポジトリの作成

1. [実習用Gitea](https://git-lecture.trap.jp)にアクセスし、右上のボタンからログインする

2. 右上の`+`から`新しいリポジトリ`をクリック
   ![](https://md.trap.jp/uploads/upload_e87ef4cedae02838281f0d93a8d23bdb.png)

3. リポジトリ名に適当な名前を入力し、`リポジトリをプライベートにする`の**チェックを外す**

   - 他の項目はデフォルトのままでOKです
   - リポジトリ名は何でもよいですがここでは`git-lecture`とします(ここで別のリポジトリ名にした人は後でコマンドを入力するときも`git-lecture`の部分を適宜読み替えてください)
   - チェックを外すことでパブリック(公開)リポジトリになり、誰でも見られるようになります(プライベートの場合、自分以外見られない)
   - **分からなくなったときなどにTAがリポジトリを見られるようになるため、今回はチェックを外してください**

4. `リポジトリを作成`をクリック
   ![](https://md.trap.jp/uploads/upload_e3843f3559892a90d2ef775809510aaa.png)

## リポジトリのクローン(`git clone`)

リモートリポジトリをローカルにコピーする作業です。

1. Giteaで作成したリポジトリのページにて`HTTPS`を選択し、URLをコピー (赤丸の箇所をクリックでコピーできる)。
   ![](https://md.trap.jp/uploads/upload_3b38deaa35b474e4532462215f27cf64.png)

2. ターミナルを開き、1.でコピーしたリンクを使って`~/develop`以下に`git clone`する。

```bash
$ mkdir ~/develop
$ cd ~/develop
$ git clone {コピーしたリンク}
```

ユーザー名とパスワードを聞かれるので、**traQのIDとtraQのパスワードを入力**

```bash
Username for 'https://git-lecture.trap.jp': mehm8128
Password for 'https://mehm8128@git-lecture.trap.jp':
warning: You appear to have cloned an empty repository.
```

3. クローンしたリポジトリをVSCodeで開く

```bash
$ code ~/develop/git-lecture
```

:::warning
VSCodeの右下に「git fetchを自動でするようにしますか」みたいなのが出たら「Yes」で大丈夫です(`git pull`は実は`git fetch`をしてから`git merge`をするというコマンドで、本来`git fetch`が更新されたリモートリポジトリの情報をローカルリポジトリに持ってくる、みたいなコマンドです。詳しくは「git fetch pull 違い」とかで調べてみてください)
:::
