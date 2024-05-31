# 5. Git CLI

プログラミングをする際に Git は必要不可欠で、Git についてより理解して発展的な使い方を学ぶには GitHub Desktop では不十分。そこで、Git CLI（コマンドラインインターフェース）を使う。

:::warning
wiki にも書いた通り、Git CLI を導入した前提で講習会を進めます。
また、前期の講習会を受講している前提で進めますので、この章で説明するコマンドについての詳細は割愛します。

:::info

**前期 Git 講習会リンク**
- 座学編: https://md.trap.jp/p/zyzKKzZls#/
- 実習編: https://md.trap.jp/s/eS_tHGpGj

:::warning
traP のアカウントが必要です
:::

本講習会では、講習会用のリポジトリを用いてコマンドを実際に使用しながら解説する。

### clone

リモートリポジトリを、クローンしてローカルに作る。

```bash==
git clone <Target-Repository>
```

### log

コミットの一覧を表示する。

```bash==
git log
```

このままではなかなか見づらい。logコマンドには様々なオプションを設定する事ができるので、試しに `--oneline` を設定してみる。

```bash==
git log --oneline
```

コミットを一行で見れるようになったが、複数のブランチのコミットが混ざっていて分からない。

```bash==
git log --oneline --graph
```

これである程度見やすくはなった。

### vim ツール

実際にこれからコミットしたいが、せっかくの機会なのでファイル変更もCLIで行おう。今回は vim を使う。

#### vim の使い方

```bash==
vim
```

で起動する。 `:q` と入力すると終了する。

```bash==
vim <target-file>
```

で特定のファイルを開くことができる。 `I` キーで編集モードに入り、`Escape` キーで編集モードが終わる。編集モード外で、`:w` と入力すると変更を保存する。 `:wq` で変更を保存して終了する。

これを使って、kiyaku.md を編集しよう。

:::success

### 演習 1 ファイルの編集

#### Step 1. フォーク

まずはリポジトリのフォークを行う。フォークについての詳細は省くが、簡単に言えば他の人のリポジトリをコピーして自分のリポジトリとして作業できるようにする機能。

https://git.trap.jp/Takeno_hito/git-lecture-advanced を開き、「フォーク」ボタンを押す。すると、自分のリポジトリが作成できる。

※ git-lecture.trap.jp は、講習会期間中のみ開いているサーバーで現在は開いていません。

**traPのアカウントを持ってない方は、以下のリポジトリを活用してください！テキストの説明と同じ方法で演習を進めることができます。**

**https://github.com/Takeno-hito/git-lecture-advanced**

#### Step 2. クローン

