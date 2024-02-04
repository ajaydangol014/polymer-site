var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import '@material/mwc-icon';
let SidebarElement = class SidebarElement extends LitElement {
    render() {
        return html ` <div class="sidebar">
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
};
SidebarElement.styles = css `
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
SidebarElement = __decorate([
    customElement('sidebar-element')
], SidebarElement);
//# sourceMappingURL=sidebar-element.js.map