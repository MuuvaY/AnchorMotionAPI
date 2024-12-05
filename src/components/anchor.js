class Anchor extends HTMLElement {
  connectedCallback() {
    console.log("coucou");
  }
}

customElements.define("anchor-def", Anchor);
