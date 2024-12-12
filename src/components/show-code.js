class ShowCode extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["language"];
  }

  getCodeSnippet(language) {
    const codeSnippets = {
      css1: `
        .element-source {
            anchor-name: --tooltip;
        }`,
      css2: `
        .element-cible {
            position: absolute;
            position-anchor: --tooltip;
        }`,
      css3: `
        .element-cible {
            position-area: left top;
        }`,
    };

    return (
      codeSnippets[language] ||
      "Aucun snippet de code trouvé pour cette langue."
    );
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const language = this.getAttribute("language");
    const codeContent = this.getCodeSnippet(language);

    this.innerHTML = `
       
        <pre><code class="language-css">${codeContent}</code></pre>
      `;

    if (window.hljs) {
      window.hljs.highlightElement(this.querySelector("code"));
    }
  }
}

customElements.define("show-code", ShowCode);
