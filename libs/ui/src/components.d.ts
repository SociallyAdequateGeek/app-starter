/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
/* tslint:disable */

import '@stencil/core';




declare global {
  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}

  namespace StencilComponents {

    interface UiAvatar {
      'chip': boolean;
      'height': string;
      'src': string;
      'width': string;
    }

    interface UiThumbnail {
      'src': string;
    }

    interface UiButton {
      'active': boolean;
      'type': string;
    }

    interface UiHeading {
      'large': boolean;
      'medium': boolean;
      'small': boolean;
      'xlarge': boolean;
      'xsmall': boolean;
    }

    interface UiText {
      'bold': any;
      'italic': any;
      'large': any;
      'semibold': any;
      'small': any;
    }
  }


    interface HTMLUiAvatarElement extends StencilComponents.UiAvatar, HTMLStencilElement {}

    var HTMLUiAvatarElement: {
      prototype: HTMLUiAvatarElement;
      new (): HTMLUiAvatarElement;
    };
    

    interface HTMLUiThumbnailElement extends StencilComponents.UiThumbnail, HTMLStencilElement {}

    var HTMLUiThumbnailElement: {
      prototype: HTMLUiThumbnailElement;
      new (): HTMLUiThumbnailElement;
    };
    

    interface HTMLUiButtonElement extends StencilComponents.UiButton, HTMLStencilElement {}

    var HTMLUiButtonElement: {
      prototype: HTMLUiButtonElement;
      new (): HTMLUiButtonElement;
    };
    

    interface HTMLUiHeadingElement extends StencilComponents.UiHeading, HTMLStencilElement {}

    var HTMLUiHeadingElement: {
      prototype: HTMLUiHeadingElement;
      new (): HTMLUiHeadingElement;
    };
    

    interface HTMLUiTextElement extends StencilComponents.UiText, HTMLStencilElement {}

    var HTMLUiTextElement: {
      prototype: HTMLUiTextElement;
      new (): HTMLUiTextElement;
    };
    

  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {
    'ui-avatar': JSXElements.UiAvatarAttributes;
    'ui-thumbnail': JSXElements.UiThumbnailAttributes;
    'ui-button': JSXElements.UiButtonAttributes;
    'ui-heading': JSXElements.UiHeadingAttributes;
    'ui-text': JSXElements.UiTextAttributes;
    }
  }

  namespace JSXElements {

    export interface UiAvatarAttributes extends HTMLAttributes {
      'chip'?: boolean;
      'height'?: string;
      'src'?: string;
      'width'?: string;
    }

    export interface UiThumbnailAttributes extends HTMLAttributes {
      'src'?: string;
    }

    export interface UiButtonAttributes extends HTMLAttributes {
      'active'?: boolean;
      'type'?: string;
    }

    export interface UiHeadingAttributes extends HTMLAttributes {
      'large'?: boolean;
      'medium'?: boolean;
      'small'?: boolean;
      'xlarge'?: boolean;
      'xsmall'?: boolean;
    }

    export interface UiTextAttributes extends HTMLAttributes {
      'bold'?: any;
      'italic'?: any;
      'large'?: any;
      'semibold'?: any;
      'small'?: any;
    }
  }

  interface HTMLElementTagNameMap {
    'ui-avatar': HTMLUiAvatarElement
    'ui-thumbnail': HTMLUiThumbnailElement
    'ui-button': HTMLUiButtonElement
    'ui-heading': HTMLUiHeadingElement
    'ui-text': HTMLUiTextElement
  }

  interface ElementTagNameMap {
    'ui-avatar': HTMLUiAvatarElement;
    'ui-thumbnail': HTMLUiThumbnailElement;
    'ui-button': HTMLUiButtonElement;
    'ui-heading': HTMLUiHeadingElement;
    'ui-text': HTMLUiTextElement;
  }
}
declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;