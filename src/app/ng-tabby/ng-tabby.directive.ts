import { AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

export class NgTabbySettings {
  activateFirstTabOnInit?: boolean;
  tabindexStart?: number;
  controlClassName?: string;
}

export const NGTDEFAULTS: NgTabbySettings = {
  activateFirstTabOnInit: false,
  tabindexStart: 1,
  controlClassName: 'ngt-control'
};

@Directive({
  selector: '[ngTabby]'
})
export class NgTabbyDirective implements OnInit, AfterViewInit {

  private _ngTabby: NgTabbySettings;

  constructor(private el: ElementRef, renderer: Renderer2) {
    this.ngTabby = NGTDEFAULTS;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
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
