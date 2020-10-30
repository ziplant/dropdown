# virtual-dropdown

Simple dropdown virtual select with initial styles ans programmatically control

## install

```cmd
npm i virtual-dropdown
```

## Usage

```js
import { Dropdown } from "virtual-dropdown";
import "virtual-dropdown/core/dropdown.css"; // optional, its basic styles

const options = {
  // All fields are optional
  templates: {},
  placeholder: "dropdown",
  inputName: "dropdown",
  openClass: "dropdown_list--open",
  data: [
    {
      id: 1,
      value: "item-1",
    },
    {
      id: 2,
      value: "item-2",
    },
    {
      id: 3,
      value: "item-3",
    },
  ],
};

const dropdown = new Dropdown("#selector", options);
```

Default templates look like this:

```js
  list: {
    elem: "div",
    attributes: {
      class: "dropdown",
    },
    children: [
      {
        elem: "input",
        attributes: {
          type: "hidden",
          "data-type": "input", // required
        },
      },
      {
        elem: "button",
        attributes: {
          class: "dropdown_toggle",
          "data-type": "toggle", // required
        },
      },
      {
        elem: "ul",
        attributes: {
          class: "dropdown_list",
          "data-type": "list", // required
        },
      },
    ],
  },
  item: {
    elem: "li",
    attributes: {
      class: "dropdown_item",
      "data-type": "item", // required
    },
  }
```

Basic optional styles:

```css
.dropdown {
  position: relative;
}

.dropdown_toggle {
  width: 100%;
  border: 0;
  padding: 0;
  text-align: left;
  cursor: pointer;
}

.dropdown_list {
  position: absolute;
  width: 100%;
  left: 0;
  top: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  display: none;
  overflow-y: auto;
  user-select: none;
}

.dropdown_list--open {
  display: block;
}
```

You can use following methods to control your dropdown element:

```js
open();
close();
isOpen();
select(id);
addItem(id, value);
removeItem(id);
create();
destroy();
```
