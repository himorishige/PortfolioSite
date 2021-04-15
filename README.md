# ポートフォリオサイト

このプロジェクトは、https://himorishige.io/ で公開されているポートフォリオサイトのソースコードになります。

## 動作に必要な外部サービス

AWS Amplify hosting / API（REST、GraphQL）、AWS SecretManager、SendGrid の設定が必要となります。

## 初期設定

動作に必要な設定について

### フロントエンド

`.env.local`

```
SKIP_PREFLIGHT_CHECK=true // storybook用の記載
REACT_APP_MAIL_API_URL=https://hogehoge/api // ContactForm用APIエンドポイント
```

Amplify 上では環境変数に追加する必要があります。

`aws-exports.js`

Amplify サービスを利用するために必要となります。
AmplifyCLI で、アプリケーションを`amplify init`して初期設定を行うか、`amplify pull`で既存アプリケーションを pull してださい。

### バックエンド

準備中

## 起動について

### `yarn start`

開発モードでアプリケーションを起動します。  
Portfolio 作品一覧を表示するには DynamoDB へのデータ投入が必要となります。

### `yarn storybook`

Storybook 起動します。
