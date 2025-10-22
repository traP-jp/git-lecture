# メールアドレスの秘匿

この章は [GitHub](https://github.com/) を使い始める方向けの内容です。この講習会の操作はこれまで全て [traP Gitea](https://git.trap.jp/) 上のものでしたが、多くの人は今後 GitHub 上にもアカウントを作ることになると思うので、アカウントを作成する際はぜひ以下の内容を参考にしてほしいです。

## traP と GitHub 公開リポジトリ

traP では、毎年 6 月から 7 月にかけて、主に新入 SysAd 班員を対象として [QSoC](https://q.trap.jp/channels/team/SysAd/QSoC) という自由参加のイベントが開かれます。このイベントは traQ などの traP 内製サービスの開発に貢献してみようという趣旨のものです。

traQ をはじめとする traP SysAd 班のサービスは全て GitHub 上で管理されており、ほとんどが一般に公開されています。従って、QSoC に参加する際は GitHub のアカウントが無ければ作成し、一般に公開されたリポジトリに貢献の足跡を残すことになります。

:::tip traP Gitea が活用される場面

GitHub はとにかく多機能で何かと便利なのですが、大きいファイルのアップロードに関する制約が多く、ゲーム開発に用いるには適さないことがあります。このため、ゲーム班やプロジェクトの活動ではしばしば Gitea にリポジトリが置かれています。

また、部外に公開すべきでない情報を扱う際も Gitea が用いられることがあります。たとえば traP のサークル規約の原本、役員会に関係する資料、合宿のしおりなどは Gitea に置かれています。
:::

## メールアドレスの秘匿

traP Gitea 上のリポジトリは公開範囲が部内に限られますが、GitHub 上の公開リポジトリは文字通り全世界に公開されています。コミットに埋め込まれたメールアドレスは、[前章で説明した方法](/text/chapter-2/get-verified.html#git-%E3%81%A8%E3%83%A1%E3%83%BC%E3%83%AB%E3%82%A2%E3%83%88%E3%82%99%E3%83%AC%E3%82%B9) で誰でも他者のものを知ることができます。そして、このメールアドレスはあとから抹消することが非常に困難です。

従って、公開リポジトリに不用意にメールアドレスを埋め込むのはリスクと言えます。もちろん、リスクを弁えた上でメールアドレスの公開設定を変更しない人もいます。

メールアドレスを公開したくないというニーズに応えるため、GitHub は各ユーザーに [ダミーのメールアドレス](https://docs.github.com/ja/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address) を提供しています。コミットメールアドレスをこれに変更することで、個人的に使っているメールアドレスの公開を避けつつ GitHub アカウントとコミットをしっかりと紐づけることができます。このアドレスはメールアドレスとしては機能していません。

ダミーのメールアドレスを利用する方法を説明します。まず GitHub の [E メールの設定](https://github.com/settings/emails) を開き、**Keep my email addresses private** にチェックを入れます。その下の **Block command line pushes that expose my email** にもチェックを入れておくと、ダミーでないメールアドレスでコミットのプッシュを試みたときにブロックしてくれます。

![](https://md.trap.jp/uploads/upload_eb48eee1fa4b71416a70d5dd830c3d70.png)

次に、ここに表示されているメールアドレスで Git を設定し直します。

```sh
git config --global user.email ダミーメールアドレス
```

これで Git リポジトリを扱う際には自分のもつ本来のメールアドレスではなく、ダミーメールアドレスが活用されるようになりました。

## GitHub と Gitea の設定の両立

これで GitHub にはダミーメールアドレスでコミットできるようになりましたが、このままの設定では traP Gitea 側でコミットのメールアドレスからユーザーを特定できず、以下のようにアイコンが正しく表示されなくなります。

![](https://md.trap.jp/uploads/upload_ef7168130e5284a8885056a291a4343f.png)

これは Gitea 側が `??+??@users.noreply.github.com` のような形式のメールアドレスが誰のものなのかを知らないからです。

コミットのメールアドレスの設定は、グローバルに効かせるほか、それぞれのリポジトリに対して個別で効かせることもできます。GitHub と Gitea のうちどちらか一方をメインで使っていく場合には、それぞれ以下のような運用をするとよいでしょう。

### GitHub をメインで使う場合

グローバルにダミーメールアドレスを使用する設定にしておきます。
```sh
git config --global user.email ダミーメールアドレス
```

Gitea で管理しているリポジトリそれぞれに対し、本来のメールアドレスを使用する設定で上書きします。新しく Gitea 管理のリポジトリをクローンする際も以下の設定を適用します。
```sh
cd リポジトリのルート
git config user.email 本来のメールアドレス  # --global をつけない
```

### Gitea をメインで使う場合

グローバルに本来のメールアドレスを使用する設定にしておきます。
```sh
git config --global user.email 本来のメールアドレス
```

GitHub で管理しているリポジトリそれぞれに対し、ダミーメールアドレスを使用する設定で上書きします。新しく GitHub 管理のリポジトリをクローンする際も以下の設定を適用します。
```sh
cd リポジトリのルート
git config user.email ダミーメールアドレス  # --global をつけない
```

### Gitea と GitHub をどちらもよく使う場合

`~/.gitconfig` の内容を直書きし `includeIf` を用いて設定を分岐させる方法がおすすめですが、発展的な内容になるので割愛します。詳しいことは [#random/sodan](https://q.trap.jp/channels/random/sodan) などで質問すると教えてもらえるはず。

