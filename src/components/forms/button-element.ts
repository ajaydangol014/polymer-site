import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '@material/mwc-icon';

@customElement('button-element')
class ButtonElement extends LitElement {
  static override styles = css`
    .btn {
      padding: 8px 16px;
      border-radius: 4px;
      color: black;
      display: flex;
      align-items: center;
      font-family: 'Inter', sans-serif;
      background: white;
      font-size: 16px;
      font-weight: 600;
      outline: none;
      border: none;
      cursor: pointer;
    }

    .btn:hover {
      background-color: #d3d3d3eb;
    }
  `;

  @property()
  name = 'Create';

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @property()
  iconName: string = 'plus';

  override render() {
    return html`<button class="btn">
      <mwc-icon>${this.iconName}</mwc-icon>
      <span> ${this.name}</span>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'button-element': ButtonElement;
  }
}
