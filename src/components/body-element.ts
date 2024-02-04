import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators/custom-element.js';
import './cards/cards-element';
import './cards/description-card-element';

@customElement('body-element')
class BodyElement extends LitElement {
  static override styles = css`
    .card-wrapper {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }
  `;

  override render() {
    return html`
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
}

declare global {
  interface HTMLElementTagNameMap {
    'body-element': BodyElement;
  }
}
