# Pull Requestを作成する

Pull Requesを出してみます。

## ブランチの新規作成 / 切り替え

1. VSCodeにて、`ブランチ`をクリックして、`ブランチの作成`をクリック
   ![](https://md.trap.jp/uploads/upload_9484d21447c95ffc3f18d5508a029b03.png)

2. 新しく作るブランチの名前を入力してEnterを押す
   ![](https://md.trap.jp/uploads/upload_e12bc1da64004b2ab96f07dce96c1454.png)

3. 今度はファイルの一部(任意の箇所)を削除してコミット
   ![](https://md.trap.jp/uploads/upload_877323dd3da59ba92ef6358c3fff4fb8.png)

:::info
コミットメッセージは分かりやすければ今は何でもよいです
人に見られることを意識して書きましょう
:::

4. `Branchの発行`をクリックしてブランチをリモートに反映する
   ![](https://md.trap.jp/uploads/upload_236468524aa36eeebbf37ec49e83af66.png)

5. 再びtraQのユーザー名とパスワードを求められるので入力

6. https://git-lecture.trap.jp/ の最初に作成したリポジトリにて`main`の箇所をクリックすると、先程作ったブランチが追加されていることが分かる
   ![](https://md.trap.jp/uploads/upload_e833275d4f8e56bd674a43934de2c2aa.png)

## プルリクエストの作成

1. https://git-lecture.trap.jp/ の最初に作成したリポジトリにて、`プルリクエスト` => `新しいプルリクエスト`の順にクリック
   ![](https://md.trap.jp/uploads/upload_b42e12085d4d5f0f6e2f488453324e45.png)

2. `プル元`をさっき作ったブランチに変更
   ![](https://md.trap.jp/uploads/upload_c453478f0fd4135406e4fec485ffa24b.png)

3. `新しいプルリクエスト`をクリック
   ここで下の差分が先程のコミット内容と一致していることに注目
   ![](https://md.trap.jp/uploads/upload_2233e94e433c776ff965ea075f613d22.png)

4. 画像で`けした`と書いてある箇所にプルリクエストの名前、空欄の箇所にプルリクエストの説明を入力し、`プルリクエストを作成`をクリック
   ![](https://md.trap.jp/uploads/upload_8907cb06f7ee36a4a65623cba4885537.png)

## プルリクエストのマージ

1. `プルリクエスト`をクリックして、先程作ったプルリクエストを開く

2. `マージコミットを作成`をクリック
   ![](https://md.trap.jp/uploads/upload_08b38e656911fcafc4ad983f17a17ec4.png)

3. さらに`マージコミットを作成`をクリック
   ![](https://md.trap.jp/uploads/upload_6146d04c0beac4b1e7c6a99032da4d60.png)

4. `マージ済み`と表示され、マージされたことが確認できる
   ![](https://md.trap.jp/uploads/upload_b7cec99b69b22077939711d353fc90be.png)

:::info
ブランチは削除してもしなくてもOKですが、もう不要なので基本削除します。
:::

## リモートの変更点をローカルに同期(`pull`)

1. VSCodeに戻り、`チェックアウト先...`の箇所から`main`ブランチに切り替える
   ![](https://md.trap.jp/uploads/upload_f6c44840ae65602f0fa17501643eb15d.png)

![](https://md.trap.jp/uploads/upload_c7a0b88e38b260cd476ca154e5b7bd99.png)

2. リモートの変更点を手元にもってくるために`プル`をクリック
   ![](https://md.trap.jp/uploads/upload_b8fbd0ce9a3393690623ab224539b154.png)

3. 再びユーザー名とパスワードを求められるので入力

4. Git Historyを見ると、先程マージされたコミットが手元のmainブランチに反映されたことが確認できる

![](https://md.trap.jp/uploads/upload_663f169a53e9a69b839955a17ffc8687.png)
