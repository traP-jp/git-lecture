# 準備

今回の実習で使うものの準備をしていきます！

## 注意

**Git講習会中はGitサービスとして [git-lecture.trap.jp](https://git-lecture.trap.jp) (Gitea) を使います。**  
普段の開発では traP Gitea ([git.trap.jp](https://git.trap.jp)) または GitHub ([github.com](https://github.com/)) を用いることが多いです。  
中身は同じなので、講習会後に復習する場合で前者のURLが切れている場合、後者のURLで進めてもらうことも可能です。

また、Git講習会では事前に以下の環境が整っている必要があります。

- Visual Studio Code
- (Windowsの場合は) WSL2

ここでは詳細なインストール手順は省きます。分からない点があれば気軽にTAに質問してください！

:::warning
この資料では`{}`でくくられているところは自分の情報に合わせて書き換えてください

例:

```bash
git config --global user.name {userName}
↓
git config --global user.name mehm8128
```

:::

<script setup>
import { ref, watch } from 'vue'
const checked = ref(false);
</script>

<div class="checkbox-wrapper tip custom-block">
  <div class="confirm-sentence">ちゃんと注意点を読みましたか？</div>
  <input type="checkbox" id="confirm-reading-warning" v-model="checked" class="inp-cbx" />
  <label for="confirm-reading-warning" class="cbx">
    <span>
      <svg viewBox="0 0 12 10" height="10px" width="12px">
        <polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span>
    <span class="confirm-checkbox-sentence">注意点を読んだ</span>
  </label>
</div>

<div :class="{'not-available': !checked}" class="after-warning">

## Gitの設定

ターミナルで以下のコマンドを実行してください。

```bash
# ユーザー名の設定。任意だがtraPかGitHubのIDがおすすめ
$ git config --global user.name {userName}
# メールアドレスの設定。既にGitHubのアカウントを持っている人はGitHubと同じにしてください
$ git config --global user.email {userEmail}
# コミットメッセージをVScodeで書けるようにする設定
$ git config --global core.editor 'code --wait'
# デフォルトのブランチをmasterからmainに変更。GitHubやGiteaに合わせます
$ git config --global init.defaultBranch main
```

## Gitリポジトリの作成

まずは今回の演習で使うGitのリポジトリを作成していきましょう！

:::warning

何か問題が起きたらすぐにTAに相談するようにしてください！

:::

### 1. Giteaにアクセスする

[実習用Gitea](https://git-lecture.trap.jp) にアクセスして、右上のボタンからログインします。

### 2. リポジトリを作る

右上の`＋`から`新しいリポジトリ`をクリックする

![](https://md.trap.jp/uploads/upload_e87ef4cedae02838281f0d93a8d23bdb.png)

- **リポジトリ名** → `git-lecture`
- **公開/非公開** → `リポジトリをプライベートにする`の**チェックを外す**

他の項目はデフォルトのままでOKです
最後に「リポジトリを作成」をクリックして、リポジトリ作成は完了です！

![](https://md.trap.jp/uploads/upload_e3843f3559892a90d2ef775809510aaa.png)

## リポジトリのクローン(`git clone`)

リモートリポジトリをローカルにコピーする作業です。

1. Giteaで作成したリポジトリのページにて`HTTPS`を選択し、URLをコピー (赤丸の箇所をクリックでコピーできる)

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

:::warning
パスワードを入力するときに何も入力していないかのような表示になりますが、それが正常です。頑張ってパスワードを打ってください。
:::

3. クローンしたリポジトリをVSCodeで開く

```bash
$ code ~/develop/git-lecture
```

:::tip
VSCodeの右下に「git fetchを自動でするようにしますか」みたいなのが出たら「Yes」で大丈夫です(`git pull`は実は`git fetch`をしてから`git merge`をするというコマンドで、本来`git fetch`が更新されたリモートリポジトリの情報をローカルリポジトリに持ってくる、みたいなコマンドです。詳しくは「git fetch pull 違い」とかで調べてみてください)
:::

</div>

<style>
.checkbox-wrapper.checkbox-wrapper { margin-block: 2rem; }
.confirm-sentence {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.confirm-checkbox-sentence {
  font-weight: bold;
}

.checkbox-wrapper input[type="checkbox"] {
  display: none;
  visibility: hidden;
}

.checkbox-wrapper .cbx {
  margin: auto;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}
.checkbox-wrapper .cbx span {
  display: inline-block;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
}
.checkbox-wrapper .cbx span:first-child {
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  transform: scale(1);
  vertical-align: middle;
  border: 1px solid #9098a9;
  transition: all 0.2s ease;
}
.checkbox-wrapper .cbx span:first-child svg {
  position: absolute;
  top: 3px;
  left: 2px;
  fill: none;
  stroke: #ffffff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
  transform: translate3d(0, 0, 0);
}
.checkbox-wrapper .cbx span:first-child:before {
  content: "";
  width: 100%;
  height: 100%;
  background: var(--vp-custom-block-tip-border);
  display: block;
  transform: scale(0);
  opacity: 1;
  border-radius: 50%;
}
.checkbox-wrapper .cbx span:last-child {
  padding-left: 8px;
}
.checkbox-wrapper .cbx:hover span:first-child {
  border-color: var(--vp-custom-block-tip-border);
}

.checkbox-wrapper .inp-cbx:checked + .cbx span:first-child {
  background: var(--vp-custom-block-tip-border);
  border-color: var(--vp-custom-block-tip-border);
  animation: wave 0.4s ease;
}
.checkbox-wrapper .inp-cbx:checked + .cbx span:first-child svg {
  stroke-dashoffset: 0;
}
.checkbox-wrapper .inp-cbx:checked + .cbx span:first-child:before {
  transform: scale(3.5);
  opacity: 0;
  transition: all 0.6s ease;
}

@keyframes wave {
  50% {
    transform: scale(0.9);
  }
}
</style>

<style>
  .not-available {
    opacity: 0.3;
    pointer-events: none;
  }
  .after-warning {
    transition: opacity 0.2s;
  }
</style>