# input-multi-select

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A zero-dependency custom HTML element that allows users to dynamically select multiple options from a list. Each selection adds a new dropdown, and clearing a selection removes it.

## Demo

https://code4fukui.github.io/input-multi-select/

The demo shows a list of menu items. When you select an item from the first dropdown, a new empty dropdown appears below it, allowing for another selection. To remove an item, simply change its dropdown back to the default empty ("-") option.

## Features

-   **Dynamic Inputs**: Automatically adds a new dropdown for the next selection and removes dropdowns when they are cleared.
-   **Simple API**: Get or set all selected values through a single `.value` property, which holds an array.
-   **Data-Driven**: Populate the dropdown options using a simple JSON object via the `options` attribute.
-   **Unstyled by Default**: Provides a clean structure that can be easily styled with any CSS framework. The demo uses [Sakura CSS](https://unpkg.com/sakura.css/css/sakura.css).
-   **Vanilla JS**: No external library dependencies.

## Usage

### 1. Include the script

Include the `input-multi-select.js` file as a module in your HTML.

```html
<script type="module" src="./input-multi-select.js"></script>
```

### 2. Add the element to your HTML

Use the `<input-multi-select>` tag and provide the choices through the `options` attribute. The `options` attribute must be a JSON string where keys are the display text and values are the submission values.

```html
<input-multi-select
  id="sel"
  options='{ "Yakisoba 300yen": 1, "Takoyaki 150yen": 2, "Carbonated Water 100yen": 3 }'
></input-multi-select>
```

### 3. Interact with JavaScript

You can get or set the selected values using the `.value` property.

```javascript
const multiSelect = document.getElementById("sel");

// Get the currently selected values
const selectedValues = multiSelect.value; // Returns an array, e.g., [1, 3]

// Set the selected values
multiSelect.value = [1, 2]; // Sets the component to have two dropdowns with these values selected
```

The component also fires a `change` event whenever a selection is added, modified, or removed.

```javascript
multiSelect.onchange = () => {
  console.log("Current values:", multiSelect.value);
};
```

## API

### Attributes

-   `options` **(required)**
    -   A JSON string representing a key-value object.
    -   **Keys**: The display text shown to the user in the dropdown (`string`).
    -   **Values**: The actual value to be stored when the option is selected (`string` or `number`).

### Properties

-   `.value`
    -   **Get**: Returns an `Array` of the currently selected values.
    -   **Set**: Takes an `Array` of values. The component will render a dropdown for each valid value in the array. Any values that do not exist in the `options` map will be ignored.

### Events

-   `change`
    -   Fires when a user adds, removes, or changes a selection.

## License

MIT License — see [LICENSE](LICENSE).