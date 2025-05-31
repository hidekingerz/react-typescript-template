# React TypeScript Template

モダンなReact + TypeScript開発環境を提供するテンプレートプロジェクトです。

## 🚀 特徴

- **React 19** - 最新のReactライブラリ
- **TypeScript** - 型安全な開発環境
- **Vite** - 高速なビルドツール
- **Material-UI (MUI)** - 美しいUIコンポーネント
- **React Router** - ルーティング管理
- **React Hook Form + Zod** - フォーム管理とバリデーション
- **Jotai** - 軽量な状態管理
- **TanStack Query** - サーバー状態管理
- **Vitest** - 高速なテストフレームワーク
- **Storybook** - コンポーネント開発とドキュメント
- **ESLint + Prettier** - コード品質とフォーマット

## 📋 必要環境

- Node.js 22.16.0 以上
- npm 11.4.1 以上

> [Volta](https://volta.sh/)を使用している場合、適切なNode.jsとnpmのバージョンが自動的に設定されます。

## 🛠️ セットアップ

```bash
# 依存関係のインストール
npm run setup

# 開発サーバーの起動
npm run dev
```

## 📝 利用可能なスクリプト

### 開発

```bash
# 開発サーバーの起動 (http://localhost:5173)
npm run dev

# プロダクションビルド
npm run build

# ビルドのプレビュー
npm run preview
```

### テスト

```bash
# テストの実行
npm test
```

### コード品質

```bash
# ESLintでコードチェック
npm run lint

# ESLintで自動修正
npm run lint-fix

# Prettierでコードフォーマット
npm run format
```

### Storybook

```bash
# Storybookの起動 (http://localhost:6006)
npm run storybook

# Storybookのビルド
npm run build-storybook
```

## 🏗️ プロジェクト構成

```
src/
├── App.tsx              # メインアプリケーションコンポーネント
├── main.tsx             # エントリーポイント
├── assets/              # 静的ファイル
├── lib/
│   └── vitest/          # テスト設定とユーティリティ
└── stories/             # Storybookコンポーネント
```

## 🧪 テスト

このプロジェクトは以下のテスト環境を提供します：

- **Vitest** - 高速なユニットテスト
- **Testing Library** - Reactコンポーネントテスト
- **jsdom** - ブラウザ環境のシミュレーション

テストファイルは `*.test.tsx` または `*.spec.tsx` の命名規則に従ってください。

## 📚 使用技術

### フロントエンド
- **React 19** - UIライブラリ
- **TypeScript** - 静的型付け
- **Material-UI v7** - UIコンポーネントライブラリ
- **Emotion** - CSS-in-JS

### 状態管理
- **Jotai** - アトミックな状態管理
- **TanStack Query** - サーバー状態管理

### フォーム
- **React Hook Form** - 高性能なフォームライブラリ
- **Zod** - スキーマバリデーション

### ルーティング
- **React Router v7** - クライアントサイドルーティング

### 開発ツール
- **Vite** - 高速なビルドツール
- **ESLint** - コード品質チェック
- **Prettier** - コードフォーマッター
- **Storybook** - コンポーネント開発環境

### テスト
- **Vitest** - テストランナー
- **Testing Library** - テストユーティリティ

## 🚀 開発を始める

1. このテンプレートをクローンまたはダウンロード
2. `npm run setup` で依存関係をインストール
3. `npm run dev` で開発サーバーを起動
4. ブラウザで `http://localhost:5173` にアクセス

## 📖 詳細ドキュメント

- コンポーネントの確認: `npm run storybook`
- テストの実行: `npm test`
- 型チェック: TypeScriptが自動的に型チェックを実行

## 📄 ライセンス

ISC

## 👤 作者

hidekingerz