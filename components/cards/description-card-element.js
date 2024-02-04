var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';
let DescriptionCardElement = class DescriptionCardElement extends LitElement {
    constructor() {
        super(...arguments);
        // eslint-disable-next-line @typescript-eslint/no-inferrable-types
        this.editorName = 'Sabina Maharjan';
        // eslint-disable-next-line @typescript-eslint/no-inferrable-types
        this.title = 'Leapfrog Worklog Guideline';
    }
    render() {
        return html ` <div class="description-card">
      <div class="description-card__profile"></div>
      <div class="description-card__wrapper">
        <div class="description-card__headline">
          <span
            >${this.editorName} edited 4 times. <span>3 hours ago</span></span
          >
          <span>4 recent actions</span>
        </div>
        <div class="description-card__content">
          <div class="description-card__content-title">
            <img src="" alt="" />
            <span>${this.title}</span>
          </div>
          <span class="description-card__content-owner"
            >Owned by ${this.editorName}</span
          >
        </div>
        <p>
          Begin by selecting the area, project, guild, or pod and tasks you
          worked in during the day. Remember that sections allow you to choose
          multiple options within a single worklog if you hopped from one to the
          other. Please make sure that you choose the right option. Log in the
          summary of your work in bullet points format with time spent on each
          log.
        </p>

        <div class="description-card__reaction">
          <div class="description-card__reaction-wrapper">
            <div class="reaction-button"></div>
            <div class="reaction-button__selection"></div>
          </div>
          <div class="description-card__reaction-comment">
            <span>3 comments</span>
          </div>
        </div>
      </div>
    </div>`;
    }
};
DescriptionCardElement.styles = css `
    .description-card {
      display: flex;
      gap: 10px;
      border: 1px solid #091e4224;
      background: white;
      padding: 16px;
      border-radius: 4px;
      margin-bottom: 16px;
    }

    .description-card p {
      font-size: 14px;
      line-height: 21px;
    }

    .description-card__headline {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #091e4224;
      width: 100%;
      margin-bottom: 8px;
      font-size: 14px;
    }

    .description-card__headline span {
      padding-bottom: 8px;
    }

    .description-card__content {
      font-size: 12px;
      color: gray;
    }

    .description-card__content-title {
      color: black;
      font-size: 16px;
      margin-bottom: 8px;
      font-weight: 600;
      margin-top: 4px;
    }

    .description-card__reaction {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .description-card__reaction-comment {
      font-size: 12px;
      line-height: 21px;
    }

    .description-card__profile {
      width: 53px;
      height: 33px;
      display: block;
      border-radius: 50%;
      background-color: black;
    }
  `;
__decorate([
    property()
], DescriptionCardElement.prototype, "editorName", void 0);
__decorate([
    property()
], DescriptionCardElement.prototype, "title", void 0);
DescriptionCardElement = __decorate([
    customElement('description-card-element')
], DescriptionCardElement);
//# sourceMappingURL=description-card-element.js.map