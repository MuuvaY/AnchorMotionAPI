class Compatibility extends HTMLElement {
  static get observedAttributes() {
    return ["name", "version"];
  }

  connectedCallback() {
    this.render();
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const name = this.getAttribute("name");
    const version = this.getAttribute("version");

    this.innerHTML = /* HTML */ `
      <div class="browser">
        <h3>${name}</h3>
        <p>Version ${version}</p>
      </div>
    `;
  }
}

customElements.define("compatibility-section", Compatibility);
