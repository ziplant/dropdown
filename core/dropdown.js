import { templates } from "./templates";
import "./dropdown.css";

export class Dropdown {
  constructor(selector, options) {
    this.toggle;
    this.list;
    this.input;
    this.options = {
      templates: templates,
      placeholder: "dropdown",
      inputName: "dropdown",
      openClass: "dropdown_list--open",
      data: [],
    };

    this.$root = document.querySelector(selector);

    options ? this.setOptions(options) : null;

    this.create();
  }

  setOptions(options) {
    Object.keys(options).forEach((key) => {
      if (key == "templates") {
        Object.keys(options[key]).forEach((template) => {
          this.options[key][template] = options[key][template];
        });
      } else {
        this.options[key] = options[key];
      }
    });
  }

  render(template) {
    let element = document.createElement(template.elem);

    for (let key in template.attributes) {
      element.setAttribute(key, template.attributes[key]);
    }

    element.textContent = template.text ? template.text : "";

    if (template.children) {
      template.children.forEach((children) => {
        element.appendChild(this.render(children));
      });
    }

    return element;
  }

  create() {
    this.$root.innerHTML = "";
    this.$el = this.render(this.options.templates.dropdown);

    this.toggle = this.$el.querySelector("[data-type='toggle']");
    this.list = this.$el.querySelector("[data-type='list']");
    this.input = this.$el.querySelector("[data-type='input']");

    this.toggle.textContent = this.options.placeholder;
    this.input.setAttribute("name", this.options.inputName);

    this.options.data.forEach((item) => {
      let template = this.options.templates.item;
      template.text = item.value;
      template.attributes = template.attributes || {};
      template.attributes["data-id"] = item.id;

      this.list.appendChild(this.render(template));
    });

    this.$root.appendChild(this.$el);

    this.setup();
  }

  setup() {
    this.toggle.onfocus = () => {
      this.list.classList.add(this.options.openClass);
    };

    this.toggle.onblur = () => {
      this.list.classList.remove(this.options.openClass);
    };

    this.list.onmousedown = (e) => {
      if (e.target.dataset.type == "item") {
        this.dropdown(e.target.dataset.id);
      }
    };
  }

  removeItem(id) {
    let elem = this.options.data.find((el) => el.id == id);
    let elemIndex = this.options.data.indexOf(elem);

    if (~elemIndex) {
      this.options.data.splice(elemIndex, 1);
      this.create();
      return true;
    }

    return false;
  }

  addItem(id, value) {
    if (!id || !value) return false;

    this.options.data.push({ id: id, value: value });
    this.create();
    return true;
  }

  open() {
    this.toggle.focus();
  }

  close() {
    this.toggle.blur();
  }

  isOpen() {
    if (this.list.classList.contains(this.options.openClass)) {
      return true;
    } else {
      return false;
    }
  }

  dropdown(id) {
    let elem = this.options.data.find((el) => el.id == id);

    if (elem) {
      this.input.value = elem.id;
      this.toggle.textContent = elem.value;
      return true;
    }
    return false;
  }

  destroy() {
    this.$el.remove();
  }
}
