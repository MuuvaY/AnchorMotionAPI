class AnchorBtn extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const formats = [
      "left-top",
      "left",
      "left-bottom",
      "bottom-center",
      "right-top",
      "right",
      "right-bottom",
      "top-center",
    ];

    const buttonContainer = document.createElement("div");
    buttonContainer.id = "buttons-container";

    formats.forEach((format) => {
      const button = document.createElement("button");
      button.textContent = `Position: ${format}`;
      button.className = "anchor-btn";
      button.addEventListener("click", () => {
        const anchor = document.querySelector("anchor-def");
        anchor.setAttribute("format", format);
      });
      buttonContainer.appendChild(button);
    });

    this.appendChild(buttonContainer);
  }
}

customElements.define("anchor-btn", AnchorBtn);

