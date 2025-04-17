import{_ as p,c as t,o as e,ag as i}from"./chunks/framework.DPDPlp3K.js";const h=JSON.parse('{"title":"コミットと同期","description":"","frontmatter":{},"headers":[],"relativePath":"text/chapter-1/commit-and-sync.md","filePath":"text/chapter-1/commit-and-sync.md"}'),s={name:"text/chapter-1/commit-and-sync.md"};function d(l,a,o,c,r,n){return e(),t("div",null,a[0]||(a[0]=[i('<h1 id="コミットと同期" tabindex="-1">コミットと同期 <a class="header-anchor" href="#コミットと同期" aria-label="Permalink to &quot;コミットと同期&quot;">​</a></h1><p>クラウドストレージの利点は「異なる場所からアクセスし、編集し、同期できる」ことです。Git と Gitea を使って作ったクラウドストレージで同じことをしてみましょう。</p><h2 id="リポジトリの更新" tabindex="-1">リポジトリの更新 <a class="header-anchor" href="#リポジトリの更新" aria-label="Permalink to &quot;リポジトリの更新&quot;">​</a></h2><p>以下のコマンドを実行して VSCode でデスクトップの mydrive を開いてください。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-dark github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;"> code</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#9ECBFF;"> ~/Desktop/mydrive</span></span></code></pre></div><p>ウェルカムページが表示されたら閉じ、エディタでは README.md を開いておきます。また、ウィンドウ左のアクティビティバーからソース管理タブ（○ が 3 つ曲線で繋がれた図形）を開き、以下のような画面にしてください。</p><p><img src="https://md.trap.jp/uploads/upload_ab7b01699a147f647ee4877360035b4c.png" alt=""></p><p>この状態で README.md を編集して保存すると画面に色々変化が生じます。</p><p><img src="https://md.trap.jp/uploads/upload_692f288ff341740034e6b5dcd1f12ddd.png" alt=""></p><ul><li>README.md で編集した部分の左側に青色 or 緑色の縦線が入る</li><li>サイドバーの「変更」の部分に README.md が追加される</li><li>「コミット」ボタンが使用可能になる</li></ul><p>など。この状態で以下を順に実行してください。</p><ol><li>カーソルを「コミット」ボタンの直下にある「変更」の文字の上に持っていき、すぐ右隣に表示される「＋」を押す</li><li>「コミット」ボタンの上の入力欄に「README.md 更新」と書き入れて「コミット」ボタンを押す</li><li>「コミット」ボタンが「変更の同期 1↑」ボタンに切り替わるので、それも押す</li></ol><p><img src="https://md.trap.jp/uploads/upload_3f6e6d08bf6ff02c34ee21cc4b1e9e4d.png" alt=""></p><p style="font-size:12px;text-align:center;margin:-16px 0 20px 0;">手順 2 の途中</p><div class="info custom-block"><p class="custom-block-title">COMMIT_EDITMSG</p><p>入力欄（コミットメッセージ）が空欄のまま「コミット」ボタンを押すと VSCode が英語が書かれた謎のファイルを表示して脅かして来ますが、単純に「入力欄が空欄だよ〜」と言われているだけです。開かれたファイルを閉じてコミットメッセージを書くことで問題なくコミットできます。</p><p><img src="https://md.trap.jp/uploads/upload_b695d2874b17d74872c5d08de0bebf70.png" alt=""></p><p>ちなみに、このファイルの 1 行目もコミットメッセージの入力欄として機能しています。コミットメッセージを書き込んでファイルを閉じると「コミット」ボタンを押したのと同じ扱いになります。</p></div><p>ここまで終わったら、Gitea のリポジトリのページに飛んでみます。リロードすると先ほどの更新が反映されていることが確認できます。</p><p><img src="https://md.trap.jp/uploads/upload_ea783a5e23ba7064f550bb085c432a0c.png" alt=""></p><h2 id="リポジトリの同期" tabindex="-1">リポジトリの同期 <a class="header-anchor" href="#リポジトリの同期" aria-label="Permalink to &quot;リポジトリの同期&quot;">​</a></h2><p>今度はダウンロードディレクトリにある mydrive を開きます。本当はこれが別のデバイスからクラウドストレージにアクセスしているという想定です。</p><p><img src="https://md.trap.jp/uploads/upload_32e50e69539a1b8f890a2bcae1be5aa8.png" alt=""></p><p>VSCode で開いて少し待つと「コミット」ボタンが「変更の同期 1↓」ボタンに変化します。</p><div class="tip custom-block"><p class="custom-block-title">同期の方向</p><p>先ほどと違うのは矢印が上ではなく下を向いている点です。これは先ほどの同期が「デスクトップの mydrive → Gitea 上の mydrive」だったのに対し、今回の同期が「Gitea 上の mydrive → ダウンロードの mydrive」であることを表しています。</p></div><p>「変更の同期 1↓」ボタンを押すと README.md の内容が書き変わり、先ほど行った変更が同期されたことが確認できます。</p><p><img src="https://md.trap.jp/uploads/upload_abd67dc27feefeff9b60fe81052d43f9.png" alt=""></p><p>今回はリポジトリに元からただ一つ置かれていた README.md というテキストファイルの更新と同期を試しましたが、新しいファイルを同じ場所に置いて同期させることもできます。授業資料の PDF ファイルももちろん載せられます。</p><p>Git と Gitea を使ってクラウドストレージを作ることができましたね。</p>',26)]))}const u=p(s,[["render",d]]);export{h as __pageData,u as default};
