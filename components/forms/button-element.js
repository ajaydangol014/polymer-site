var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let ButtonElement = class ButtonElement extends LitElement {
    constructor() {
        super(...arguments);
        this.name = 'Create';
    }
    render() {
        return html `<button class="btn">${this.name}</button>`;
    }
};
ButtonElement.styles = css `
    .btn {
      padding: 8px 16px;
      border-radius: 4px;
      color: black;
      display: block;
      background: white;
      font-size: 14px;
      font-weight: 500;
      outline: none;
      border: none;
      cursor: pointer;
    }
  `;
__decorate([
    property()
], ButtonElement.prototype, "name", void 0);
ButtonElement = __decorate([
    customElement('button-element')
], ButtonElement);
//# sourceMappingURL=button-element.js.map