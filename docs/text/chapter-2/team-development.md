# 共同開発の基本

GitHub Flow に従った共同開発の現場において、個人の作業は以下の繰り返しです。

1. **main からブランチを生やす**
2. **ブランチ内でコミットをしていく**
3. **変更が済んだらプルリクエストを立てる**
4. **main にマージする**

ここまでの操作で全て体験できましたね。この章ではそれぞれの操作の意味を明確にします。

## プルリクエスト

**プルリクエスト**（Pull Request, PR）という機能はバージョン管理ツールとしての Git 自体には存在せず、GitHub や Gitea などのホスティングサービスの側が提供しています。変更を直接 main にマージするのではなく、変更点に問題がなさそうか、みんなの審判を問うためのワンクッションです。

:::warning プルリクエストは「プルのリクエスト」ではない
プルリクエストの趣旨は「このブランチを main に **マージ** してほしい」であって、その先の「このブランチがマージされたら各自で main を **プル** してほしい」ではありません。歴史的経緯から「プルリクエスト」という名前で今まで通ってきたものの、ややこしいという指摘は未だに受け続けているようです。GitHub や Gitea では「プルリクエスト」と呼ばれていますが、他の著名なホスティングサービスの一つである GitLab では「マージリクエスト」というより直感的な表現が使われています。
:::

マージという言葉には前編で説明した以上の意味があることがお分かりになるかと思います。一般に「**ブランチの変更内容同士を統合すること**」をマージと呼びます。

「sub → main のマージ」とは main ブランチから sub ブランチを生やして以降の main と sub それぞれの変更を統合して main に反映させることを意味します。ところが、前章までの実習では sub ブランチをマージするまでの間 main ブランチに何も変更を加えていないので、マージによって main に sub の変更がそのまま反映されたのです。

:::warning マージ元はマージの影響を受けない
sub の変更を main にマージした直後でも sub と main が全く同じ状態になるとは限らないことに注意が必要です。マージされるのは「状態」ではなく「**変更**」なので、sub ブランチの中で変更された箇所以外の sub ブランチの内容は main には影響を与えません。

