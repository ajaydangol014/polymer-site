/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import './components/header-element';
import './components/sidebar-element';
import './components/body-element';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  static override styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .container {
      width: 90%;
      margin: 0 auto;
    }

    .body-wrapper {
      display: flex;
      margin: 20px 0;
      gap: 24px;
      width: 100%;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

  override render() {
    return html`
      <header-element></header-element>
      <div class="container">
        <slot></slot>
        <div class="body-wrapper">
          <sidebar-element></sidebar-element>
          <body-element></body-element>
        </div>
      </div>
    `;
  }

  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
  sayHello(name: string): string {
    return `Hello, ${name}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
