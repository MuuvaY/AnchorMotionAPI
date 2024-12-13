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
    const top = this.getAttribute("top") || "top";
    const left = this.getAttribute("left") || "start";

    if (this.blockcode) {
      this.blockcode.querySelector("code").textContent = `
        .element-source {
            anchor-name: --tooltip;
        }
        .element-cible {
            position: absolute;
            top: anchor(--tooltip ${top});
            left: anchor(--tooltip ${left});
        }
            `;
    }

    if (this.blockdemo) {
      this.blockdemo.innerHTML = /* HTML */ ` <div class="container-blockdemo1">
        <button id="element-source" style="anchor-name: --tooltip;">
          Ancre
        </button>
        <div
          class="element-cible"
          style="position: absolute; top: anchor(--tooltip ${top}); left: anchor(--tooltip ${left});"
        >
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
    this.buttonContainer.id = "buttons-container";
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
    const preElement = document.createElement("pre");
    const codeElement = document.createElement("code");
    preElement.className = "code-example";
    codeElement.className = "language-css";
    preElement.appendChild(codeElement);
    this.blockcode = preElement;

    this.appendChild(preElement);
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
