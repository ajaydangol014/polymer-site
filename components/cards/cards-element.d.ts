import { LitElement } from 'lit';
declare class CardsElement extends LitElement {
    static styles: import("lit").CSSResult;
    title: string;
    brand: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'cards-element': CardsElement;
    }
}
export {};
//# sourceMappingURL=cards-element.d.ts.map