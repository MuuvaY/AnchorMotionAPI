class AnchorCode extends HTMLElement {
  static get observedAttributes() {
    return ["position"];
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
    const position = this.getAttribute("position") || "left top";
    this.innerHTML = /* HTML */ `<pre><code class="language-css hljs">
          .element-source {
              anchor-name: --tooltip;
          }

          .element-cible {
              position: absolute;
              position-anchor: --tooltip;
              position-area: ${position};
          }

    </pre></code>`;
  }
}

customElements.define("anchor-code", AnchorCode);
