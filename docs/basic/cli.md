# CLIによるGit操作

今回VSCode上でやった内容とほぼ一緒の操作
「CLIって何？」という人は、まず「コマンドライン」という物に少し慣れてから見ることをオススメします。無料の教材などで少しかじってみよう
`ls`と`cd`でファイルツリーを自由自在に動き回れるくらいの慣れがあれば理解できるはず

- `$`で示されているのが実行したコマンド
- コマンドの上に書いてあるのは、今いるディレクトリとブランチ

Gitea上で`git-lecture2`というリポジトリを作成してから始めてください

```bash
# クローン
~/develop
$ git clone https://git-lecture.trap.jp/mehm8128/git-lecture2.git
Cloning into 'git-lecture2'...
Username for 'https://git-lecture.trap.jp': mehm8128
Password for 'https://mehm8128@git-lecture.trap.jp':
warning: You appear to have cloned an empty repository.

# クローンしたリポジトリのディレクトリに移動
~/develop
$ cd git-lecture2

# テキストファイルを作成(テキスト編集画面が出てくるので、編集してctrl+Sで保存後、ctrl+Xで終了)
~/develop/git-lecture2 main*
$ nano trap.txt

# 作成されたテキストファイルを確認
~/develop/git-lecture2 main*
$ ls
trap.txt

# 現在のディレクトリにあるすべてのファイルをステージ
# (ステージ = ファイルをコミット対象にする)
~/develop/git-lecture main*
$ git add .

# コミット
~/develop/git-lecture main*
$ git commit -m "これがtraP"
[main (root-commit) be1c792] これがtraP
 1 file changed, 1 insertion(+)
 create mode 100644 trap.txt

# リモートにプッシュ
~/develop/git-lecture2 main*
$ git push -u origin main
Username for 'https://git-lecture.trap.jp': mehm8128
Password for 'https://mehm8128@git-lecture.trap.jp':
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 879 bytes | 879.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
remote: . Processing 1 references
remote: Processed 1 references in total
To https://git-lecture.trap.jp/mehm8128/git-lecture2.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.

# ブランチを作成し、そのブランチに切り替え
~/develop/git-lecture main
$ git switch -c develop
Switched to a new branch 'develop'

# テキストを編集
~/develop/git-lecture2 develop*
$ nano trap.txt

# 現在のディレクトリにあるすべてのファイルをステージ
~/develop/git-lecture2 develop*
$ git add .

# コミット
~/develop/git-lecture develop*
$ git commit -m "けした"
[develop dca708f] けした
 1 file changed, 1 insertion(+), 1 deletion(-)

# リモートにプッシュ
~/develop/git-lecture develop*
$ git push -u origin develop
Username for 'https://git-lecture.trap.jp': mehm8128
Password for 'https://mehm8128@git-lecture.trap.jp':
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Writing objects: 100% (3/3), 909 bytes | 909.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
remote:
remote: Create a new pull request for 'develop':
remote:   https://git-lecture.trap.jp/mehm8128/git-lecture2/compare/main...develop
remote:
remote: . Processing 1 references
remote: Processed 1 references in total
To https://git-lecture.trap.jp/mehm8128/git-lecture2.git
 * [new branch]      develop -> develop
branch 'develop' set up to track 'origin/develop'.
```
