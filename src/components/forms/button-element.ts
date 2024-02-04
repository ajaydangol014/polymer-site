import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('button-element')
class ButtonElement extends LitElement {
  static override styles = css`
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

  @property()
  name = 'Create';

  override render() {
    return html`<button class="btn">${this.name}</button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'button-element': ButtonElement;
  }
}
