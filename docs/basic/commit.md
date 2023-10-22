# 変更をcommitする

ファイルへの変更をcommitしてみます。

## ファイルの変更の記録(`git commit`)

:::tip
VSCodeでのテキストファイルの作り方

1. 新規ファイルボタンを押す
   ![](https://md.trap.jp/uploads/upload_3aab9a82e3804659d87a911872da158c.png)

2. ファイル名を入力してEnterを押す(ファイル名は最後に`.txt`をつけてください)
   ![](https://md.trap.jp/uploads/upload_fe86b032138502205b0cec86a7a65818.png)

3. 入力画面が表示されるので入力
4. `ctrl+S`で保存(todo: macの場合のコマンド)
   :::

5. VSCodeで`trap.txt`という名前のテキストファイルを作成
6. `trap.txt`に以下を追記

```
本サークルは、名称を『東京工業大学デジタル創作同好会traP』とし、読みを『トウキョウコウギョウダイガクデジタルソウサクドウコウカイトラップ』とする。
```

3. Gitアイコンのタブを開いて`trap.txt`をクリックすると下のように差分が表示される

↓これ
![](https://md.trap.jp/uploads/upload_22e500bf5c661458f5ac19c00e80220f.png)

![](https://md.trap.jp/uploads/upload_15b9159b7f304ed5f1f514454061f889.png)

4. `trap.txt`の右側の`+`ボタンをクリック
   :::info
   内部的には`git add`して、コミットするファイルを選択しています。
   :::

![](https://md.trap.jp/uploads/upload_7b2537bcb18e82257962da5304189ee5.png)

5. 画像と同じ場所に`これがtraP`というコミットメッセージを入力し、`コミット`をクリック

![](https://md.trap.jp/uploads/upload_0335d59f1d6469a3ab1b44fa7b756de8.png)

6. Git HistoryのVSCode拡張機能を入れ、下の画像のボタンをクリックするとコミットが作成されてることが分かる

左のこれ↓を押して入力欄で検索
![](https://md.trap.jp/uploads/upload_872b29e54626055c9828096cb2f2f8eb.png)

![](https://md.trap.jp/uploads/upload_e9916f3b5bc77e59802df4febc7c51b2.png)

![](https://md.trap.jp/uploads/upload_b9197b98773327d276489b4c9df63aee.png)

![](https://md.trap.jp/uploads/upload_cca077c325e9e611416a724544d45b38.png)

7. `trap.txt`に以下の文を追加

```plaintext
英名を『Digital Creators Club traP』とし、略称を『traP』『デジタル創作同好会traP』『東工大デジタル創作同好会traP』とする。
```

8. Gitのタブを開くと下のように差分が表示される
   ![](https://md.trap.jp/uploads/upload_48d1d1785a1fa615aa372f4b822b3cbe.png)

:::warning
表示されていないときはファイルを保存してあるか確認し、保存してあるのに表示されていない場合は↓の更新ボタンを押してみて下さい。
![](https://md.trap.jp/uploads/upload_f25f4affd39ff04b97154bdb83a914e3.png)
:::

9. 先程同様`英語名も入れた`というコミットメッセージを入力して、`コミット`をクリック → ステージされた`trap.txt`をコミット
   ![](https://md.trap.jp/uploads/upload_3652c0c6df338f632c20b18edc46fa57.png)

10. 同じようにGit Historyで確認すると、コミットが1つ増えていることが分かる。
    ![](https://md.trap.jp/uploads/upload_2c16925e146ae197b79d1c5b7c716c8f.png)

## コミットのリモートへの同期 (`push`)

1. `プッシュ`をクリック
   ![](https://md.trap.jp/uploads/upload_e8f4931ab98538dc8506d0fa57cee8b3.png)

1. VSCode上でユーザー名とパスワードを求められるので入力
   ![](https://md.trap.jp/uploads/upload_a1a374ee0df24009d2aee637e335eb0e.png)

1. https://git-lecture.trap.jp/ の最初に作ったリポジトリのページにて、コミットが反映されていることを確認
   先ほど作成したテキストがあるはず
   ![](https://md.trap.jp/uploads/upload_e6e07454164ebf18c8a9902b47eb8105.png)
