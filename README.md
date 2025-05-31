# React TypeScript Template

React + TypeScript開発環境を提供するテンプレートプロジェクト。


## 📋 必要環境

### Dev Container開発（推奨）
- Visual Studio Code
- Docker Desktop
- Dev Containers拡張機能

### ローカル開発
- Node.js 22.16.0 以上
- npm 11.4.1 以上

> [Volta](https://volta.sh/)を使用している場合、適切なNode.jsとnpmのバージョンが自動的に設定されます。

## 🛠️ セットアップ

### Dev Container使用（推奨）

1. **前提条件**
   - [Docker Desktop](https://www.docker.com/products/docker-desktop/)をインストール
   - [Visual Studio Code](https://code.visualstudio.com/)をインストール
   - [Dev Containers拡張機能](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)をインストール

2. **プロジェクトを開く**
   ```bash
   # リポジトリをクローン
   git clone <repository-url>
   cd react-typescript-template
   
   # VS Codeで開く
   code .
   ```

3. **Dev Containerで開く**
   - VS Codeでコマンドパレット（`Ctrl+Shift+P` / `Cmd+Shift+P`）を開く
   - `Dev Containers: Reopen in Container`を選択
   - コンテナのビルドと起動を待つ

4. **開発開始**
   ```bash
   # 依存関係のインストール
   npm run setup
   
   # 開発サーバーの起動
   npm run dev
   ```

### ローカル環境

```bash
# 依存関係のインストール
npm run setup

# 開発サーバーの起動
npm run dev
```

## 🐳 Dev Container環境

このプロジェクトには、一貫した開発環境を提供するDev Container設定が含まれています。

### 含まれる機能
- **Node.js 22** - 最新のNode.js環境
- **Git** - ソース管理
- **GitHub CLI** - GitHub操作
- **必要な拡張機能** - TypeScript、ESLint、Prettier等が自動インストール
- **ポートフォワーディング** - 開発サーバーとStorybookのポートが自動転送

### Dev Container内でのアクセス
- **開発サーバー**: http://localhost:5173
- **Storybook**: http://localhost:6006

### 設定ファイル
- `.devcontainer/devcontainer.json` - Dev Container設定
- `.devcontainer/Dockerfile` - カスタムコンテナ設定

## 📊 利用可能なスクリプト

| カテゴリ | コマンド | 説明 |
|---------|---------|------|
| **開発** | `npm run dev` | 開発サーバーの起動 (http://localhost:5173) |
| | `npm run build` | プロダクションビルド |
| | `npm run preview` | ビルドのプレビュー |
| **テスト** | `npm test` | テストの実行 |
| **コード品質** | `npm run lint` | ESLintでコードチェック |
| | `npm run lint-fix` | ESLintで自動修正 |
| | `npm run format` | Prettierでコードフォーマット |
| **Storybook** | `npm run storybook` | Storybookの起動 (http://localhost:6006) |
| | `npm run build-storybook` | Storybookのビルド |

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

| カテゴリ | 技術 | バージョン | 説明 |
|---------|------|-----------|------|
| **フロントエンド** | React | ^19.1.0 | UIライブラリ |
| | TypeScript | ^5.8.3 | 静的型付け |
| | Material-UI | ^7.1.0 | UIコンポーネントライブラリ |
| | Emotion | ^11.13.3 | CSS-in-JS |
| **状態管理** | Jotai | ^2.12.1 | アトミックな状態管理 |
| | TanStack Query | ^5.79.0 | サーバー状態管理 |
| **フォーム** | React Hook Form | ^7.56.4 | 高性能なフォームライブラリ |
| | Zod | ^3.0.0 | スキーマバリデーション |
| **ルーティング** | React Router | ^7.6.1 | クライアントサイドルーティング |
| **開発ツール** | Vite | ^6.3.5 | 高速なビルドツール |
| | ESLint | ^9.28.0 | コード品質チェック |
| | Prettier | ^3.5.3 | コードフォーマッター |
| | Storybook | ^9.0.1 | コンポーネント開発環境 |
| **テスト** | Vitest | ^3.1.4 | テストランナー |
| | Testing Library | ^16.3.0 | テストユーティリティ |

## 🚀 開発を始める

### Dev Container使用の場合
1. Docker DesktopとVS CodeのDev Containers拡張機能をインストール
2. プロジェクトをクローン
3. VS Codeでプロジェクトを開く
4. `Dev Containers: Reopen in Container`でコンテナ内で開く
5. `npm run setup`で依存関係をインストール
6. `npm run dev`で開発サーバーを起動
7. ブラウザで `http://localhost:5173`にアクセス

### ローカル環境の場合
1. このテンプレートをクローンまたはダウンロード
2. `npm run setup`で依存関係をインストール
3. `npm run dev`で開発サーバーを起動
4. ブラウザで `http://localhost:5173`にアクセス

## 📖 詳細ドキュメント

- コンポーネントの確認: `npm run storybook`
- テストの実行: `npm test`
- 型チェック: TypeScriptが自動的に型チェックを実行

## 📄 ライセンス

ISC

## 👤 作者

hidekingerz