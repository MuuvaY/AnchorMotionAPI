class AnchorBtn extends HTMLElement {
  connectedCallBack() {
    this.render();
  }

  render() {}
}

customElements.define("anchor-btn", AnchorBtn);
