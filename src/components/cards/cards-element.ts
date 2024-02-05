import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('cards-element')
class CardsElement extends LitElement {
  static override styles = css`
    p {
      margin: 0;
    }

    .card {
      border: 1px solid #091e4224;
      background: white;
      padding: 12px;
      width: 424px;
      border-radius: 4px;
    }

    .card:hover {
      background-color: rgba(0, 0, 0, 0.04);
      cursor: pointer;
    }

    .card__content {
      display: flex;
      justify-content: flex-start;
      gap: 10px;
      align-items: flex-start;
    }

    .card__title p:first-child {
      font-weight: 600;
      font-size: 16px;
    }

    .card__small-text {
      font-size: 10px;
      line-height: normal;
      font-weight: 300;
      margin: 10px 0;
    }

    .card__icon {
      color: blue;
    }
  `;

  @property()
  override title = 'Leapfrog';

  @property()
  brand = 'Leapfrog';

  @property()
  iconName = 'house';

  override render() {
    return html`
      <div class="card">
        <div class="card__content">
          <div class="card__icon">
            <mwc-icon>${this.iconName}</mwc-icon>
          </div>
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
