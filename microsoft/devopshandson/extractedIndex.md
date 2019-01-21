class: center, middle 
### Azure DevOps ハンズオン

---
### 1 . リソースを作成していきます
[+] ボタンよりメニューを開いてリソースを作成していきます。

<img src='screenshots/Screen Shot 2019-01-20 at 22.51.14.png' /> 
---

### 2 . DevOps Project を選択
DevOps Project を選択します。

<img src='screenshots/Screen Shot 2019-01-20 at 22.52.00.png' /> 
---

### 3 . テンプレートフレームワークを選択します
.NET を選びます。Noed.js などの他のフレームワークも選択可能で、フレームワークに適したパイプラインが組み立てられるようになりますが、今回は .NET を選択します。

<img src='screenshots/Screen Shot 2019-01-20 at 22.53.46.png' /> 
---

### 4 . ASP .NET Core のテンプレートを選択します。
ASP.NET Core 以外にも ASP .NET などが選択できます。 例えば nodejs を選択した場合には Sails や Express などのテンプレートが選択可能です。

<img src='screenshots/Screen Shot 2019-01-20 at 22.54.07.png' /> 
---

### 5 . デプロイ先を Linux Web App に指定します。
様々なタイプの Web App に、Azure の Kubernetes 環境や仮想マシンなど、多種多様な環境にデプロイするためのパイプラインを作ることができます。

<img src='screenshots/Screen Shot 2019-01-20 at 22.54.32.png' /> 
---

### 6 . Azure DevOps のパラメータを設定
Azure DevOps Project は Azure DevOps、Azure Web App や Application Insights を構築するテンプレートサービスですが、ここでは Azure DevOps の組織の設定、リソースグループやリージョンの設定をします。

<img src='screenshots/Screen Shot 2019-01-20 at 22.55.12.png' /> 
---

### 7 . 詳細設定をします
Azure DevOps や Azure Web App の詳細設定をします。なるべく近いロケーションにデプロイしましょう。

<img src='screenshots/Screen Shot 2019-01-20 at 22.56.46.png' /> 
---

### 8 . デプロイが終了
デプロイが終了したのを確認したらリソースに移動します。

<img src='screenshots/Screen Shot 2019-01-20 at 23.19.26.png' /> 
---

### 9 . デプロイ成果物の確認
この段階では DevOps Project のリソースはデプロイされていますが、アプリケーション自体はまだデプロイされていません。アプリケーションのデプロイが完了するまでにはあと5分程度かかりますので、まず Azure DevOps の中身を確認していきます

<img src='screenshots/Screen Shot 2019-01-20 at 23.20.55.png' /> 
---


### 10 . Azure DevOps 
Azure DevOps にアクセスしたら、 Repos > Files より、ファイルを閲覧していきます。
今回はホームページテンプレートにあたる Index.cshtml に変更を加えます。

<img src='screenshots/Screen Shot 2019-01-20 at 23.22.40.png' /> 
---

### 11 . Edit で編集をします。
Edit を押して編集モードにうつります。

<img src='screenshots/Screen Shot 2019-01-20 at 23.24.17.png' /> 
---

### 12 . コメントの編集
タイトルを含め、自由な値に変更します。

<img src='screenshots/Screen Shot 2019-01-20 at 23.26.25.png' /> 
---

### 13 . コミット
編集が終わったら master ブランチにコミットします

<img src='screenshots/Screen Shot 2019-01-20 at 23.27.23.png' /> 
---

### 14 . トリガーを確認
デフォルトの設定で、master ブランチに変更が加わった時にデプロイのパイプラインが動き出すように設定されています。
確認のために Pipelines > Builds から、ちゃんと変更がトリガーされたか確認します。
ブルーのマークになっていたらトリガーが正常に作動していることになります

<img src='screenshots/Screen Shot 2019-01-20 at 23.29.11.png' /> 
---

### 15 . パイプラインの動きを確認
該当パイプラインをチェックするとビルドが進んでいることがわかります。
基本的には新しいビルドは古いビルドのパイプラインが終了し次第実行されます。今回の場合は DevOps Project デプロイ時に走り出したビルドが終了した後に実行され、リリースパイプラインに関しても同様の処理順序となります。

