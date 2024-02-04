var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import './forms/button-element';
let HeaderElement = class HeaderElement extends LitElement {
    render() {
        return html `
      <div class="navbar">
        <div class="navbar__wrapper">
          <div class="navbar__brand">
            <img
              src="https://lftechnology.atlassian.net/wiki/download/attachments/360449/atl.site.logo?version=5&modificationDate=1696916453679&cacheVersion=1&api=v2"
              alt="Logo"
              width="144"
              height="27"
            />
          </div>
          <div class="navbar__item">
            <a class="navbar__link" href="#"> Home </a>
            <a class="navbar__link" href="#"> Recents </a>
            <a class="navbar__link" href="#"> Spaces </a>
            <a class="navbar__link" href="#"> Teams </a>
            <a class="navbar__link" href="#"> App </a>
            <button-element name="Create"></button-element>
          </div>
        </div>
        <div class="navbar__content">
          <input type="search" placeholder="Search" />
          <div class="icon"></div>
          <div class="icon"></div>
          <div class="icon"></div>
        </div>
      </div>
    `;
    }
};
HeaderElement.styles = css `
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      background-color: #038e43;
      color: white;
    }

    .navbar__wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 24px;
    }

    .navbar__item {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .navbar__link {
      text-decoration: none;
      color: white;
    }

    .navbar__link:hover {
      text-decoration: underline;
    }

    .navbar__content {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
    }

    .icon {
      width: 20px;
      height: 20px;
      display: block;
      background-color: white;
      border-radius: 100%;
    }
  `;
HeaderElement = __decorate([
    customElement('header-element')
], HeaderElement);
//# sourceMappingURL=header-element.js.map