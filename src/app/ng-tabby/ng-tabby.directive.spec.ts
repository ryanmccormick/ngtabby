import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { NgTabbyDirective } from './ng-tabby.directive';
import { NGTDEFAULTS } from './shared/ng-tabby.settings';

/**
 * Directive Mock test component.
 */
@Component({
  template: `
    <div>
      <form ngTabby>
        <input type="text" id="firstName" name="firstName" class="ngt-control" />
        <input type="text" id="lastName" name="lastName" class="ngt-control" />
        <input type="text" id="phoneNumber" name="phoneNumber" class="ngt-control" />
        <input type="text" id="email" name="email" class="ngt-control" />
        <input type="text" id="notTabbed" name="notTabbed" />
      </form>
    </div>`
})
export class TestNgTabbyComponent { }

describe('NgTabbyDirective', () => {
  let component: TestNgTabbyComponent;
  let fixture: ComponentFixture<TestNgTabbyComponent>;
  let formEl: DebugElement;
  let ngTabbyInstance: NgTabbyDirective;

  const defaultSettings = NGTDEFAULTS;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestNgTabbyComponent, NgTabbyDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgTabbyComponent);
    component = fixture.componentInstance;
    formEl = fixture.debugElement.query(By.css('form'));
    ngTabbyInstance = formEl.injector.get(NgTabbyDirective);

    fixture.detectChanges();
  });

  describe('marked controls', () => {

    it('should find four controls that are ready for tabindex markings', () => {
      const controlClassSelector = `.${defaultSettings.controlClassName}`;
      const controlList = formEl.queryAll(By.css(controlClassSelector));

      expect(controlList.length).toEqual(4);
    });

    it('should add the tabindex attribute to all four of the marked controls', () => {
      const controlClassSelector = `.${defaultSettings.controlClassName}`;
      const controlList = formEl.queryAll(By.css(controlClassSelector));

      const controlOne = controlList[0].nativeElement.getAttribute('tabindex');
      const controlTwo = controlList[1].nativeElement.getAttribute('tabindex');
      const controlThree = controlList[2].nativeElement.getAttribute('tabindex');
      const controlFour = controlList[3].nativeElement.getAttribute('tabindex');

      expect(controlOne).toEqual('1', 'tabindex not properly set');
      expect(controlTwo).toEqual('2', 'tabindex not properly set');
      expect(controlThree).toEqual('3', 'tabindex not properly set');
      expect(controlFour).toEqual('4', 'tabindex not properly set');
    });

  });

});
