# コンフリクトの解決

ひとつのファイルを互いに同期される前に別々の方法で書き換えると **コンフリクト**（競合）が生じることがあります。出会いがちなパターン 2 つについて、試せる解決方法を記します。

## マージ競合

mydrive リポジトリで main ブランチから sub ブランチを生やしたとします。main と sub のそれぞれで異なる内容で README.md を変更してコミットしたのち、sub を main にマージしようとするとコンフリクトが生じます。

コンフリクトが発覚するのはプルリクエストを出した直後の Gitea の画面上です。

![](https://md.trap.jp/uploads/upload_f031d226198efdc4199c58f6bb6ae89b.png)

共同開発で起きやすいコンフリクトです。

## ローカル環境間の同期競合

Desktop ディレクトリと Downloads ディレクトリの mydrive がともに main ブランチにいるとします。Desktop の mydrive で README.md を変更してコミットしたのち、Downloads の mydrive で「変更を同期」する前に README.md を変更してコミット、その後「変更を同期」しようとするとコンフリクトが生じることがあります。

コンフリクトが示唆されるのは VSCode 上で「変更の同期」ボタンを押した瞬間です。実はこのダイアログが出ていてもコンフリクトが発生しているとは限らないのですが、とりあえずこの後の手順を追えばよさそうです。詳しくは次の章で解説します。

![](https://md.trap.jp/uploads/upload_813056da854bdcdec8d46d44a4eae254.png)

複数のデバイスからリポジトリにアクセスし、main ブランチに直接コミットしながら個人開発をしている時に起きやすいコンフリクトです。

## マージ競合の解決

上で挙げた 2 種類のコンフリクトは一見して全く異なるものにも見えますが、じつは VSCode 上でほぼ同じ手順で解決することができます。ここでは「マージ競合」を例に説明します。

マージ競合が発生していることが Gitea の画面で判明したら、マージしようとしているブランチ（この場合は sub ブランチ）にいることを確認し、以下のように選択します。

![](https://md.trap.jp/uploads/upload_44c9575beccfbbe302310bcd06be67e7.png)

次にウィンドウ上部で（マージ元のブランチとして）main を選択します。

:::warning 基本的に直接マージはしない
もしコンフリクトがなかったとすれば、ここまでの操作によって main → sub のマージが実行され、main の変更が sub に反映されます。お察しの通り、もし sub ではなく main にいる状態で逆の操作をすると、**プルリクエストを出すことなく sub → main のマージが実行**されます。

これは操作としては可能ですが、共同開発においては当然おすすめされません。というより、基本的に**ブランチ同士を直接マージすることはありません**。コンフリクトが生じたときだけが例外で、main の内容を sub に直接マージしてコンフリクトを解決するという操作を伴います。main へのマージを希望する場合は必ずプルリクエストを立てましょう。

![](https://md.trap.jp/uploads/upload_7fe8280cf8e483dec18e0c6f476f1a9b.png)
:::

マージ競合が発生している場合は、上の操作の直後に以下のような画面に飛びます。右下の「マージエディターで解決」ボタンを押してください。

![](https://md.trap.jp/uploads/upload_aee5b36d6370b5d7c8f4d46ff076119e.png)

下図のようにエディタ部分が 3 つに分割されます。上 2 つがコンフリクトを起こしている場所の表示で、今いる sub ブランチでの変更は右側「現在のマシン」です。

sub ブランチでの変更を優先したい場合は「現在のマシン を適用する」を押します。main ブランチでの変更を優先したい場合は「受信中 を適用する」を押します。

![](https://md.trap.jp/uploads/upload_f89835e91315d0f9da2da2dc6178b515.png)

上の図ではコンフリクトを生じている部分が濃い黄色の枠で囲まれていますが、コンフリクトが解決すると枠が目立たなくなります。全てのコンフリクトを解決したら右下の「マージの完了」ボタンを押してください。

すると、コミットメッセージが予め入力された状態で以下のように「続行」ボタンが表示されるので押します。そのあとの「変更の同期」ボタンまで押すことで、コンフリクトの解決および main → sub のマージが完了します。

![](https://md.trap.jp/uploads/upload_4401cf0a67b3ae818726a7c490a3208b.png)

先ほどコンフリクトの発生を告げられた Gitea のページをリロードすると、コンフリクトが解消しプルリクエストが「マージコミットを作成」可能な状態になっていることが分かります。

![](https://md.trap.jp/uploads/upload_29484fdddbddb8d94fab5ae668d0ec10.png)

## ローカル環境間同期競合の解決

まず「キャンセル」を押してダイアログを消します。次に、マージ競合の解決のときと同様に「ブランチ > マージ…」と選択し、**マージ元のブランチとして origin/main を選択**します。

:::info origin/main → main のマージ
origin/main はリモートブランチ（厳密にはリモート追跡ブランチ）を表すので、「origin/main → main のマージ」という操作は先にコミットされた変更を手元の main ブランチに取り込むことを表します。
:::

あとの手順はマージ競合の解決と同じです。

:::tip 手元のコミットをなかったことにする
場合によっては「ついうっかりコミットボタンを押してしまっただけなので、コンフリクトの解決だなんて大仰なことはしたくない」ということもあるかも知れません。一度コミットボタンを押してしまってから手元の変更を完全になかったことにするには、以下のように選択して「前回のコミットを元に戻す」を押してください。

![](https://md.trap.jp/uploads/upload_089611b84af93aa3599452e3cf2a7e2d.png)

その後、全てのファイルの変更を破棄して「変更を同期」ボタンを押せば、新たにコミットをすることなく手元の環境をリモートブランチと同じ状態にすることができます。
:::

## まず人に助けを求めよう

コンフリクト（とくにマージ競合）の解決は、方法を誤るとシステムが正常に稼働しなくなるおそれがあるだけになかなか集中力が求められる作業です。競合箇所それぞれについて

- なぜコンフリクトしたか
- 競合の片方を優先するとシステム全体にどんな影響が生じるか

をよく確認しながら解決していくことになります。大量にコンフリクトが生じていたり、編集した覚えのないファイルでコンフリクトが生じていたりすると厄介です。

共同開発でしっかり各々の役割分けがなされている場合、それぞれで変更を加えるファイルが異なるのでコンフリクトに出会うことは稀です。もし出会ってしまったら、自分で解決しようとせずチームメイトに助けを求めるのがより手早く安全な解決方法かも知れません。