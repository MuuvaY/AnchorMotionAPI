class AnchorBtn extends HTMLElement {
  static get observedAttributes() {
    return ["position"];
  }
  connectedCallback() {
    this.render();
  }

  render() {
    const formats = [
      "left top",
      "left",
      "left bottom",
      "bottom center",
      "right top",
      "right",
      "right bottom",
      "top center",
    ];

    const buttonContainer = document.createElement("div");
    const anchorblocks = document.querySelectorAll(".tooltip");
    const anchorcode = document.querySelector("anchor-code");
    buttonContainer.id = "buttons-container1";

    formats.forEach((format) => {
      const button = document.createElement("button");
      button.textContent = `Position: ${format}`;
      button.className = "anchor-btn";
      button.addEventListener("click", () => {
        anchorblocks.forEach((block) => {
          // 1. Vérifiez l'attribut data-position au lieu de style.positionArea
          if (block.getAttribute("data-position") === format) {
            anchorcode.setAttribute("position", format);
            block.classList.add("ouvert");
            block.classList.remove("ferme");
          } else {
            // 2. Corrigez la faute de frappe "sclae" en "scale"
            block.classList.add("ferme");
            block.classList.remove("ouvert");
          }
        });
      });
      buttonContainer.appendChild(button);
    });

    this.appendChild(buttonContainer);
  }
}

customElements.define("anchor-btn", AnchorBtn);
