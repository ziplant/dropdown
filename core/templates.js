export const templates = {
  dropdown: {
    elem: "div",
    attributes: {
      class: "dropdown",
    },
    children: [
      {
        elem: "input",
        attributes: {
          type: "hidden",
          "data-type": "input",
        },
      },
      {
        elem: "button",
        attributes: {
          class: "dropdown_toggle",
          "data-type": "toggle",
        },
      },
      {
        elem: "ul",
        attributes: {
          class: "dropdown_list",
          "data-type": "list",
        },
      },
    ],
  },
  item: {
    elem: "li",
    attributes: {
      class: "dropdown_item",
      "data-type": "item",
    },
  },
};
