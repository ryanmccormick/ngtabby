import { AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { NgTabbyUtilities } from './shared/ng-tabby.utilities';
import { NGTDEFAULTS } from './shared/ng-tabby.settings';
import { NgTabbySettings } from './shared/ng-tabby-settings.model';

@Directive({
  selector: '[ngTabby]'
})
export class NgTabbyDirective implements OnInit, AfterViewInit {

  private _ngTabby: NgTabbySettings;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.ngTabby = NGTDEFAULTS;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    NgTabbyUtilities.markControls(this.el.nativeElement, this.renderer, this.ngTabby);
  }

  get ngTabby(): NgTabbySettings {
    return this._ngTabby;
  }

  @Input()
  set ngTabby(value: NgTabbySettings) {
    this.setNgTabby(value);
  }

  setNgTabby(value: NgTabbySettings): void {
    const settings = Object.assign({}, NGTDEFAULTS, value);
    this._ngTabby = settings;
  }


}
