import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators/custom-element.js';
import '@material/mwc-icon';

@customElement('sidebar-element')
class SidebarElement extends LitElement {
  static override styles = css`
    .sidebar {
      width: 300px;
    }
    .sidebar__item {
      text-decoration: none;
      color: black;
      font-size: 16px;
      display: block;
      border-radius: 4px;
      padding: 16px 8px;
    }

    .sidebar__item:hover {
      background: #cce0ff;
    }
  `;

  override render() {
    return html` <div class="sidebar">
      <div class="sidebar__menu">
        <a class="sidebar__item" href="#">Overview </a>
        <a class="sidebar__item" href="#"> Recent </a>
        <a class="sidebar__item" href="#"> Starred </a>
        <a class="sidebar__item" href="#"> Draft </a>
        <a class="sidebar__item" href="#"> Tasks </a>
      </div>
      <div class="sidebar__spaces"></div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sidebar-element': SidebarElement;
  }
}
