class Anchor extends HTMLElement {
  static get observedAttributes() {
    return ["format"];
  }

  connectedCallback() {
    console.log("coucou");
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "format" && oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    let format = this.getAttribute("format") || "left-top";

    let positionStyle = this.getPositionStyle(format);

    this.innerHTML = /* HTML */ `
      <div class="container-block">
        <button id="anchor-btn"></button>
        <div class="tooltip" style="${positionStyle}">
          Position de l'élément: ${format}
        </div>
      </div>
    `;
  }

  getPositionStyle(format) {
    switch (format) {
      case "left-top":
        return "position-area: left top;";
      case "left":
        return "position-area: left";
      case "left-bottom":
        return "position-area: left bottom";
      case "bottom-center":
        return "position-area: bottom center";
      case "top-center":
        return "position-area: top center";
      case "right-top":
        return "position-area: right top;";
      case "right":
        return "position-area: right";
      case "right-bottom":
        return "position-area: right bottom;";
      default:
        return "position-area: left;";
    }
  }
}

customElements.define("anchor-def", Anchor);
