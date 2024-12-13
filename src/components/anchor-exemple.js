class AnchorExemple extends HTMLElement {
  static get observedAttributes() {
    return ["top", "left"];
  }

  constructor() {
    super();
    this.blockcode = null;
    this.blockdemo = null;
    this.buttonContainer = null;
  }
  getCodeSnippet(language) {
    const top = this.getAttribute("top") || "top";
    const left = this.getAttribute("left") || "start";
    const codeSnippets = {
      css1: `
.element-source {
    anchor-name: --tooltip;
}
.element-cible {
    position: absolute;
    top: anchor(--tooltip ${top});
    left: anchor(--tooltip ${left});
}`,
    };
    return (
      codeSnippets[language] ||
      "Aucun snippet de code trouvé pour cette langue."
    );
  }

  connectedCallback() {
    this.renderButtons();
    this.renderCodeBlock();
    this.renderDemoBlock();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.updateCodeAndDemo();
    }
  }

  updateCodeAndDemo() {
    const language = "css1";
    const top = this.getAttribute("top") || "top";
    const left = this.getAttribute("left") || "start";
    const codeContent = this.getCodeSnippet(language);

    // Mise à jour du bloc de code
    if (this.blockcode) {
      this.blockcode.innerHTML = `<pre><code class="language-css">${codeContent}</code></pre>`;
    }
    if (window.hljs) {
        window.hljs.highlightElement(this.querySelector("code"));
    }

    // Mise à jour du bloc de démonstration
    if (this.blockdemo) {
      this.blockdemo.innerHTML = `
            <div class="container-blockdemo1">
                <button id="element-source" style="anchor-name: --tooltip;">Ancre</button>
                <div class="element-cible" style="position: absolute; top: anchor(--tooltip ${top}); left: anchor(--tooltip ${left});">  
                    <p>Element positionné</p>
                </div>
            </div>`;
    }
  }

  renderButtons() {
    const formats = [
      "bottom end",
      "bottom center",
      "bottom start",
      "top end",
      "top center",
      "top start",
      "center end",
      "center start",
    ];

    this.buttonContainer = document.createElement("div");
    this.buttonContainer.id = "buttons-container2";
    this.appendChild(this.buttonContainer);

    formats.forEach((format) => {
      const button = document.createElement("button");
      button.textContent = `Position: ${format}`;
      button.className = "anchor-btn";
      button.addEventListener("click", () => {
        const [top, left] = format.split(" ");
        this.setAttribute("top", top);
        this.setAttribute("left", left);
      });
      this.buttonContainer.appendChild(button);
    });
  }

  renderCodeBlock() {
    this.blockcode = document.createElement("div");
    this.blockcode.className = "code-example";
    this.appendChild(this.blockcode);
    this.updateCodeAndDemo();
  }

  renderDemoBlock() {
    this.blockdemo = document.createElement("div");
    this.blockdemo.className = "code-demo";
    this.appendChild(this.blockdemo);
    this.updateCodeAndDemo();
  }
}

customElements.define("anchor-exemple", AnchorExemple);