![](https://md.trap.jp/uploads/upload_8b27e59a114f984bf7c41d456dc95b40.png)
<p style="font-size: 12px; text-align: center; margin: -8px 0 0 0">sub をマージしてもファイル A の状態が戻るわけではない</p>
:::

ブランチが途中で生えたりマージされたりするとコミットグラフはこんな感じになります。

![](https://md.trap.jp/uploads/upload_8354df7754459cfd08b0e67b333e8b19.png)

:::tip ブランチという命名について
そもそも、ほとんどの場合「あとで main にマージする」ために生やすものを「木の枝（ブランチ）」と呼ぶのもちょっと変な話ではありますね。上の図のようにブランチがマージしてしまったら、コミットグラフは少なくともグラフ理論における「木」の定義には当てはまらないものになります。とはいえ、代案を考えろと言われても…。
:::

## Gitea の機能

Gitea など多くのホスティングサービスは共同開発の効率化のために様々な機能を提供しています。これらはプルリクエストと同じく Git には存在しない機能です。

- **Issue** ... Gitea や GitHub では、そのプロダクトについて「現状の問題点」とか「やるべきこと」をメモ・共有するために Issue を立てる機能があります。Issue にはその問題点の性質を示すタグをつけることができます。[traQ フロントエンドリポジトリ の Issues](https://github.com/traPtitech/traQ_S-UI/issues) を見るとこの機能の意義が掴めると思います。

- **レビュー** ... 立てられたプルリクエストにおける変更に問題がなさそうかを検証することです。Gitea 上でもレビューをするための UI や機能が提供されていて、1 人以上の Approve がなければプルリクエストのマージができないような設定にすることもできます。

## .gitignore

.gitignore は「**作業ディレクトリに載ってはいるが Git リポジトリに含めたくない**」ファイルやディレクトリのパスや拡張子を記しておけるファイルです。多くの場合 .gitignore ファイルはリポジトリのルートに一つだけ置かれ、その中にパスが記されたファイルやディレクトリは Git によるバーション管理を外れます。

.gitignore は主に以下のような用途で用いられます。

### 環境変数の除外

開発したシステムをずっと動かしておきたい場合、自分の PC で動かしておくわけにもいかないので、[NeoShowcase](https://ns.trap.jp) などの外部の環境に **デプロイ**（移設）することになります。システムに対し環境ごとに異なる値を与えたい場合、それらは **環境変数** として与えます。NeoShowcase にも登録したアプリケーションそれぞれに環境変数を設定できる UI が存在します。

![](https://md.trap.jp/uploads/upload_37df31b5612b2a7c87af06a9658a780f.png)

開発中のシステムが参照する環境変数は作業ディレクトリの内部に .env のようなファイルを用意して書いておくと便利です。その上で、本番環境に予め設定してある環境変数と競合を生じないよう、.gitignore に .env を加えてリポジトリからは除外しておく運用が一般的です。

:::info 環境変数と機密情報の秘匿
traP Gitea 上のリポジトリは部員に対してのみ公開されますが、GitHub などのホスティングサービスを使う場合は Web 上に公開された Git リポジトリで開発を進めていくことも珍しくありません。それどころか、GitHub の無料会員は数年前までプライベートリポジトリを作ることが出来ませんでした。

実行中のシステムが必要とする情報のうち、API トークン（パスワード）など外部に悪用されないように秘匿しておきたい文字列もよく環境変数として扱われます。実際に環境に依存するか否かはさておき、.gitignore の恩恵でリポジトリに含まれなくなった .env はこうした機密情報を置いておくにはうってつけの場所です。
:::

### ライブラリやモジュールの除外

多くのフレームワークでは Web 上からパッケージをインポートしてシステムに組み込むことが一般的です。そのため、パッケージのインポートと管理を担うパッケージマネージャと呼ばれるソフトウェアがフレームワークごとに提供されています。ちなみに、パッケージマネージャは Git 同様に代表的な CLI ソフトウェアの一種です。

必要なパッケージを箇条書きで記したファイル（依存関係リストファイル）だけあれば、パッケージマネージャがそれを自動で読み取ってパッケージをインポートしてくれるので、パッケージの実体は Git リポジトリに載せておく必要がありません。これらを収めるディレクトリがリポジトリ内に作られる場合、パスを .gitignore に載せておくことで Git リポジトリを軽量化することができます。


### その他の不要なファイルの除外

Git リポジトリを開発に用いる場合、基本的に「**必要最低限のファイルを載せる**」のがよい使い方であるとされています。モジュールだけでなく、ビルドの中間ファイルや生成物など、リポジトリから復元可能なデータや一時的にしか使わないデータの形式や保存場所は .gitignore に追加してリポジトリに含めない工夫がなされることが一般的です。

:::tip .gitignore の実例とテンプレート
traQ フロントエンドリポジトリのルートに置かれている [.gitignore ファイル](https://github.com/traPtitech/traQ_S-UI/blob/master/.gitignore) を例として見てみます。

![](https://md.trap.jp/uploads/upload_c6f36e1ffb29011a1916357da80e14fb.png)

実は、写っている最初の 6 行にこれまでに挙げた 3 つの .gitignore の用途が全て含まれています。Vite フレームワークによる Web 開発の実例として専門用語を交えて軽く紹介しますが、あまり深入りせず「そういうもの」程度に読んでいただければ大丈夫です。

- 6 行目の `.env.local` は **環境変数を書いておくファイル** です。先ほど「.env は一般に Git リポジトリに含めない」と書きましたが、紛らわしくも運用によっては .env が『環境に依存しない定数』を書く場所として用いられリポジトリに含まれることがあるので、本来の .env の役割である『環境依存』というニュアンスを強めてこのようなファイル名が用いられたりします。

- 2 行目 の `node_modules` は **モジュールがインポートされるディレクトリ** です。リポジトリのルートに見つかる package.json というファイルに必要なモジュールが全て列挙されているので、npm というパッケージマネージャがあれば自動でこのディレクトリの中身を再現できます。

- 3 行目の `/dist` は **ビルド成果物を保存するディレクトリ** です。[リポジトリ](/text/chapter-2/repository.html#共同開発とブランチ) の章で「フロントエンドは HTML + CSS + JavaScript で出来ている」ことに軽く触れましたが、ビルドされた HTML + CSS + JavaScript のシステムが収められる場所がこの dist です。

リポジトリの作成時に Gitea 側で .gitignore のテンプレートを含めるよう設定することもできます。作りたいシステムで使用するフレームワークごとに豊富なテンプレートが用意されています。

![](https://md.trap.jp/uploads/upload_66b56f43c0a0b3abfc352d07ece19a68.png)
:::