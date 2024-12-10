class Anchor extends HTMLElement {

  connectedCallback() {
    this.render();
  }

  render() {
    const formats = [ 
      "left top",
      "left",
      "left bottom",
      "bottom center",
      "top center",
      "right top",
      "right",
      "right bottom"
    ];
    this.innerHTML = `
      <div class="container-block">
      <button id="anchor-btn"></button>
      ${formats.map((format) => {
        return /* HTML */ `
          <div class="tooltip ferme" style="position-area : ${format}" data-position="${format}">
          <p>Position: ${format}</p>
            
          </div>
        `;
      }).join("")}
      `;
  }

  
}

customElements.define("anchor-def", Anchor);
