# ブランチのマージ

sub ブランチの README.md に変更を加えます。ちょっと書き足して、変更をステージし「sub の変更」とコミットメッセージを書いてコミットしてみます。

![](https://md.trap.jp/uploads/upload_8951eff842715962edeba4d17258f8b3.png)

すると左下のコミットグラフの色が変わります。origin/main（main のリモート追跡ブランチ）から新たに枝が生えたことが視覚的にわかりやすいです。

![](https://md.trap.jp/uploads/upload_7c97acdb362da12cf9269f208676bebc.png)

ここで再度 Gitea に行ってみると、目立つ緑色の帯が出現しています。右の緑色のボタン「Compare & pull request」をクリックするとプルリクエストを作成することができます。

![](https://md.trap.jp/uploads/upload_a6d7b6743b67daf7537b96c0c0a751d6.png)

この状態から、以下を順に実行していってください。少し長いですが、基本的には一番目立つボタンを押しながら進んでいけば大丈夫です。もし途中で道に迷ったら TA を呼んでください。

1. 緑色の新規プルリクエストボタンを押す
2. 青色の新しいプルリクエストボタンを押す
3. 何も入力せずに青色のプルリクエストを作成ボタンを押す
4. 青色のマージコミットを作成ボタンを押す
5. 何も入力せずに青色のマージコミットを作成ボタンを押す

5 まで実行すると、何かが終わった雰囲気の画面にたどり着きます。

![](https://md.trap.jp/uploads/upload_bfe8e092febe280c0942aa924cf803ab.png)

この状態で VSCode に戻り main ブランチに移るとうつると、矢印が下を向いた「変更の同期」ボタンが点灯して main に変更があったことが知らされます。

![](https://md.trap.jp/uploads/upload_786315a5011ee6333301182d8c55f239.png)

ボタンを押して同期すると、先ほど sub ブランチで変更した内容が反映されるはずです。

![](https://md.trap.jp/uploads/upload_86c55ea931d1a34eba863d63260cb419.png)
<p style="text-align: center; margin: -10px 0 20px 0">ここまでやってきたことの図解</p>