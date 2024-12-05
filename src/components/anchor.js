class Anchor extends HTMLElement {
  connectedCallback() {
    console.log("coucou");
    this.render();
  }

  render() {
    const format = this.getAttribute("format");
    this.innerHTML = /* HTML */ `
      <div class="container-block">
        <button id="anchor-btn"></button>
        <div class="tooltip top">Position de l'élément</div>
      </div>
    `;
  }
}

customElements.define("anchor-def", Anchor);
