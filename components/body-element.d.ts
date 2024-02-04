import { LitElement } from 'lit';
import './cards/cards-element';
import './cards/description-card-element';
declare class BodyElement extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'body-element': BodyElement;
    }
}
export {};
//# sourceMappingURL=body-element.d.ts.map