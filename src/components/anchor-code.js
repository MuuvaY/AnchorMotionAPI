class AnchorCode extends HTMLElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return ["position", "language"];
  }
  getCodeSnippet(language) {
    const position = this.getAttribute("position") || "left top";
    const codeSnippets = {
      css1: `
.element-source {
  anchor-name: --tooltip;
}

.element-cible {
    position: absolute;
    position-anchor: --tooltip;
    position-area: ${position};
}`,
    }
    return (
      codeSnippets[language] ||
      "Aucun snippet de code trouvé pour cette langue."
    );
  };

  connectedCallback() {
    this.render();
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const language = "css1";
    const codeContent = this.getCodeSnippet(language);

    this.innerHTML = `
       
        <pre><code class="language-css">${codeContent}</code></pre>
      `;

    if (window.hljs) {
      window.hljs.highlightElement(this.querySelector("code"));
    }
  }
}

customElements.define("anchor-code", AnchorCode);
