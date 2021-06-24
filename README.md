# ポートフォリオサイト

このプロジェクトは、https://himorishige.io/ で公開されているサンプルポートフォリオサイトのソースコードになります。

## 動作に必要な外部サービス

AWS Amplify hosting / API（REST、GraphQL）、AWS SecretManager、SendGridの設定が必要となります。

## 初期設定

動作に必要な設定について

### フロントエンド

`.env`

```
SKIP_PREFLIGHT_CHECK=true // storybook用の記載
```

`.env.local`

```
REACT_APP_MAIL_API_URL=https://hogehoge/api // ContactForm用APIエンドポイント
REACT_APP_MAIL_API_KEY=key // ContactForm用API Key
REACT_APP_MAIL_API_TOKEN=hogehoge // ContactForm用Token
```

Amplify上で実行の際は環境変数に追加する必要があります。

`aws-exports.js`

Amplifyサービスを利用するために必要となります。
AmplifyCLIで、アプリケーションを`amplify init`して初期設定を行うか、`amplify pull`で既存アプリケーションをpullしてださい。

### バックエンド

準備中

## 起動について

### `yarn start`

開発モードでアプリケーションを起動します。  
Portfolio作品一覧を表示するにはDynamoDBへのデータ投入が必要となります。

### `yarn storybook`

Storybookを起動します。
