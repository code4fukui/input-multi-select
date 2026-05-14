# input-multi-select

依存関係のないカスタムHTML要素で、ユーザーがリストから複数のオプションを動的に選択できるようにします。選択するたびに新しいドロップダウンが追加され、選択をクリアするとそのドロップダウンが削除されます。

## デモ

https://code4fukui.github.io/input-multi-select/

デモではメニュー項目のリストが表示されます。最初のドロップダウンから項目を選択すると、その下に新しい空のドロップダウンが表示され、さらに選択が可能になります。項目を削除するには、そのドロップダウンをデフォルトの空（"-"）オプションに戻すだけです。

## 特徴

-   **動的な入力**: 次の選択用に新しいドロップダウンを自動的に追加し、クリアされたドロップダウンを削除します。
-   **シンプルなAPI**: 単一の `.value` プロパティを通じて、選択されたすべての値（配列）を取得または設定できます。
-   **データ駆動**: `options` 属性にシンプルなJSONオブジェクトを渡すことで、ドロップダウンの選択肢を生成します。
-   **デフォルトでスタイルなし**: 任意のCSSフレームワークで簡単にスタイル付けできるクリーンな構造を提供します。デモでは [Sakura CSS](https://unpkg.com/sakura.css/css/sakura.css) を使用しています。
-   **Vanilla JS**: 外部ライブラリへの依存はありません。

## 使い方

### 1. スクリプトの読み込み

HTMLに `input-multi-select.js` ファイルをモジュールとして読み込みます。

```html
<script type="module" src="./input-multi-select.js"></script>
```

### 2. HTMLへの要素の追加

`<input-multi-select>` タグを使用し、`options` 属性で選択肢を提供します。`options` 属性は、キーが表示テキスト、値が送信される値となるJSON文字列である必要があります。

```html
<input-multi-select
  id="sel"
  options='{ "Yakisoba 300yen": 1, "Takoyaki 150yen": 2, "Carbonated Water 100yen": 3 }'
></input-multi-select>
```

### 3. JavaScriptからの操作

`.value` プロパティを使用して、選択された値を取得または設定できます。

```javascript
const multiSelect = document.getElementById("sel");

// 現在選択されている値を取得
const selectedValues = multiSelect.value; // 配列を返します（例: [1, 3]）

// 選択された値を設定
multiSelect.value = [1, 2]; // コンポーネントに2つのドロップダウンを表示し、これらの値を選択状態にします
```

また、選択が追加、変更、または削除されるたびに、コンポーネントは `change` イベントを発火します。

```javascript
multiSelect.onchange = () => {
  console.log("Current values:", multiSelect.value);
};
```

## API

### 属性

-   `options` **(必須)**
    -   キーと値のオブジェクトを表すJSON文字列。
    -   **キー**: ドロップダウンでユーザーに表示されるテキスト (`string`)。
    -   **値**: オプションが選択されたときに実際に保存される値 (`string` または `number`)。

### プロパティ

-   `.value`
    -   **Get**: 現在選択されている値の `Array` を返します。
    -   **Set**: 値の `Array` を受け取ります。コンポーネントは、配列内の有効な値ごとにドロップダウンをレンダリングします。`options` マップに存在しない値は無視されます。

### イベント

-   `change`
    -   ユーザーが選択を追加、削除、または変更したときに発火します。

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
