import { LitElement } from 'lit';
declare class ButtonElement extends LitElement {
    static styles: import("lit").CSSResult;
    name: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'button-element': ButtonElement;
    }
}
export {};
//# sourceMappingURL=button-element.d.ts.map