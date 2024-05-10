# おまけ4: 修正コミット

commitを作成した後に、そのcommitに加え忘れた変更や加えるべきでなかった変更が見つかることがあります。そういった状況では修正コミットを使うことができます。

## 例

まずはこのように、`main.cpp`と`mylib.hpp`2つのファイルが存在してGitに管理されていない状況だとしましょう。

```bash
$ git status
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	main.cpp
	mylib.hpp

nothing added to commit but untracked files present (use "git add" to track)
```

これら2つのファイルを同時にcommitするはずが、誤って`main.cpp`だけをcommitしてしまいました。

```bash
$ git add main.cpp
$ git commit -m "Use mylib"
[main cc01309] Use mylib
 1 file changed, 1 insertion(+)
 create mode 100644 main.cpp
# mylib.hppがcommitされていない!
$ git status
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	mylib.hpp

nothing added to commit but untracked files present (use "git add" to track)
```

`git log`でcommitログを確認すると, `mylib.hpp`が記録されていません。

```bash
$ git log --stat
commit cc01309bcfbfe072747133019f7a34d5dcff3934 (HEAD -> main)
Author: H1rono <hronok66@gmail.com>
Date:   Thu May 9 19:15:32 2024 +0900

    Use mylib

 main.cpp | 1 +
 1 file changed, 1 insertion(+)

# 過去のcommitが表示される ...
```

修正したい変更をstaging areaに上げて`git commit --amend`を行うことで直近のcommitを修正することができます。

```bash
# staging areaにmylib.hppを上げる
$ git add mylib.hpp
$ git status
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   mylib.hpp
$ git commit --amend -m "Use mylib"
[main a408ebc] Use mylib
 Date: Thu May 9 19:15:32 2024 +0900
 2 files changed, 2 insertions(+)
 create mode 100644 main.cpp
 create mode 100644 mylib.hpp
```

`--amend`で修正後のcommitログを見ると、確かに直近のcommitが修正されていることがわかります。

```bash
$ git log --stat
commit a408ebca11a05e5aed16e5cdcc993bb5fff2ab50 (HEAD -> main)
Author: H1rono <hronok66@gmail.com>
Date:   Thu May 9 19:15:32 2024 +0900

    Use mylib

 main.cpp  | 1 +
 mylib.hpp | 1 +
 2 files changed, 2 insertions(+)

# 過去のcommitが表示される ...
```

ただし、この方法では2つ以上前のcommitを修正することはできません。`git rebase`や`git reset`を使用してください(ここでは説明しません)。また、GitHubなどのリモートリポジトリにcommitの修正は反映されないため、注意してください。

:::tip
force pushでcommitの修正をリモートリポジトリに反映させることができますが、この方法はあまり推奨されません。
:::

## まとめ

- `git commit --amend`で直近のcommitを修正できる
- 複数のcommitを修正したい場合は`git rebase`を使う

## 参照

- [git amend | Atlassian Git Tutorial](https://www.atlassian.com/ja/git/tutorials/rewriting-history)
- [コミットメッセージの変更 - GitHub Docs](https://docs.github.com/ja/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message)
- [Git - git-commit Documentation](https://git-scm.com/docs/git-commit#Documentation/git-commit.txt---amend)
