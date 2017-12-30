import { Renderer2 } from '@angular/core';

import { NgTabbySettings } from './ng-tabby-settings.model';

/**
 * NgTabbyUtilities is a collection of static utilities that directly
 * support methods invoked by the NgTabbyDirective.
 */
export class NgTabbyUtilities {

  /**
   * Add tabindex attribute to marked controls.
   * @param {HTMLElement} element Host Parent Element.
   * @param {Renderer2} renderer Directive Angular Renderer (via DI).
   * @param {NgTabbySettings} settings Directive Settings.
   */
  public static markControls(element: HTMLElement, renderer: Renderer2, settings: NgTabbySettings): void {
    try {
      const controlClassSelector = settings.controlClassName;
      const controlList = element.getElementsByClassName(controlClassSelector);

      if (controlList !== null) {
        for (let i = 0, x = controlList.length; i < x; i++) {
          const controlEl = controlList[i];
          const tabindexStr = (settings.tabindexStart + i).toString();
          renderer.setAttribute(controlEl, 'tabindex', tabindexStr);
        }
      }
    } catch (exception) {
      NgTabbyUtilities.logErrorDebug(exception, settings);
    }
  }

  /**
   * Handle logging of errors based on 'showErrorDebug' flag of settings.
   * When set to false, all errors will be ignored.
   * @param exception Catch block generated exception.
   * @param {NgTabbySettings} settings Directive Settings.
   */
  public static logErrorDebug(exception: any, settings: NgTabbySettings): void {
    if (settings.showErrorDebug) {
      console.error(exception);
    }
  }

}
