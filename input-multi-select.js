const create = (tag, parent) => {
  const c = document.createElement(tag);
  if (parent) {
    parent.appendChild(c);
  }
  return c;
};

class InputMultiSelect extends HTMLElement {
  constructor(map) {
    super();
    const json = this.getAttribute("options");
    if (json) {
      map = JSON.parse(json);
    }
    const addRow = () => {
      const sel = create("select", this);
      const opt = create("option", sel);
      opt.textContent = "-";
      opt.value = "";
      for (const name in map) {
        const opt = create("option", sel);
        opt.textContent = name;
        opt.value = map[name];
      }
      sel.onchange = () => {
        if (sel.value == "") {
          if (this.childNodes.length > 1) {
            this.removeChild(sel);
          }
        } else {
          if (sel == this.childNodes[this.childNodes.length - 1]) {
            addRow();
          }
        }
        this.change();
      };
    };
    addRow();
  }
  change() {
    if (this.onchange) {
      this.onchange();
    }
  }
  get value() {
    const res = [];
    for (let i = 0; i < this.childNodes.length - 1; i++) {
      const c = this.childNodes[i];
      if (c.tagName == "SELECT") {
        res.push(c.value)
      }
    }
    return res;
  }
}

customElements.define("input-multi-select", InputMultiSelect);
