import{_ as t,c as e,o as p,ag as r}from"./chunks/framework.DPDPlp3K.js";const u=JSON.parse('{"title":"ブランチを生やす","description":"","frontmatter":{},"headers":[],"relativePath":"text/chapter-2/grow-a-branch.md","filePath":"text/chapter-2/grow-a-branch.md"}'),s={name:"text/chapter-2/grow-a-branch.md"};function o(n,a,d,c,i,l){return p(),e("div",null,a[0]||(a[0]=[r('<h1 id="ブランチを生やす" tabindex="-1">ブランチを生やす <a class="header-anchor" href="#ブランチを生やす" aria-label="Permalink to &quot;ブランチを生やす&quot;">​</a></h1><p>作成したばかりのリポジトリでは main という名前のブランチがひとつ用意されています。前編で行った操作はすべて main の中で完結していました。個人開発では main に直接コミットして全く問題ない（実際によくやる）のですが、統制の効いた共同開発になると保守性の観点からそれが禁じられ、必ずブランチを生やしてから作業をすることを求められる場合もあります。</p><h2 id="ブランチの作成" tabindex="-1">ブランチの作成 <a class="header-anchor" href="#ブランチの作成" aria-label="Permalink to &quot;ブランチの作成&quot;">​</a></h2><p>デスクトップの mydrive ディレクトリを VSCode で開き、ウィンドウ左下の「main」と書かれた部分をクリックすると、ウィンドウ上部中央に入力欄とボタンが現れます。</p><p><img src="https://md.trap.jp/uploads/upload_99e226372e23f4e7d72dc05008def3e1.png" alt=""></p><p>「新しいブランチの作成…」を選択し、新たに作るブランチの名前を入力します。とりあえず「sub」という名前にします。</p><p><img src="https://md.trap.jp/uploads/upload_83eda0495e7f7c0f9bb3b890cbe00f31.png" alt=""></p><p>このあと「コミット」ボタンが「Branch の発行」ボタンに切り替わるのでそれを押すと作成したブランチをリモートと同期することができます。Gitea のリポジトリのページに向かうと「1 ブランチ」だったところが「2 ブランチ」に変わっていて、それをクリックすると新たに「sub」というブランチが出来ていることが確認できます。</p><p><img src="https://md.trap.jp/uploads/upload_a34cdf50397e6456e585ef9c11b3ce2d.png" alt=""></p><h2 id="ブランチ間の移動" tabindex="-1">ブランチ間の移動 <a class="header-anchor" href="#ブランチ間の移動" aria-label="Permalink to &quot;ブランチ間の移動&quot;">​</a></h2><p>VSCode に戻ると、先ほどクリックした部分の「main」が「sub」に変わっています。これは現在開かれている作業ブランチが sub であることを表します。sub ブランチから main ブランチへ移動するにはこの「sub」を押し、表示されるブランチ一覧から main を選択します。同じ方法で再度 sub に戻ってきてください。</p><p><img src="https://md.trap.jp/uploads/upload_f710f9f551324d867e2884e1a089866e.png" alt=""></p><div class="warning custom-block"><p class="custom-block-title">チェックアウト</p><p>入力欄のプレースホルダーに薄く「チェックアウトするブランチまたはタグを選択します」と出ているのが見えます。sub ブランチに移動することを「<strong>sub をチェックアウトする</strong>」と表現します。ホテルのチェックアウトに準えると「今いるブランチから出ていく」的な意味に捉えられるので真逆に思われて混乱の種になりますが、このチェックアウトは図書などの「貸出」の方が意味の捉え方としては適切です。「sub を借りてきて開く」という感じです。</p></div><p>一度ブランチを生やしてしまえば、その中でどんなコミットをしようと main には影響を与えず、誰かに迷惑をかけることもありません。もしブランチの中で作業をしていてシステムが原因不明の不具合を生じたら、変更を破棄して最後のコミット直後の状態に戻ることもできます。</p>',14)]))}const h=t(s,[["render",o]]);export{u as __pageData,h as default};