<img src='screenshots/Screen Shot 2019-01-20 at 23.29.56.png' /> 
---

### 16 . 成果物の確認
このビルドを確認している間に、DevOps Project 作成時にキックされたリリースパイプラインが終了していると思います。 Refresh を押すと右手に Application Endpoint が現れます。リンクをクリックしてデプロイされたか確認します。

<img src='screenshots/Screen Shot 2019-01-20 at 23.30.38.png' /> 
---

### 17 . 成果物の確認
Success! と表示されたら完了です。

<img src='screenshots/Screen Shot 2019-01-20 at 23.31.37.png' /> 
---

### 18 . 次の成果物
しばらく待つと、２つ目にキックしたリリースパイプラインが終了するので、ブラウザ上で加えた変更点が反映されているか確認をします。

<img src='screenshots/Screen Shot 2019-01-20 at 23.34.04.png' /> 
---

### 19 . 続いてビルドパイプラインを編集していきます
Edit をクリックして編集することができます

<img src='screenshots/Screen Shot 2019-01-20 at 23.38.50.png' /> 
---

### 20 . トリガーの設定
デフォルトで、master ブランチにコミットされたものは全てビルドされるようになっています。
今回はプロダクションリリースのものだけビルドされるように変更します。
た、この後の作業で、プロダクションブランチにコミットされてビルドされた成果物は いきなりプロダクション環境にデプロイされるのではなく、QA 環境にリリースされてから、確認後にスロットスワッピングされるように設定します。
まずは prod ブランチの変更時のみ、パイプラインが処理されるように設定します。

<img src='screenshots/Screen Shot 2019-01-20 at 23.41.29.png' /> 
---

### 21 . 変更を保存
Save します、Save & Queue を選択してしまうと、ビルドパイプラインが処理を始めてしまうので、この段階では Save だけにします。

<img src='screenshots/Screen Shot 2019-01-20 at 23.43.23.png' /> 
---

### 22 . 変更点を記述します
パイプラインに関してどのような変更を加えたかも History にてトラッキングされます。
その際にコメントを書いておくと大変便利です。

<img src='screenshots/Screen Shot 2019-01-20 at 23.44.09.png' /> 
---

### 23 . 続いてリリースパイプラインの設定をします。
リリースパイプラインの設定をします。

<img src='screenshots/Screen Shot 2019-01-20 at 23.45.47.png' /> 
---

### 24 . パイプラインの承認者を設定
承認者が承認するまで、リリースパイプラインがスタートされないようにします。

<img src='screenshots/Screen Shot 2019-01-20 at 23.47.41.png' /> 
---

### 25 . パイプラインの承認者を設定
承認者を設定します。 今回は承認者に自分のメールアドレスを設定します。

<img src='screenshots/Screen Shot 2019-01-20 at 23.48.29.png' /> 
---

### 26 . 設定をセーブします
<img src='screenshots/Screen Shot 2019-01-20 at 23.49.21.png' /> 
---

### 27 . リリースの設定をします
job, tasks と書いてある部分をクリックして、設定に行きます

<img src='screenshots/Screen Shot 2019-01-20 at 23.49.56.png' /> 
---

### 28 . デプロイメントスロットの設定を開きます
現在は Production のみが選択できます

<img src='screenshots/Screen Shot 2019-01-20 at 23.50.27.png' /> 
---
### 28-2 . デプロイメントスロットの設定を開きます
Azure DevOps Project においては、テンプレートデプロイの際に、ARM Template で環境ごと作るテンプレートが適用されています。
２回目以降のデプロイでは必要ないため、Disable にします。

<img src='screenshots/Screen Shot 2019-01-21 at 18.42.46.png' /> 
---

### 29 . Azure Portal で App Service を開きます
<img src='screenshots/Screen Shot 2019-01-20 at 23.51.07.png' /> 
---

### 30 . 新しくスロットを追加します
<img src='screenshots/Screen Shot 2019-01-20 at 23.53.29.png' /> 
---

### 31 . DevOps に戻りスロット設定をします
リリースするデプロイメントスロットを選択することができるようになっているので、スロットを選択します

<img src='screenshots/Screen Shot 2019-01-20 at 23.55.03.png' /> 
---

### 32 . 変更をセーブ
変更をセーブします
<img src='screenshots/Screen Shot 2019-01-20 at 23.56.02.png' /> 
---

