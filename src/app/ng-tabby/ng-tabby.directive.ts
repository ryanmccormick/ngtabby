import { AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

import { NgTabbyUtilities } from './shared/ng-tabby.utilities';
import { NgTabbySettings } from './shared/ng-tabby-settings.model';
import { NGTDEFAULTS } from './shared/ng-tabby.settings';

/**
 * NgTabbyDirective helps you add a sequential tab index to all of your controls
 * without having to lookup the previous tabindex or spend time tracking them. Either
 * add the default classname '.ngt-control' or change to work with a framework default class
 * like bootstrap '.form-control' via the settings object.
 */
@Directive({
  selector: '[ngTabby]'
})
export class NgTabbyDirective implements OnInit, AfterViewInit {

  /**
   * Current Settings. Defaults are set by the constructor.
   */
  private _ngTabby: NgTabbySettings;

  /**
   * NgTabbyDirective helps you add a sequential tab index to all of your controls
   * without having to lookup the previous tabindex or spend time tracking them. Either
   * add the default classname '.ngt-control' or change to work with a framework default class
   * like bootstrap '.form-control' via the settings object.
   * @param {ElementRef} el Form host element (Dependency Injection).
   * @param {Renderer2} renderer Angular renderer (Dependency Injection).
   */
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.ngTabby = NGTDEFAULTS;
  }

  /**
   * Angular Lifecycle Method. Enforced by interface OnInit.
   */
  ngOnInit(): void {
    console.log('ngTabby is Active!');
  }

  /**
   * Angular Lifecycle Method. Enforced by interface AfterViewInit.
   */
  ngAfterViewInit(): void {
    NgTabbyUtilities.markControls(this.el.nativeElement, this.renderer, this.ngTabby);
  }

  /**
   * Getter for NgTabby Settings.
   * @returns {NgTabbySettings}
   */
  get ngTabby(): NgTabbySettings {
    return this._ngTabby;
  }

  /**
   * Setter for NgTabby Settings.
   * @param {NgTabbySettings} value
   */
  @Input()
  set ngTabby(value: NgTabbySettings) {
    this.setNgTabby(value);
  }

  /**
   * NgTabby Settings Setter implementation.
   * @param {NgTabbySettings} value
   */
  setNgTabby(value: NgTabbySettings): void {
    const settings = Object.assign({}, NGTDEFAULTS, value);
    this._ngTabby = settings;
  }


}
