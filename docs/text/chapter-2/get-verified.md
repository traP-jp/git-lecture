# コミットに署名する

じつは、誰かに成り済ましてコミットをすることはあなたが思うよりずっと簡単です。コミットに署名することで、そのコミットがあなたのものであると証明することができます。

## Git とメールアドレス

Git では、開発に関わった個人を見分ける ID としてメールアドレスの文字列それ自体が使われています。[必要なツール](/text/chapter-1/requirements.html#git-の設定) の Git の設定にてターミナルに打ち込んだメールアドレスです。

リポジトリにおけるコミットやその他の操作の履歴にはこのメールアドレスが埋め込まれ、リポジトリが公開されている場合はアドレスも公開されます。ただし、Git やホスティングサービスによってこのアドレスに自動的に何かが送られてくることはありません。

:::tip コミットの埋め込み情報
何かのリポジトリ（たとえば [traQ-S_UI](https://github.com/traPtitech/traQ_S-UI)）をローカルにクローンしてきて、以下を実行してみましょう。

```sh
git log
```

すると、歴代全てのコミットに付属する「コミットハッシュ」「作者の名前とメールアドレス」「作成日時」「コミットメッセージ」などの情報が以下のようなフォーマットで表示されます。

```
commit aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
Author: kitsne <169665926+kitsne241@users.noreply.github.com>
Date:   Sat Jan 1 12:00:00 2100 +0900

    fix: このコミットメッセージはサンプルです
```

`git log` の表示は Q キーを押すことで中断できます。このように、コミットに埋め込まれる作者名・メールアドレスなどの情報は公開リポジトリならば誰もが容易に閲覧できます。
:::

Gitea 上でリポジトリにコミットした人のアイコンなどを表示できればとても便利です。ところが Git（ソフトウェア）と traP Gitea（ホスティングサービス）は別個のサービスなので、Git で行うコミットなどの操作に Gitea が介入することはできません。

コミットに埋め込まれている個人の情報は基本的にはメールアドレスしかないので、Gitea はこのメールアドレスを紐づけているアカウントを検索して見つかったものを「コミットしたユーザー」として表示します。すなわち、あなたが誰かのメールアドレスを知っていて、それを [必要なツール](/text/chapter-1/requirements) の章で設定していたら、あなたはそのユーザーに成り済ますことができます。

![](https://md.trap.jp/uploads/upload_a478c1323bdb8c2f0d25355f1bf54743.png)
<p style="font-size: 12px; text-align: center; margin: -16px 0 20px 0">本人に許可を得ています。名前も変えれば完璧</p>

## 署名の技術

コミットへの署名は公開鍵暗号という技術を用いて行います。コミットに署名するための仕組みには現在 SSH と GPG の 2 種類がありますが、ここでは SSH を用いた方法を説明します。

:::info 公開鍵暗号とその用途
公開鍵暗号は関数 $f$ を公開し $f^{-1}$ を秘匿した状態で、情報をこれらの関数に通すことで情報の保護や正統性の証明を可能にする技術です。$f$、$f^{-1}$ はそれぞれ **公開鍵**、**秘密鍵** と呼ばれています。

- 外部に漏れないように情報を受信したい場合、$f$ は暗号化関数、$f^{-1}$ は復号関数としてはたらきます。秘密鍵 $f^{-1}$ を秘匿する私が相手から安全に情報 $a$ を受信したい場合、相手には公開鍵 $f$ を用いて暗号化した情報 $f(a) = a'$ を送ってもらいます。この情報を復号できるのは秘密鍵 $f^{-1}$ を所持している私だけなので、情報 $f^{-1}(a') = a$ を安全に受け取ることができます。

- 公開鍵暗号は **署名** すなわち渡す情報の正統性の証明に用いることもでき、この場合秘密鍵 $f^{-1}$ が暗号化関数としてはたらきます。渡したい情報から固有に得られる値 $b$ を $f^{-1}$ で暗号化した $f^{-1}(b) = b'$ を署名として情報に添えて渡します。公開鍵 $f$ によって確かに $f(b') = b$ が成り立つことを相手に確認してもらい、秘密鍵を所持する本人であると証明することができます。

コミットの署名ではコミットの内容やコミットメッセージなどの情報全体をハッシュ関数にかけた値を $b$ として署名に用います。
:::

[SSH キーの登録](http://localhost:5173/text/chapter-1/gitea-ssh.html#ssh-%E3%82%AD%E3%83%BC%E3%81%AE%E7%94%9F%E6%88%90) の章で生成した SSH キーは、ホームディレクトリ直下の `.ssh` という隠しディレクトリの中にあります。ターミナルで以下を実行したとき、一覧の中にある `id_ed25519` が秘密鍵、`id_ed25519.pub` が公開鍵です（pub = public）。

```sh
cd ~/.ssh && ls  # .ssh ディレクトリの項目一覧を表示
```

これらは両方とも短いテキストファイルです。一度それぞれの中身がどんな形をしているかを見ておくとあとで役に立つことがあるかもしれません。ただし、とくに秘密鍵は誰かに送ったり見せたりしないように十分気をつけてください。

## 署名の方法

Gitea の [SSH / GPG キー](https://git.trap.jp/user/settings/keys) のページを開き、[SSH キーの登録](http://localhost:5173/text/chapter-1/gitea-ssh.html#gitea-%E3%81%AB-ssh-%E3%82%AD%E3%83%BC%E3%82%92%E7%99%BB%E9%8C%B2%E3%81%99%E3%82%8B) の章であなたが登録した SSH キーの「確認」ボタンを押すと、以下のような表示が現れます。

![](https://md.trap.jp/uploads/upload_ccd610216cc952b6eb3ec8318b634ead.png)

トークンをコピペして、その他の場所は以下に倣ってコマンドを実行してください。

```sh
echo -n 'トークン' | ssh-keygen -Y sign -n gitea -f ~/.ssh/id_ed25519
```

すると、以下のような形式の SSH 署名が出力されるはずです。これを「Armor 形式の SSH 署名」欄に貼り付けて「確認」ボタンを押します。

```
-----BEGIN SSH SIGNATURE-----
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAA
-----END SSH SIGNATURE-----
```

最後に、以下のコミットを **1 行ずつ** 実行してください。

```sh
git config --global commit.gpgsign true  # コミットの署名を有効にする
git config --global gpg.format ssh       # SSH での署名を選択
```


以上の手順によって、Gitea 上でコミットに署名できるようになります。

![](https://md.trap.jp/uploads/upload_14c61e8a0a143350905ad2260ead0d08.png)

[SSH キーの登録](http://localhost:5173/text/chapter-1/gitea-ssh.html#gitea-%E3%81%AB-ssh-%E3%82%AD%E3%83%BC%E3%82%92%E7%99%BB%E9%8C%B2%E3%81%99%E3%82%8B) で登録した SSH キーは、これまでプライベートリポジトリのクローン・プッシュなどの操作にのみ用いられていましたが、以上の設定によってコミットの署名にも用いられるようになりました。

:::tip SSH と GPG

先ほど「コミットに署名するための仕組みには現在 SSH と GPG の 2 種類があります」と申し上げた通り、SSH と GPG は公開鍵署名のための別個の仕組みです。とすると、先ほど挙げたこのコマンドは少々奇妙です。まるで SSH が GPG の一種であるかのような書き方をしています。

```sh
git config --global commit.gpgsign true  # コミットの署名を有効にする
git config --global gpg.format ssh       # SSH での署名を選択
```

これは歴史的背景によるものです。当初の Git は GPG を用いたコミット署名のみをサポートしていましたが、2021 年にリリースされた Git 2.34 から SSH による署名が可能になりました。具体的には、従来のプロセスにおける「秘密鍵と署名のフォーマット」を SSH の仕組みで代替する方法が提供されています。その他の部分は依然として GPG（GNU Privacy Guard）方式に従っていますが、ユーザーはより初期設定が簡単な SSH だけでコミットに署名できるようになりました。
:::

---

[#event/workshop/git/exercise](https://q.trap.jp/channels/event/workshop/git/exercise) の『**後編完走**』にスタンプをつけよう！