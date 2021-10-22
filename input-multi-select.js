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
    this.map = map;
    if (this.getAttribute("options")) {
      this.map = JSON.parse(this.getAttribute("options"));
    }
    /*
    this.style.display = "grid";
    this.style.gridTemplateColumns = "1fr";
    this.style.rowGap = "0.2em";
    */
    this.addRow();
  }
  addRow(val) {
    const map = this.map;
    const sel = create("select", this);
    const opt = create("option", sel);
    opt.textContent = "-";
    opt.value = "";
    for (const name in map) {
      const opt = create("option", sel);
      opt.textContent = name;
      opt.value = map[name];
    }
    if (val) {
      sel.value = val;
    }
    sel.onchange = () => {
      if (sel.value == "") {
        if (this.childNodes.length > 1) {
          this.removeChild(sel);
        }
      } else {
        if (sel == this.childNodes[this.childNodes.length - 1]) {
          this.addRow();
        }
      }
      //this.change();
    };
  };
/*
  change() {
    if (this.onchange) {
      this.onchange();
    }
  }
  */
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
  set value(values) {
    this.innerHTML = "";
    for (const value of values) {
      this.addRow(value);
    }
    this.addRow();
  }
}

customElements.define("input-multi-select", InputMultiSelect);

export { InputMultiSelect };
