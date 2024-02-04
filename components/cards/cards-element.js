var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let CardsElement = class CardsElement extends LitElement {
    constructor() {
        super(...arguments);
        this.title = 'Leapfrog';
        this.brand = 'Leapfrog';
    }
    render() {
        return html `
      <div class="card">
        <div class="card__content">
          <div class="card__icon"></div>
          <div class="card__title">
            <p>${this.title}</p>
            <p class="card__small-text">${this.brand}</p>
          </div>
        </div>
        <span class="card__small-text">Visited December 14,2014</span>
      </div>
    `;
    }
};
CardsElement.styles = css `
    .card {
      border: 1px solid #091e4224;
      background: white;
      padding: 12px;
      width: 424px;
      border-radius: 4px;
    }

    .card__icon {
      width: 18px;
      height: 18px;
      display: block;
      background-color: black;
      border-radius: 50%;
    }

    .card__content {
      display: flex;
      justify-content: flex-start;
      gap: 10px;
      align-items: baseline;
    }

    .card__title p:first-child {
      font-weight: 600;
      font-size: 16px;
    }

    .card__small-text {
      font-size: 10px;
      line-height: normal;
      font-weight: 300;
    }
  `;
__decorate([
    property()
], CardsElement.prototype, "title", void 0);
__decorate([
    property()
], CardsElement.prototype, "brand", void 0);
CardsElement = __decorate([
    customElement('cards-element')
], CardsElement);
//# sourceMappingURL=cards-element.js.map