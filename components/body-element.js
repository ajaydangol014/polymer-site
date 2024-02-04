var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import './cards/cards-element';
import './cards/description-card-element';
let BodyElement = class BodyElement extends LitElement {
    render() {
        return html `
      <div class="body-content">
        <p>PICK UP WHERE YOU LEFT OFF</p>

        <div class="card-wrapper">
          <cards-element title="Online Accounting Course"></cards-element>
          <cards-element title="Teams/Pods" brand="Leapfrog"></cards-element>
          <cards-element
            title="Leapfrog Worklog Guidelines"
            brand="Leapfrog"
          ></cards-element>
          <cards-element
            title="Extension must have"
            brand="Vyaguta"
          ></cards-element>
          <cards-element
            title="Self Reflection"
            brand="Leapfrog"
          ></cards-element>
          <cards-element title="Ask for help!" brand="Leapfrog"></cards-element>
        </div>

        <p>DISCOVER WHAT'S HAPPENING</p>

        <description-card-element
          editorName="Sabnam Buddhacharya"
          title="Leapfrog Worklog Guidelinessss"
        ></description-card-element>
        <description-card-element
          editorName="Sabina Maharjan"
          title="Designer Guidelines"
        ></description-card-element>
        <description-card-element
          editorName="Ajay Dangol"
          title="Development Guidelines"
        ></description-card-element>
        <description-card-element
          editorName="Urusha Chapagain"
          title="QA Guidelines"
        ></description-card-element>
        <description-card-element
          editorName="Philips Raj Panday"
          title="Devops Guidelines"
        ></description-card-element>
      </div>
    `;
    }
};
BodyElement.styles = css `
    .card-wrapper {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }
  `;
BodyElement = __decorate([
    customElement('body-element')
], BodyElement);
//# sourceMappingURL=body-element.js.map