### 33 . 改めてデプロイ
これでデプロイからリリースのパイプラインを作成することができたので、もう一度 Index.cshtml を変更して、改めてデプロイします。

<img src='screenshots/Screen Shot 2019-01-20 at 23.57.54.png' /> 
---

### 34 . prod ブランチにデプロイ
今回は prod のブランチにデプロイします。ちゃんと設定されていれば、prod ブランチにpush したら、それをトリガーにパイプラインの処理が始まり、ビルド終了後にApproval メールが送信され、承認後に Web App の qa スロットにアプリケーションがデプロイされます。

<img src='screenshots/Screen Shot 2019-01-21 at 0.00.55.png' /> 
---

### 35 . 処理が始まったことを確認
Pipelines > Builds で処理が始まったことを確認します。

<img src='screenshots/Screen Shot 2019-01-21 at 0.01.39.png' /> 
---

### 36 . 処理の中断を確認
ビルドが終了したら、 リリースパイプラインにいき、Pending Approval となって、処理が止まっていることを確認します

<img src='screenshots/Screen Shot 2019-01-21 at 0.05.42.png' /> 
---

### 37 . メールを開き確認
メールボックスに Approval メールがきているので確認します。もし、ハンズオン用のサブスクリプションで試している場合は、メールの機能がオンになっていないため、メールが届きません。その場合は直接 Pipelines > Release > 該当のリリースをクリックして、直接承認します 

<img src='screenshots/Screen Shot 2019-01-21 at 0.08.13.png' /> 
---

### 38 . Approve をクリック
確認してから承認します

<img src='screenshots/Screen Shot 2019-01-21 at 0.08.53.png' /> 
---

### 39 . コメントを書き込みます

<img src='screenshots/Screen Shot 2019-01-21 at 0.09.17.png' /> 
---

### 40 . プロセスが再開されたことを確認します
<img src='screenshots/Screen Shot 2019-01-21 at 0.09.50.png' /> 
---

### 41 . qa 環境を確認
qa 環境にデプロイされていることの確認をします。

<img src='screenshots/Screen Shot 2019-01-21 at 0.15.23.png' /> 
---

### 42 . qa スロットにいき、リンクをクリックします。

<img src='screenshots/Screen Shot 2019-01-21 at 0.15.52.png' /> 
---

### 43 . 設定が反映されていることを確認します。

<img src='screenshots/Screen Shot 2019-01-21 at 0.23.43.png' /> 
---

### 44 . 正常に確認できたら、スロットスワッピングをします。

<img src='screenshots/Screen Shot 2019-01-21 at 0.26.46.png' /> 
---

### 45 . 本番環境に環境がデプロイされていることを確認します。
<img src='screenshots/Screen Shot 2019-01-21 at 0.28.07.png' /> 
---


<img src="./logo.png" class='endnote'/>

- 本書に記載した情報は、本書各項目に関する発行日現在の Microsoft の見解を表明するものです。Microsoftは絶えず変化する市場に対応しなければならないため、ここに記載した情報に対していかなる責務を負うものではなく、提示された情報の信憑性については保証できません。
- 本書は情報提供のみを目的としています。 Microsoft は、明示的または暗示的を問わず、本書にいかなる保証も与えるものではありません。
- すべての当該著作権法を遵守することはお客様の責務です。Microsoftの書面による明確な許可なく、本書の如何なる部分についても、転載や検索システムへの格納または挿入を行うことは、どのような形式または手段（電子的、機械的、複写、レコーディング、その他）、および目的であっても禁じられています。これらは著作権保護された権利を制限するものではありません。
- Microsoftは、本書の内容を保護する特許、特許出願書、商標、著作権、またはその他の知的財産権を保有する場合があります。Microsoftから書面によるライセンス契約が明確に供給される場合を除いて、本書の提供はこれらの特許、商標、著作権、またはその他の知的財産へのライセンスを与えるものではありません。
- © 2019 Microsoft Corporation. All rights reserved.
- Microsoft, Windows, その他本文中に登場した各製品名は、Microsoft Corporation の米国およびその他の国における等力商標または商標です。
- その他、記載されている会社名および製品名は、一般に各社の商標です。
