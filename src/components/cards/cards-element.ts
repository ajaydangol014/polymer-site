import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('cards-element')
class CardsElement extends LitElement {
  static override styles = css`
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

  @property()
  override title = 'Leapfrog';

  @property()
  brand = 'Leapfrog';

  override render() {
    return html`
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
}

declare global {
  interface HTMLElementTagNameMap {
    'cards-element': CardsElement;
  }
}
