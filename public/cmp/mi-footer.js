class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 Julio Edgar Ortega Astudillo. <small> {Ml}HamEdGar </small>`;
    }
}
customElements.define("mi-footer", MiFooter);