![](https://md.trap.jp/uploads/upload_75311ba2f7a6e6d2820a130982c5945c.png)

クローン先のリポジトリで、画像のボタンからURLをコピーする。

リポジトリコンソールを開き、テキストに従いクローンする。

#### Step 3. 編集

vim で kiyaku.md を開き、「第3条（目的）」の、`ゲーム、イラスト、...` に「映像」を追記して、保存。vim を閉じて元の画面まで戻れればOK。

:::


### add

変更したファイルをステージングする。（ステージング：コミットするファイルを選択する操作）
この時、ステージングするファイルを選択する必要がある。

```bash==
git add <target-file>
```

また、

```bash==
git add .
```

で全ファイルをステージングできる。

`-p` オプションを使うと、ファイルのステージングを、インタラクティブに行える。

```bash==
git add -p
```

実行すると、差分をある程度のブロックに分けて、「この差分をどうしますか？」と聞かれる。これに対して、指示された通りにステージングするかしないかを選び、これを複数回行ってステージングを行う事ができる。ここで、差分に対して `edit` の選択肢を選ぶと具体的にどの行をステージングするかを選択できるようになる。

### status

HEAD コミットとの差分があるファイルの一覧を表示する。（HEAD については第三章で解説します。この節内では最新のコミットと同義）

```bash==
git status
```

### commit

ステージングされたものをコミットする。

```bash==
git commit
```

で、コミット画面に移動する。コミット画面は vim で起動しているので、画面の指示通りにコミットメッセージを入力し、セーブして終了。
コミット後に log を確認すればコミットが追加されていることが確認できる。

### diff

コミット・ブランチ間のファイルを比較する。

```bash==
git diff <target-commit>..<target-branch>
```

1コミットだけを入力すると、HEAD との差分を取得できる。

```bash==
git diff <target-commit>
```

### pull

リモートのブランチのコミットを、ローカルのブランチに反映させる

```bash==
git pull
```

### push

ローカルのブランチのコミットを、リモートのブランチに反映させる

```bash==
git push
```

初回のpush時はリモートリポジトリ側にブランチがなくて push 先が分からないと怒られてしまうので push 時にリモートにブランチを作ることを明記すること。

```bash==
git push --set-upstream origin <branch-name>
```

:::success
**演習 2 CLI での push**

1. 演習1 で編集したファイルをコミットする。
2. 実際にコミット出来ているか、CLI だけで確認する。
3. push して、gitea 上でも問題なく反映されている事を確認する。
:::


### tig ツール (任意)

log コマンドだけではやはり少しコミットログを一覧しづらい。このログを見やすくするためのツールの一つとして tig がある。本来 tig は他にも便利な機能が存在するが、ここではログを一覧するために使う。

tig を入れるか入れないかは自由。GitHub Desktop などを見てもいいが、個人的にはコマンドを叩きながら他のアプリを開くのは少し大変だと思う。

#### インストール方法

##### Windows の Git Bash

デフォルトで入ってます

##### WSL

```bash==
git clone https://github.com/jonas/tig.git
cd tig/
sudo apt install make
sudo apt install make-guile
make prefix=/usr/local
sudo make install prefix=/usr/local
cd ..
rm -rf tig
```

##### Mac

```bash==
brew install tig
```

#### 使い方（一部）

```bash==
tig
```

- 上下キーで移動。
- `Enter`でコミットの詳細が開ける。
- `Q`で今開いているタブを閉じる。
- `S` でコミット画面に移動できる。
  - `U` でコミットしたいファイル・行を選択できる。
  - `Shift + C`でコミットメッセージ入力画面に移動する。

## 4. Git のサブコマンド

3章を踏まえて、サブコマンドについて解説していく。

### branch

ブランチを新しく作る。

```bash==
git branch <branch-name>
```

`-d` を指定すると逆に削除できる。

```bash==
git branch -d <target-branch>
```

ただし、このコマンドではリモートにプッシュされてないコミットが残ってるブランチは削除できない。削除したい場合は `-D` を使う。（多用しないように…）

```bash==
git branch -D <target-branch>
```

### merge

対象のブランチの差分を自分のブランチに取り込む。この時マージコミットが生成される。
相手のブランチにマージするのではなく、相手のブランチを自分のブランチにマージするという事に注意。

```bash==
git merge <target-branch>
```

[![](https://mermaid.ink/img/pako:eNqVUE1rwzAM_StCEHwJbN3XwbdBRzPobTsNX9xEcUxjO2TyWAn573O6hmZlDCYQ-Onp6ckasAwVocQsG6y3LGEA0QazpQ9qhQRR0S4akYPghhx9V2odWxYwwphlysMxjOVNr7tmxgBlcM4y2EoqvJ5ipfDM7nrtywZq-3m1WmgaKvchMjht_R-jbpajTiwfOpLF86bYpnxdNN8qBNYmweLpcf1DOdtdrnHpd_eL35m9_882DwoxR0d9-mKVDj9MUoXH8yqU6Xk68DR0TK06cng5-BIl95FyjF2lmdZWm147lLVu31O10_4thBmPX4aYiRI?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNqVUE1rwzAM_StCEHwJbN3XwbdBRzPobTsNX9xEcUxjO2TyWAn573O6hmZlDCYQ-Onp6ckasAwVocQsG6y3LGEA0QazpQ9qhQRR0S4akYPghhx9V2odWxYwwphlysMxjOVNr7tmxgBlcM4y2EoqvJ5ipfDM7nrtywZq-3m1WmgaKvchMjht_R-jbpajTiwfOpLF86bYpnxdNN8qBNYmweLpcf1DOdtdrnHpd_eL35m9_882DwoxR0d9-mKVDj9MUoXH8yqU6Xk68DR0TK06cng5-BIl95FyjF2lmdZWm147lLVu31O10_4thBmPX4aYiRI)

↓ **main**ブランチにいる状態で `git merge fix/1`

[![](https://mermaid.ink/img/pako:eNqFkU1rwzAMhv-KEARfAlv3Cb4NOppBb9tp-OLGimMW2yGzx0rIf5_TLrTLIBUYLL1-H8mox9IrQo5Z1htnAoceWOP1lr6oYRyYol3ULAcWarJ0rFQyNoHBAEOWCQeH0CZsOtnWUw5QemtNAKO4wOsxVgJP6q6TrqyhMt9XqzNPTeWHjwGsNG4BdXOO-qfe_lEn5LzV3HW3yLxfVB8EQti3xIuXTbFN5-3inyx1mo5DzawQpE7g4vlpnbCnJo8CMcfkSyCVVtaPMIGHxQjk6fq7mnHUIT2VMfjXvSuRhy5SjrFVMtDaSN1Ji7ySzWeqttK9ez_lww9EY5ji?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNqFkU1rwzAMhv-KEARfAlv3Cb4NOppBb9tp-OLGimMW2yGzx0rIf5_TLrTLIBUYLL1-H8mox9IrQo5Z1htnAoceWOP1lr6oYRyYol3ULAcWarJ0rFQyNoHBAEOWCQeH0CZsOtnWUw5QemtNAKO4wOsxVgJP6q6TrqyhMt9XqzNPTeWHjwGsNG4BdXOO-qfe_lEn5LzV3HW3yLxfVB8EQti3xIuXTbFN5-3inyx1mo5DzawQpE7g4vlpnbCnJo8CMcfkSyCVVtaPMIGHxQjk6fq7mnHUIT2VMfjXvSuRhy5SjrFVMtDaSN1Ji7ySzWeqttK9ez_lww9EY5ji)

GitHub/Gitea 上のマージボタンで起きている操作は大体これ。マージ後はマージしたブランチを(fix/1)を消すとよい。（マージ後に「ブランチを削除」のボタンが出現するのでそれを押せばOK。リポジトリ側で自動消去の設定もできる。）

マージする際、同じ行に対して2つのブランチで異なる変更を加えている時など、たまにコンフリクトが発生する事がある。コンフリクトについては、5章で扱う。

### restore

作業中の変更をもとに戻す動作を担う。

作業中のファイルを staged と同じ状態に戻すときは以下のように入力すればよい。

```bash==
git restore <target-file>
```

add と同様に、`.` を指定すれば全ファイルが staged と同じ状態に戻る。

:::danger
この操作は不可逆なので作業中のファイルを誤って消し飛ばさないように要注意。
:::

また、`-S` (`--staged`) を指定すると、ステージエリアにある対象のファイルがステージエリアから削除される。

```bash==
git restore --staged <target-file>
```

`-W` (`--work-tree`) を指定すると、作業中のファイル（work-tree）がもとに戻る（何も指定していない状態と同じ）。よって、staged と作業中のファイル両方を HEAD コミットと同じ状態に戻したい場合は次のコマンドを実行すればよい。

```bash==
git restore -S -W <target-file>
```

### switch

ブランチを切り替える。（HEAD に紐づくブランチを変更して、ファイルも更新する。）

```bash==
git switch <target-branch>
```

`-c` (`--create`) オプションで新しくブランチを作成できる。

```bash==
git switch -c <branch-name>
```

[![](https://mermaid.ink/img/pako:eNqFUE1rwzAM_StCEHwJbN3XwbdBSzPobTsNX9TYcUxjO3j2WAn573O6hWZlbAKDpPf0nqUBay8VciyKwTgTOQzAOq936l11jAOTap80K4HFVln11WkodZHBCGNRCAen0CZuA_XtXAPU3loTwUgu8HqKlcAzug_k6hYa83G1Wsy0qj74FMGScX9I3SylvtF47BWvnrbVLr-XBfn2B3l2uHS-tLj7xeKM3v__gUg6s6vN41rgYvJBIJZoVcgrynz4YdIReDqvQJ5TSeEwyY-ZRyn656OrkceQVImplxTV2pAOZJE31L3lbk_u1fu5Hj8B0tCHzw?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNqFUE1rwzAM_StCEHwJbN3XwbdBSzPobTsNX9TYcUxjO3j2WAn573O6hWZlbAKDpPf0nqUBay8VciyKwTgTOQzAOq936l11jAOTap80K4HFVln11WkodZHBCGNRCAen0CZuA_XtXAPU3loTwUgu8HqKlcAzug_k6hYa83G1Wsy0qj74FMGScX9I3SylvtF47BWvnrbVLr-XBfn2B3l2uHS-tLj7xeKM3v__gUg6s6vN41rgYvJBIJZoVcgrynz4YdIReDqvQJ5TSeEwyY-ZRyn656OrkceQVImplxTV2pAOZJE31L3lbk_u1fu5Hj8B0tCHzw)

↓ `switch main`

[![](https://mermaid.ink/img/pako:eNqVUctqwzAQ_JVlwehiaNPXQbdCSlzIrT0VXTaWLItYklGl0mD875XTmrghFLog2MfMzkgasPZSIceiGIwzkcMArPN6qz5UxzgwqXZJsxJYbJVV352GUhcZjDAWhXBwDG3iJlDfzjVA7a01EYzkAq-nWAk8TXeBXN1CYz6vVgtOq-q9TxEsGffHqpvlqp9pPPSKV8-bapvP6wJ8KxAi6VxWT4_rX8xZ7tzGud7dBb3T9P4_bh4uGpjuiyVaFXIm838ME0jg8dUF8pxKCvuJO2YcpehfDq5GHkNSJaZeUlRrQzqQRd5Q9567Pbk37-d6_AIGL460?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNqVUctqwzAQ_JVlwehiaNPXQbdCSlzIrT0VXTaWLItYklGl0mD875XTmrghFLog2MfMzkgasPZSIceiGIwzkcMArPN6qz5UxzgwqXZJsxJYbJVV352GUhcZjDAWhXBwDG3iJlDfzjVA7a01EYzkAq-nWAk8TXeBXN1CYz6vVgtOq-q9TxEsGffHqpvlqp9pPPSKV8-bapvP6wJ8KxAi6VxWT4_rX8xZ7tzGud7dBb3T9P4_bh4uGpjuiyVaFXIm838ME0jg8dUF8pxKCvuJO2YcpehfDq5GHkNSJaZeUlRrQzqQRd5Q9567Pbk37-d6_AIGL460)

↓ `git switch -c feat/2` & `git commit`

[![](https://mermaid.ink/img/pako:eNqVUU1rwzAM_StGEHwJdO2-wLdBRzPobTsNX9REScziOGTyWAn573O6hqahFCowWHrSe89WB6nLCBREUWdqw0p0Qlau2NIPVVIJmdHOFzIWkkuy9F_J0VcsRS_6KNK1OERheNNiU465EKmz1rAwmdJwN8RSwwndtVinpcjN72I5mSkp_XKehUVTX6FaTamOKO8bUsnbJtmG8zFpvj9rHhXmynOJhwsSJ_TxFgNPFw2cP3H8D0JerK4IP2uYCzEWAU1eX9YaIAZLbaDOwk67gUfDYXMaVLgedzf46UMrenbv-zoFxa2nGHyTIdPaYNGiBZVj9R2qDdafzo15_wecbaKh?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNqVUU1rwzAM_StGEHwJdO2-wLdBRzPobTsNX9REScziOGTyWAn573O6hqahFCowWHrSe89WB6nLCBREUWdqw0p0Qlau2NIPVVIJmdHOFzIWkkuy9F_J0VcsRS_6KNK1OERheNNiU465EKmz1rAwmdJwN8RSwwndtVinpcjN72I5mSkp_XKehUVTX6FaTamOKO8bUsnbJtmG8zFpvj9rHhXmynOJhwsSJ_TxFgNPFw2cP3H8D0JerK4IP2uYCzEWAU1eX9YaIAZLbaDOwk67gUfDYXMaVLgedzf46UMrenbv-zoFxa2nGHyTIdPaYNGiBZVj9R2qDdafzo15_wecbaKh)

:::info
**おまけ：checkout はどこへ？**
checkout を使っている者もいるかもしれないが、ここでは紹介しない。
最近（といっても2年前） `checkout` の機能を分割した新たなサブコマンド `switch` / `restore` がリリースされたのだ。つまり、`checkout` は上記2サブコマンドの機能を両方持ったサブコマンドである。経験者（自分も含む）は割と `checkout` を使っているので、先輩に質問すると少し困惑するかもしれないが、その時は各自で調べて頑張ってほしい。
:::

### reset

HEADとブランチの指すコミットを指定されたコミットに動かす。

```bash==
git reset <commit-hash>
```

`<commit-hash>` に `HEAD` と指定すると HEAD コミットまで戻せる。 `HEAD~` と指定すると HEAD の1つ前に戻せる。`HEAD~~` と指定して2つ前に戻すこともできる。

[![](https://mermaid.ink/img/pako:eNqFUU1rwzAM_StCEHwJbN3XwbdBRzPobTsNX9TYcUxjO3j2WAn573O6hWalbAKDpPeenmwPWHupkGNRDMaZyGEA1nm9VR-qYxyYVLukWQkstsqq705DqYsMRhiLQjg4hjZxE6hv5xqg9taaCEZygddTrASe0F0gV7fQmM-r1ULTqnrvUwRLxv0x6mY56geNh17x6nlTbfN5XZBvf5Fnh3Pnc4u7CxYn9P7_BSLpzK6eHtcCF8qHi9tM98USrQo5k_k_hokk8PjqAnlOJYX9pB0zj1L0LwdXI48hqRJTLymqtSEdyCJvqHvP3Z7cm_dzPX4B-DuOtA?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNqFUU1rwzAM_StCEHwJbN3XwbdBRzPobTsNX9TYcUxjO3j2WAn573O6hWalbAKDpPeenmwPWHupkGNRDMaZyGEA1nm9VR-qYxyYVLukWQkstsqq705DqYsMRhiLQjg4hjZxE6hv5xqg9taaCEZygddTrASe0F0gV7fQmM-r1ULTqnrvUwRLxv0x6mY56geNh17x6nlTbfN5XZBvf5Fnh3Pnc4u7CxYn9P7_BSLpzK6eHtcCF8qHi9tM98USrQo5k_k_hokk8PjqAnlOJYX9pB0zj1L0LwdXI48hqRJTLymqtSEdyCJvqHvP3Z7cm_dzPX4B-DuOtA)

↓ `git reset HEAD~` or `git reset 00005`

[![](https://mermaid.ink/img/pako:eNp9UU1rwzAM_StCEHwJrN3XwbdCRzPobTsNX9TYSUxjO3j2WAn573O6hWahVGCQ9N7Tk-0eSycVcsyyXlsdOPTAWlfv1ZdqGQcm1SHWLAcWGmXUb6ei2AYGAwxZJiyco9Zh56lrphqgdMboAFpygasx1gIv6MGTLRuo9PfdeqZpVHl0MYAhbW-Mup-P-kPDqVO8eN0V-3TeZ-SHf-TJYem8tHi8YnFBnwQuDQPVCS1eNtubyuer24z3xRyN8imT6T_6kSTw_OoCeUol-eOoHRKPYnBvJ1siDz6qHGMnKaitptqTQV5R-5m6HdkP56Z6-AEEto60?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNp9UU1rwzAM_StCEHwJrN3XwbdCRzPobTsNX9TYSUxjO3j2WAn573O6hWahVGCQ9N7Tk-0eSycVcsyyXlsdOPTAWlfv1ZdqGQcm1SHWLAcWGmXUb6ei2AYGAwxZJiyco9Zh56lrphqgdMboAFpygasx1gIv6MGTLRuo9PfdeqZpVHl0MYAhbW-Mup-P-kPDqVO8eN0V-3TeZ-SHf-TJYem8tHi8YnFBnwQuDQPVCS1eNtubyuer24z3xRyN8imT6T_6kSTw_OoCeUol-eOoHRKPYnBvJ1siDz6qHGMnKaitptqTQV5R-5m6HdkP56Z6-AEEto60)

コミットが削除されている訳ではないので、頑張ればもとに戻すことはできる。（ref: `reflog`)

また、`--hard` オプションを用いると、作業中のファイルも`HEAD`の状態に戻すことができる。

```bash==
git reset --hard HEAD
```

:::danger
既にプッシュしたコミットを reset で戻すことは極力避けること。リモートリポジトリのブランチと整合性が取れなくなってしまう。戻したい場合は基本的に次に紹介する `revert` を使うとよい。
:::

### revert


指定されたコミットの変更を戻すコミットをする。HEADが戻っている訳ではないので、`revert`を使うと既にプッシュしたコミットでも安全に取り消すことができる。

```bash==
git revert <target>
```

また、revert したいコミットを範囲指定で選択する事もできる。

```bash==
git revert <target>..<target>
```

[![](https://mermaid.ink/img/pako:eNp9UcFqwzAM_RUhCL4Etq7bDr4NOppBb9tp-OImSmIW2yGVx0rIv8_pGpqFUoFA0nvSk-Uec18QSkyS3jjDEnoQja929E2NkCAK2odKpCC4Jkt_lVKHhgUMMCSJcnCyyvC202095QC5t9YwmEIqvB9tpfCC7jvt8hpK83O3mvXUlH_5wGC1cTdGPcxHnVE-tiSzt222i_4xI6__kSeFpfJS4vGKxAV9uok-K1yuw7qKaPb6srm6zfheTNFSF6Mi_kc_khSerq5QxvB897F9iFQd2L8fXY6Su0AphrbQTBujq05blKVuDrHaavfp_ZQPv5n5j_c?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNp9UcFqwzAM_RUhCL4Etq7bDr4NOppBb9tp-OImSmIW2yGVx0rIv8_pGpqFUoFA0nvSk-Uec18QSkyS3jjDEnoQja929E2NkCAK2odKpCC4Jkt_lVKHhgUMMCSJcnCyyvC202095QC5t9YwmEIqvB9tpfCC7jvt8hpK83O3mvXUlH_5wGC1cTdGPcxHnVE-tiSzt222i_4xI6__kSeFpfJS4vGKxAV9uok-K1yuw7qKaPb6srm6zfheTNFSF6Mi_kc_khSerq5QxvB897F9iFQd2L8fXY6Su0AphrbQTBujq05blKVuDrHaavfp_ZQPv5n5j_c)

↓ `git revert 000005` or `git revert HEAD~`

[![](https://mermaid.ink/img/pako:eNp9UU1rwzAM_StCEHwJbN0n-FZoaAY9tWOH4YubKIlZbIfMHish_31O29CslAgMkt7Te8LqMLM5Icco6pRRjkMHrLblhn6oZhxYTntfshiYq0jTqVNIXzsGPfRRJAwco1Ru3cqmGmuAzGqtHKicC7wfYiHwgu5babIKCvV7t5jMVJR9We9AS2VmpB6mUmfUHRri6ds63YT3PiE__iOPDtfO1xZPNywu6LPAk-E2-Ui2u2SG-jIr9DoKXTZ3sgxomixXNxcfvgZj1NSGLA-n6waSwOOBBPKQnk80jPeBKr2zu4PJkLvWU4y-yaWjlZJlKzXyQtbfodtI82ntWPd_q66bzA?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNp9UU1rwzAM_StCEHwJbN0n-FZoaAY9tWOH4YubKIlZbIfMHish_31O29CslAgMkt7Te8LqMLM5Icco6pRRjkMHrLblhn6oZhxYTntfshiYq0jTqVNIXzsGPfRRJAwco1Ru3cqmGmuAzGqtHKicC7wfYiHwgu5babIKCvV7t5jMVJR9We9AS2VmpB6mUmfUHRri6ds63YT3PiE__iOPDtfO1xZPNywu6LPAk-E2-Ui2u2SG-jIr9DoKXTZ3sgxomixXNxcfvgZj1NSGLA-n6waSwOOBBPKQnk80jPeBKr2zu4PJkLvWU4y-yaWjlZJlKzXyQtbfodtI82ntWPd_q66bzA)

:::warning
コミット"000005" 自体は残っていることに注意。コミット 000007 で打ち消す変更を行っているだけ。
:::

### rebase

:::info
この講習会で一番覚えてほしい要素です
:::

あるコミットを別コミットの先につなぐ。もう少し細かく説明すると、HEADから指定されたコミットの直近の共通祖先までのコミット群を「枝」として、指定されたコミットの先に「枝」を追加する。図で解説した方がおそらく早いので図で解説する。

[![](https://mermaid.ink/img/pako:eNp9Us1qwzAMfhUhCL4Etu7v4NugpRl0p-00fHETJzFL7ODZYyUEdinsCXbYfQ-whypjbzEnaUlaSgUG_XzSJ1mqMdaJQIpBUEslLYUaSKGzhXgVBaFAErF0GQmB2FyUovek3BWWQANNEDAFnWTSzg2v8p0NEOuylBZkQhmetzJhCJZn3tysf_7ev36_PzfrD4ZDytJwFeeQyrezyahQLuJn7SyUXKoT9S_GpbZRu6oEje7m0cK_xxH4cg-8YzhkPqS4OkIxRK9PRm_a8ffb6X8jmt1Oj3bTzoshlsJ4LfFLqlsQw24VDKlXt8to0xsP5c7qh5WKkVrjRIiuSrgVU8kzw0ukKS9evLfi6knrwRaJtNrc94fQ3UPzDzJ5oVA?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNp9Us1qwzAMfhUhCL4Etu7v4NugpRl0p-00fHETJzFL7ODZYyUEdinsCXbYfQ-whypjbzEnaUlaSgUG_XzSJ1mqMdaJQIpBUEslLYUaSKGzhXgVBaFAErF0GQmB2FyUovek3BWWQANNEDAFnWTSzg2v8p0NEOuylBZkQhmetzJhCJZn3tysf_7ev36_PzfrD4ZDytJwFeeQyrezyahQLuJn7SyUXKoT9S_GpbZRu6oEje7m0cK_xxH4cg-8YzhkPqS4OkIxRK9PRm_a8ffb6X8jmt1Oj3bTzoshlsJ4LfFLqlsQw24VDKlXt8to0xsP5c7qh5WKkVrjRIiuSrgVU8kzw0ukKS9evLfi6knrwRaJtNrc94fQ3UPzDzJ5oVA)

↓ `git rebase main`

[![](https://mermaid.ink/img/pako:eNqNUs1KxDAQfpVhoPRS0PVnD7kJW7bCetkVD5JL2mTbYNuUmopLKXhZ8Ak8ePcBfKhFfAvTbku7shYDgczMl2--TL4SA8UFErSsUqZSEyjBjlW4EE8itgnYXPhFaDtg60gkYp9ZsyLWNlRQWRZNoVmh1POcZVEXAwQqSaQGyQnF03pNKIJmoQl328_vl_evj7fd9pVif8XPWRpEoGI-oIlE8KAKDQmT6Qj72ZCorepNJoh3PfcWZt8OwOcH4K7DYd_fDS5q-TXh0r1zlyt3BHr5f-j0b-jxh7czWsvnk8mYWv_IPAYKx8tTv5PVT2__dZ57NaOIDiYiN8K4sU5ZE1FsDEKRmGNrkbpFZaCs0Gq1SQMkOi-Eg0XGmRYzycKcJUjWLH402Yyl90r1seBSq_xmb8_GpdUPzcfLHg?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNqNUs1KxDAQfpVhoPRS0PVnD7kJW7bCetkVD5JL2mTbYNuUmopLKXhZ8Ak8ePcBfKhFfAvTbku7shYDgczMl2--TL4SA8UFErSsUqZSEyjBjlW4EE8itgnYXPhFaDtg60gkYp9ZsyLWNlRQWRZNoVmh1POcZVEXAwQqSaQGyQnF03pNKIJmoQl328_vl_evj7fd9pVif8XPWRpEoGI-oIlE8KAKDQmT6Qj72ZCorepNJoh3PfcWZt8OwOcH4K7DYd_fDS5q-TXh0r1zlyt3BHr5f-j0b-jxh7czWsvnk8mYWv_IPAYKx8tTv5PVT2__dZ57NaOIDiYiN8K4sU5ZE1FsDEKRmGNrkbpFZaCs0Gq1SQMkOi-Eg0XGmRYzycKcJUjWLH402Yyl90r1seBSq_xmb8_GpdUPzcfLHg)

（わかりやすくする為に `old` というブランチを図に載せているが、実際には `old` というブランチは生成されない。ブランチに紐付かないコミットがそこに残るだけ。）

コミット `000004` ~ `000006` が、 `000004b` ~ `000006b` にコピーされている。

HEAD の場所が前とは違うところについているため、既に push したものを rebase すると push できなくなる（force-pushが必要になる）ので注意。

#### 使うタイミング

現在開発中の traQ の運用の中で使用しているらしい。
traQ は master ブランチで開発を行っているのだが、ここで開発されている traQ は OSS 用（≒一般公開されてるもの）。そこから traP 内で使用する traQ に対応するための変更（例えば traPortal を経由してログインするようにする変更） は 別のブランチ（ここでは `for-traP` ブランチとする）で行っている。ので、この `for-traP` を更新する為に、リベースを行っているらしい。

[![](https://mermaid.ink/img/pako:eNp1UkFqwzAQ_IpYMLq4H9CtaSEppKXQHtrgy8Ze26KWZZR1IRhDL4G-oIfe-4A-KpT-orKdEAdcCcHu7OwMWqmB2CYECoKg0aVmJRohC5st6ZUKqYRMaF1nMhSSczI0ICnWBXdYpnnusMo93EiDupw5LOP8DgemwQ2Tk6LtdhBEpejXseuYCxFbYzQLnagILiMQjJmP9rvv37fPn6-P_e49ghN73ZuI1LoLdng_kskpfrE1i8F4Wn82ljoUeFuRWtzMF0t_Hgfe1RnvqDxhOtJ-mtDuC8__FVbdbc_cIQRDzg8z8a_SdF0R9LOPQPnwMP1Or_VUrNk-bMsYFLuaQqirBJmuNWYODagUi41HKyxX1p5ySjRbdzu8fP8B2j8XwKOq?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNp1UkFqwzAQ_IpYMLq4H9CtaSEppKXQHtrgy8Ze26KWZZR1IRhDL4G-oIfe-4A-KpT-orKdEAdcCcHu7OwMWqmB2CYECoKg0aVmJRohC5st6ZUKqYRMaF1nMhSSczI0ICnWBXdYpnnusMo93EiDupw5LOP8DgemwQ2Tk6LtdhBEpejXseuYCxFbYzQLnagILiMQjJmP9rvv37fPn6-P_e49ghN73ZuI1LoLdng_kskpfrE1i8F4Wn82ljoUeFuRWtzMF0t_Hgfe1RnvqDxhOtJ-mtDuC8__FVbdbc_cIQRDzg8z8a_SdF0R9LOPQPnwMP1Or_VUrNk-bMsYFLuaQqirBJmuNWYODagUi41HKyxX1p5ySjRbdzu8fP8B2j8XwKOq)

↓ traP 内 traQ 用のリリース作業

[![](https://mermaid.ink/img/pako:eNp1UcFKxDAQ_ZUwUHKpP5Cbq7ArrCLoQZdeZttpG2ySkp0KSyl4WfALPHj3A_yoRfwL09bFXagJgZk3b16SNy2kLiNQEEWttpqVaIWsXLGkZ6qkEjKjdVPIWEguydCI5NhU3GOF5rnHugxwKw1qO_No0_IGR6bBDZOXout3FCVWDOvQdciFSJ0xmoXOVALnCQjGIkT73ef3y_vXx9t-95rAEbuk9Mk1LEb9aZnZScdY4G1NanE1XyzDuR95F8e89fB8kTt_xh5vp5Uf5IT0UHn8t7KS_a9OrocYDPlgWhbcb_u2BAaPE1Ah_HW5F-wCFRt2d1ubgmLfUAxNnSHTpcbCowGVY7UJaI125dxfTplm56_HCQ-D7n4A3_2b1A?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNp1UcFKxDAQ_ZUwUHKpP5Cbq7ArrCLoQZdeZttpG2ySkp0KSyl4WfALPHj3A_yoRfwL09bFXagJgZk3b16SNy2kLiNQEEWttpqVaIWsXLGkZ6qkEjKjdVPIWEguydCI5NhU3GOF5rnHugxwKw1qO_No0_IGR6bBDZOXout3FCVWDOvQdciFSJ0xmoXOVALnCQjGIkT73ef3y_vXx9t-95rAEbuk9Mk1LEb9aZnZScdY4G1NanE1XyzDuR95F8e89fB8kTt_xh5vp5Uf5IT0UHn8t7KS_a9OrocYDPlgWhbcb_u2BAaPE1Ah_HW5F-wCFRt2d1ubgmLfUAxNnSHTpcbCowGVY7UJaI125dxfTplm56_HCQ-D7n4A3_2b1A)

他にも、PR を建てる前に rebase を行ってブランチをキレイにする人もいる。その場合は、よく次に紹介する `-i` コマンドを使っている事が多い。


### rebase -i

基本は同じだが、`-i` オプションをつけると「枝」のコミットに対して編集・入れ替えなどの操作をすることができるようになる。

[![](https://mermaid.ink/img/pako:eNp9Us1qwzAMfhUhCL4Etu7v4NugpRl0p-00fHETJzFL7ODZYyUEdinsCXbYfQ-whypjbzEnaUlaSgUG_XzSJ1mqMdaJQIpBUEslLYUaSKGzhXgVBaFAErF0GQmB2FyUovek3BWWQANNEDAFnWTSzg2v8p0NEOuylBZkQhmetzJhCJZn3tysf_7ev36_PzfrD4ZDytJwFeeQyrezyahQLuJn7SyUXKoT9S_GpbZRu6oEje7m0cK_xxH4cg-8YzhkPqS4OkIxRK9PRm_a8ffb6X8jmt1Oj3bTzoshlsJ4LfFLqlsQw24VDKlXt8to0xsP5c7qh5WKkVrjRIiuSrgVU8kzw0ukKS9evLfi6knrwRaJtNrc94fQ3UPzDzJ5oVA?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNp9Us1qwzAMfhUhCL4Etu7v4NugpRl0p-00fHETJzFL7ODZYyUEdinsCXbYfQ-whypjbzEnaUlaSgUG_XzSJ1mqMdaJQIpBUEslLYUaSKGzhXgVBaFAErF0GQmB2FyUovek3BWWQANNEDAFnWTSzg2v8p0NEOuylBZkQhmetzJhCJZn3tysf_7ev36_PzfrD4ZDytJwFeeQyrezyahQLuJn7SyUXKoT9S_GpbZRu6oEje7m0cK_xxH4cg-8YzhkPqS4OkIxRK9PRm_a8ffb6X8jmt1Oj3bTzoshlsJ4LfFLqlsQw24VDKlXt8to0xsP5c7qh5WKkVrjRIiuSrgVU8kzw0ukKS9evLfi6knrwRaJtNrc94fQ3UPzDzJ5oVA)

例えば、上図の状況で `git rebase -i 000001` と入力すると、コミット `000004` ~ `000006` について操作することができる。

rebase を実行すると、エディターが起動してどのコミットをどのように操作したいかを選ぶことができる。画面の指示に従って編集して、セーブして終了するとコミットが操作される。操作は、編集後に並んでいるコミットを一番上から適用していく形で進む。

画面を見ればどのように操作できるか分かると思うが、以下に各操作の解説をする。

- `pick` コミットをそのまま配置する。デフォルトはこれ。
- `reword` コミットメッセージを編集する。
- `edit` コミットを編集する。このコミットを適用する段階で一旦 rebase がストップするので、編集して git の指示に従い `git commit --amend` を実行。その後、`git rebase --continue` を実行すると適用が完了する。
- `squash` 一つ前のコミットと合体する。コミットメッセージの入力画面ではコミットメッセージが2つ並ぶので、片方をコメントアウト(`#` を行の先頭に入れる)して削除しよう。
- `fixup` squash と同じだが、コミットメッセージは1つ前のコミットが採用される。
- `drop` コミット削除。`#` を行の先頭に入力すれば削除される事を頭に入れておけば、これを使うことはない。
- そのほか：使う機会はほぼない（少なくとも私は使ったことがない）。必要になった時に説明文を読んでください。

:::success
**演習**

リポジトリに `ex_rebase` ブランチが用意されているので、このブランチで rebase -i を試してみる。
まず、log でコミットの一覧を確認する。このブランチを master にマージするための PR を出すために、作業内容を整理したい。具体的には、以下の事を変更してほしい。

1. 「英語名称に Titech を追加」と「Titech を Tokyo Tech に修正」のコミットは1つにまとめられそうなので、まとめて更にコミットメッセージを「英語名称に Tokyo Tech を追加」と書き換えたい。
3. Tokyo Tech traP の略称は不要という事になったので消したい。
4. 「卒業生でも在籍できるように」のコミット内で、「または」という文言を使っているが「もしくは」に書き換えたい。

すべて変更したら、PR を建て traQ のチャンネルに貼って、レビューを待つ。

Approve が出たら、そのままマージする。
:::

### cherry-pick

特定のコミットだけを自分のブランチに取り込む。`cherry pick` はいいとこ取りという意味らしい。

```bash==
git cherry-pick <target-commit>
```

また、範囲指定でコミットを取り込むこともできる。

```bash==
git cherry-pick <target1>..<target2>
```

[![](https://mermaid.ink/img/pako:eNp9UU1LxDAQ_SvDQMmloOvXITdhZSusJz1JLtlmmgabpMREXEr_u2lX2YrSgUDevJn34M2AtVeEHItiMM5EDgOwzus9fVDHODBFh6RZCSy2ZOnUaWTqIoMRxqIQDubSJu6C7NsfDFB7a00Eo7jAy6k2As_sIUhXt9CYz4vNys7NcucPe7vK3gmEeOyJV4-7ap_fy2K4pfrNpwhWGreicfWPw2_NxfD1ZCh1htXD_VYglmgpZAeVAx4mHYFzjAJ5_n4HOTmMeVSm6J-PrkYeQ6ISU69kpK2ROkiLvJHde-720r16f8akTPTh6XTE-ZbjFxTDiMA?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNp9UU1LxDAQ_SvDQMmloOvXITdhZSusJz1JLtlmmgabpMREXEr_u2lX2YrSgUDevJn34M2AtVeEHItiMM5EDgOwzus9fVDHODBFh6RZCSy2ZOnUaWTqIoMRxqIQDubSJu6C7NsfDFB7a00Eo7jAy6k2As_sIUhXt9CYz4vNys7NcucPe7vK3gmEeOyJV4-7ap_fy2K4pfrNpwhWGreicfWPw2_NxfD1ZCh1htXD_VYglmgpZAeVAx4mHYFzjAJ5_n4HOTmMeVSm6J-PrkYeQ6ISU69kpK2ROkiLvJHde-720r16f8akTPTh6XTE-ZbjFxTDiMA)

↓ `git cherry-pick 000004`

[![](https://mermaid.ink/img/pako:eNp9UU1rwzAM_StCEHzJ2Lqvg8-FdtCettPwxbWVxDS2g2uPhZD_PifdaMsgAoGkpyehpwGV14Qci2IwzkQOA7DW1zv6opZxYJoOqWYlsNiQpXOlkqmNDEYYi0I4mK02cRNk1_zlAMpbayIYzQU-TLYSeEEPQTrVQGW-71cLnOdrzj_0ZRF9FQix74hv3zbbXfaPq-aG1NGnCFYatzDjcXHD0w3aUAj9XWfU8fYALNFSyIt01nmYCAJnNQXyHP7qOY0ac6tM0b_3TiGPIVGJqdMy0trIOkiLvJLtKVc76T69v-SkTfRhf_7l_NLxBxszido?type=png)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNp9UU1rwzAM_StCEHzJ2Lqvg8-FdtCettPwxbWVxDS2g2uPhZD_PifdaMsgAoGkpyehpwGV14Qci2IwzkQOA7DW1zv6opZxYJoOqWYlsNiQpXOlkqmNDEYYi0I4mK02cRNk1_zlAMpbayIYzQU-TLYSeEEPQTrVQGW-71cLnOdrzj_0ZRF9FQix74hv3zbbXfaPq-aG1NGnCFYatzDjcXHD0w3aUAj9XWfU8fYALNFSyIt01nmYCAJnNQXyHP7qOY0ac6tM0b_3TiGPIVGJqdMy0trIOkiLvJLtKVc76T69v-SkTfRhf_7l_NLxBxszido)

（見切れちゃった…。自動生成なのでこのあたりは少し許して）

### bisect

バグ・問題が発生したときに、どのコミットで問題が起きてしまったかを見つけるために便利な機能。ただ、私は使ったことがない。（このテキストを作成している最中に知った。）

```bash==
git bisect start
```

で bisect を開始する。その後、様々なコミットを選択して実行して、問題が発生するかを確認していく。

問題が発生しなければ 

```bash==
git bisect good
```
発生したときは 
```bash==
git bisect bad
```
を実行する。

good commit と bad commit が1つずつ見つかると、git は _†伝家の宝刀†_ 二分探索を行ってくれる。
あとは、git が自動的に commit を checkout してくれるので、それに対して `git bisect good`, `git bisect bad` を入力し続ける事で問題のコミットを特定できる。
`git bisect run <script>` で `good` か `bad` の判定も自動化して、特定を完全に任せることもできるようだ。

これ以上は私にはわからないので、こういう機能があるんだと頭の片隅にとどめて、必要なときに自分で検索するのがよいだろう。


### config

```bash==
git config <command>
```

git の設定を登録できる。

設定できる項目は山程あるので、気になる場合は調べるとよい。

ここでは、幾つかだけ紹介する。自分に合うように設定を変えてほしい。

#### 1. pull ff
おそらく `git pull` コマンドを実行した時に、warning が出る。これは、`pull`時にリモートとローカルで差があったらどうするかの設定をしろというもの。色々選択肢はあるが、個人的なおすすめは `pull.ff only`　設定。fast-foward （HEAD をそのまま前に進められる） のみを許容するという設定で、これをつけると変にマージコミットが作成されなくても済む。

```bash==
git config --global pull.ff only
```

`--global` 設定はリポジトリによらず共通の設定を行うオプション。これをつけなかったら、今いるリポジトリにのみ設定が適用される。

#### 2. editor

`git commit` 等を実行した時に、エディターが起動するがそれを変更することができる。例えば、VSCode を入れているのなら 

```bash==
git config --global core.editor 'code --wait'
```

とすればよい。`code` は VSCode を起動するコマンドである。
ただし、サーバーに普通 VSCode は入っていないので、サーバーでこの設定は使えないという事に注意。

他のエディターが良いのなら、各自調べると何か出てくるかもしれない。


#### 3. push up-stream

`git push` の初回実行時に up-stream（リモートのブランチ）を省略できる。

```bash==
git config --global push.default current
```

#### 4. SSH 接続

https://md.trap.jp/uEfwGFhiSIGH6UdNXiG0KA を参照。SysAd 班員は既に設定しているかもしれない。SSH についての詳細な説明は割愛するが、「ファイル版の進化したパスワード」という認識を持っていればとりあえず十分。

### stash

コミットしていない変更を、他の作業をするために一旦退避させたい時に使う。

```bash==
git stash
```

`git stash list` で、退避された変更の一覧を見る。

`git stash pop` で、一番直近に退避された変更を復元できる。直近でないものを選びたい時は、`git stash list` から `git stash pop stash@{n}` で復元するものを選択できる。

---

そのほかにも Git のサブコマンドはたくさんある。
余裕があれば https://git-scm.com/book/ja/v2 を眺めてみると良いと思う。
