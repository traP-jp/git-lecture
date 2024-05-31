## 2. Git 運用のすすめ

### merge conflict

[![](https://mermaid.ink/img/pako:eNp1kdtKxDAQhl9lGCi5qYi3uRB6kG11BU8XuvQm26RtsElKTMWl9N1Nu8qWPQQCmZkv_z_JDFgaLpBiEAxSS0dhANKaei2-RUsoEC62fU1CIK4RSuwzFetbR2CEMQgKDfOqpVtZ1jX_MUBplJIOJKcF5l66wENta5kuG6jkz_XN4kYjyk_TO1BM6vNCURTB1S0kSbKUWxJxHE_E-8emQHC7TtAsX2Vrv9_OOB13cGqVpuklK9_FRDw9v1wifGki8vuHk2bAsdoT2V3k9TFEJax_NvejGCatAucPL5D649-XTy6jR1nvzOtOl0id7UWIfceZE6lktWUKacXaL5_tmN4Yc4gFl87Yx_2456mPvybcljY?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNp1kdtKxDAQhl9lGCi5qYi3uRB6kG11BU8XuvQm26RtsElKTMWl9N1Nu8qWPQQCmZkv_z_JDFgaLpBiEAxSS0dhANKaei2-RUsoEC62fU1CIK4RSuwzFetbR2CEMQgKDfOqpVtZ1jX_MUBplJIOJKcF5l66wENta5kuG6jkz_XN4kYjyk_TO1BM6vNCURTB1S0kSbKUWxJxHE_E-8emQHC7TtAsX2Vrv9_OOB13cGqVpuklK9_FRDw9v1wifGki8vuHk2bAsdoT2V3k9TFEJax_NvejGCatAucPL5D649-XTy6jR1nvzOtOl0id7UWIfceZE6lktWUKacXaL5_tmN4Yc4gFl87Yx_2456mPvybcljY)

merge を行う際、たまにコンフリクトが発生する。例えば、上図のようなコミット図で fix/1 -> main にマージを行う際に、 `AAA` を `CCC` に変更するコミットと、同じ `AAA` を `DDD` に変更するコミットが違うブランチで存在したときに、 Git は自分ではマージせずに一回中断する。

GitHub などで PR をマージする時にコンフリクトが発生すると、一度作業ブランチにマージする必要がある。これは、コンフリクトを正しく解消できているかレビュワーが確認したいからである。

[![](https://mermaid.ink/img/pako:eNp1kt9rgzAQx_-VIyC-OMZe8zCwCq1bB1u3h634kuqpYZpIGrsV8X_fqSu1vwKBXO5z3y-XS8sSnSLjzHFaqaTl0IJb6nyJOyxdDm6KmyZ3PXBtgRWON5loSutCB53jxAqGlUs7N6IuDjFAoqtKWpApj1lE0jE75jZGqKSATP7eP0wqCky-dWOhElJdF_J9H-4eIQiCqdyUmM1mPfH5tT4hDtLnlpfaYRje0ibbnnh9W90iKNUT0dPzlKjQ5Dh0BXZfI19E88WS9sdYZHCryx2SkMpKmdBLgRU5JVa4k_hztY_TJxoNht7OHJjHKEl0SkNu-4qYDaOMGafj_zB7i45Q0Vj9vlcJ49Y06LGmToXFUIrciIrxTJRbuq2FWmt9jDGVVpuX8SMN_6n7A4UqslA?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNp1kt9rgzAQx_-VIyC-OMZe8zCwCq1bB1u3h634kuqpYZpIGrsV8X_fqSu1vwKBXO5z3y-XS8sSnSLjzHFaqaTl0IJb6nyJOyxdDm6KmyZ3PXBtgRWON5loSutCB53jxAqGlUs7N6IuDjFAoqtKWpApj1lE0jE75jZGqKSATP7eP0wqCky-dWOhElJdF_J9H-4eIQiCqdyUmM1mPfH5tT4hDtLnlpfaYRje0ibbnnh9W90iKNUT0dPzlKjQ5Dh0BXZfI19E88WS9sdYZHCryx2SkMpKmdBLgRU5JVa4k_hztY_TJxoNht7OHJjHKEl0SkNu-4qYDaOMGafj_zB7i45Q0Vj9vlcJ49Y06LGmToXFUIrciIrxTJRbuq2FWmt9jDGVVpuX8SMN_6n7A4UqslA)

（作業者が `main` ブランチを `fix/1` ブランチにマージして、 `review` タグがついたコミットをレビュワーが確認し、その後 main にマージされる。という流れを表したのが上図）

コンフリクト解消は意外と面倒くさいので、演習用のリポジトリを使いながら実際に解消して学ぶと良いだろう。

:::success
**演習**
前提：`ex_rebase` ブランチがマージされてる状態にする（`ex_rebase`、`ex_conflict` ブランチ間でコンフリクトが発生している。）

1. `ex_conflict` を master にマージしたいので、PR を立てる。この時に、コンフリクトが発生していると Gitea に怒られるので手元で修正する。
2. `ex_conflict` ブランチにチェックアウトし、`master` ブランチをマージする。
3. コンフリクト通知が出るので、エディターを使って編集する (vim じゃなくて良い）。
4. 以下のように `<<<<<<<HEAD` と `>>>>>>> master` で囲まれている部分がコンフリクトしている場所なので、2つを見比べながら適用していく。
  この時、「**どちらがどんな変更をしたのか**」を確認しながら、どちらも適用できるように編集を進めていくこと。
```
<<<<<<< HEAD
本サークルは、名称を **『東京医科歯科工業大学デジタル創作同好会traP ..... とする。
=======
本サークルは、名称を **『東京工業大学デジタル創作同好会traP』... とする
>>>>>>> master
```

5. キャンパス名の修正で困ったかもしれない。どちらも違うものに編集しようとしている。ここでは、「すずかけ台」への移行を採用する。
6. 修正が完了したら、マージコミットを作成する。

:::

### .gitignore

gitignore は git の管理下に新たに置きたくないファイルを指定するファイル。
注意して欲しいのは、既に git の管理下に置かれたファイルは、gitignore に追加しても変更は追跡されるという事（1敗）。具体的な記述方法は割愛するので各自調べること。（`*` によるワイルドカード指定などができる。）
主にビルド時・実行時に生成されるファイル・キャッシュ・バイナリファイルや、ライブラリ、また個人情報や認証情報が含まれるファイルが gitignore に置かれる事が多い。

[gitignore.io](https://www.toptal.com/developers/gitignore) を使うと、リポジトリを制作する時に必要なファイルを自動で生成してくれるので便利。

### branch protection

文字通りブランチの保護に関する設定。例えば、間違えて master にコミットしても push する際に拒否されるので他の作業者に影響を及ぼさなくなる事ができる。

GitHub でできるプロテクションはこんな感じ。Gitea にも同様の設定が存在する。

![](https://i.imgur.com/6Oo1nPc.png)

自分が普段つけている設定は、大体
- マージ前に main への PR を必須にする
- main へのレビュワーの Approve を必須にする
- main への直接の commit を禁止する

の3つ。

### issue/PR の作り方

GitHub、Gitea 共に issue, PR の機能が搭載されているが、運用の仕方は様々あるし、あまり提示されていない事も多い。ここでは自分が今までやってきて、他のところでも traP でも大体そうっぽそうという話をする。

#### issue を建てるとき

1. まずはじめに、その issue は大きくならないかをよく考える。小さく分割できるなら分割した方がよい。
    - **非常に重要**。これをしないと、大きい PR が完成してレビュワーが泣く。
    - 過大な issue を切り分けるのはプロジェクトリーダーの仕事に関わる部分だと思っているので、ちょっと気をつけるくらいでも良いと思う。
3. issue タイトルは簡潔に、明確にする。
4. タイトルに書いてない話を本文に書く。（具体的な仕様・要件とか、バグ内容とか。）
    - タスクが複数ある場合は、チェックボックス `- [ ]` を使うのがおすすめ。
      進行状況が issue 一覧からも分かるようになりかなり便利。（GitHub, Gitea 共通）
      ![](https://i.imgur.com/J2s8Wxj.png)
      ![](https://i.imgur.com/WuT5CUx.png)
6. タグ・ラベルをつける（enhancement, bug とか。説明文が下に書いてあるので読んでそれっぽそうな物を選ぶ。）

#### issue に取り掛かるとき

**必ず** issue の Assingees に自分を設定する。これを設定しないと、作業が重複して悲しい事になる。

参考: https://docs.github.com/ja/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue

#### PR を建てるとき

1. 何をしたかを簡潔に書く。issue と対応した名前でなくても良い。
2. 本文には何をしたかを書く。PR の diff やコミット一覧を見ながら書くこと。
    - たくさんあれば箇条書きを使うと良い。
3. 対応する issue の番号を書く。例えば130番ならば `resolve: #130` と書くだけで良い。
    - これを書くと、PR がマージされた時に自動的に issue がクローズされて、作業が楽になる。
    - issue がクローズされたくないなら、単に `#130` と書けば十分。
4. issue と同様にしてラベルをつける。
