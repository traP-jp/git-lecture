# おまけ3: .gitignore

Gitはデフォルトでは管理するディレクトリ以下の全てのファイルの変更を追跡してしまいます。
しかし実際の開発ではGitに追跡されると困るもの、追跡しなくても良いものがある場合があります。

そういうときにGitに「このファイルは無視してね～」と伝えるのが`.gitignore`というファイルです。

:::tip TIP: 実際の開発における追跡されたくないもの

- 追跡されると困るもの
  - 機密情報が書かれたファイル (`.env`などの環境変数ファイル)
- 追跡しなくても良いもの
  - 依存関係ファイル (`node_modules`など)
  - 自動生成されるファイル (追跡する場合もある)
:::

## `.gitignore`の書き方

```sh
# #から始まる行はコメントになります

# 単純にファイル名だけ書くと、その名前のファイル全部にマッチする
# マッチする例:
# - /.env 
# - /some/directory/.env
.env

# globパターンが使える (詳しくは自分で調べてみよう)
# マッチする例:
# - /.env.local
# - /dir/.env.development
.env.*

# 最初に「/」を付けると.gitignoreファイルのあるディレクトリ基準で
# ↓だと「/.env」しかマッチしない
/.env

# フォルダ (の中身全て) をマッチさせるときは最後に「/」をつける
# マッチする例:
# - /node_modules/bin.js
# - /dir/node_modules/package/index.js
node_modules/

# パス指定にもglobパターンが使える
# マッチする例:
# - /path/to/dir/node_modules/package/index.js
# - /path/node_modules/package/index.js
path/**/node_modules

# 最初に「!」を付けるとignoreしないという意味になる
# この例では先に「.env.*」がignoreされるのに対して
# 「.env.production」だけはignoreしない (追跡する) という意味
!.env.production

# ただし親ディレクトリがignoreされている場合は「!」ができない
# 例えば次の例では「node_modules/package-a/index.js」は追跡対象にならない
!node_modules/package-a/index.js

# ↑をしたい場合にはファイル全部をignoreするようにすればよい
# 「node_modules/」の例では次のような感じ
node_modules/**/*
```

## テンプレート

とはいえ毎回`.gitignore`を書くのは少し面倒くさいですよね。ということで偉い人が用意してくれたテンプレートを使いましょう。

[github/gitignore - github.com](https://github.com/github/gitignore) から自分の使いたい言語・環境を選んで内容をコピペするだけです。いたって簡単。

:::tip
GitHubでもGiteaでもリポジトリを作成するときに`.gitignore`のテンプレートを選択するオプションがあります。
新しくリポジトリを作成するときはそこから設定するのが楽かもしれません。
:::