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
      display: flex;
      gap: 8px;
      align-items: center;
      border-radius: 4px;
      padding: 16px 8px;
    }

    .sidebar__item:hover {
      background: #cce0ff;
    }

    .icon {
      width: 20px;
      height: 20px;
    }

    mwc-icon {
      vertical-align: middle;
    }
  `;

  override render() {
    return html` <div class="sidebar">
      <div class="sidebar__menu">
        <a class="sidebar__item" href="#"
          ><mwc-icon class="icon">home_outlined</mwc-icon><span>Overview</span></a>
        </a>
        <a class="sidebar__item" href="#"
          ><mwc-icon class="icon">schedule</mwc-icon><span>Recent</span></a>
        </a>
        <a class="sidebar__item" href="#"
          ><mwc-icon class="icon">star_outlined</mwc-icon><span>Starred</span></a>
        </a>
        <a class="sidebar__item" href="#"
          ><mwc-icon class="icon">description_outlined</mwc-icon><span>Draft</span></a>
        </a>
        <a class="sidebar__item" href="#"
          ><mwc-icon class="icon">checkbox_outlined</mwc-icon><span>Tasks</span></a>
        </a>
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
