# 共同開発のすすめ

最後に、統制の効いた共同開発においてはコミットメッセージやブランチ名、その他の Git や Gitea の扱いにどんなルールが定められているのか、よくある例をいくつか紹介します。

この章の内容の実践が個人開発やハッカソンの共同開発において強制されることは普通ありません。まずはそんなことを気にせず積極的に開発に参加するのがよいです。その上で、責任ある開発の現場でどんなルールが採用されているのかについて少しでも知っておくと、その知識が普段の開発にも何か示唆を与えてくれるかも知れません。

:::info Git 講習会中級編
たけのひとさんによって 2024 年度に開催された [Git 講習会中級編](https://q.trap.jp/files/151ef5c6-000e-4477-b767-07cf44fda757) では、プロジェクトやハッカソンのチームリーダー向けにさらに発展的な内容を取り扱っています。興味があればぜひ資料を確認してみてください。
:::

## 接頭辞

コミットメッセージやブランチ名の頭に決まった種類の接頭辞をつけることで、そのコミットやブランチの意図の分類を明確にすることが出来ます。たとえば以下がよく使われます。

<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th style="width: auto; text-align: center">接頭辞</th>
      <th style="width: 100%;">一般的な意味合い</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center"><strong>feat</strong></td>
      <td>新機能の追加</td>
    </tr>
    <tr>
      <td style="text-align: center"><strong>fix</strong></td>
      <td>既存の機能の問題修正</td>
    </tr>
    <tr>
      <td style="text-align: center"><strong>hotfix</strong></td>
      <td>緊急の問題修正</td>
    </tr>
    <tr>
      <td style="text-align: center"><strong>style</strong></td>
      <td>コードのスタイル変更やフォーマット</td>
    </tr>
    <tr>
      <td style="text-align: center"><strong>docs</strong></td>
      <td>ドキュメントの変更</td>
    </tr>
    <tr>
      <td style="text-align: center"><strong>chore</strong></td>
      <td>コードやドキュメントに影響しない作業</td>
    </tr>
    <tr>
      <td style="text-align: center"><strong>refactor</strong></td>
      <td>リファクタリング（コードの整頓）</td>
    </tr>
  </tbody>
</table>

コミットメッセージに接頭辞をつける場合は `feat: コミットメッセージ` のように、ブランチ名に接頭辞をつける場合は `feat/リポジトリ名` のように書くことが一般的です。traQ フロントエンドリポジトリの [Branches](https://github.com/traPtitech/traQ_S-UI/branches/all) と [Commits](https://github.com/traPtitech/traQ_S-UI/commits/master/) で実例を確認してみましょう。

:::info ブランチ名に含まれるスラッシュ
Git ではブランチ名にスラッシュ `/` を含めることができます。このスラッシュはディレクトリのパスに含まれる `/` に似た振る舞いを示し、たとえばすでに `feat/ーーを追加` という名のブランチが存在する場合は新たに `feat` という名前のブランチを作ることが許されなくなります。
:::

:::danger ネタ切れ発生
ここに書くことを募集しています
:::