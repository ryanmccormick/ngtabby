import { NgTabbyDirective } from './ng-tabby.directive';
import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestNgTabbyComponent, NgTabbyDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgTabbyComponent);
    component = fixture.componentInstance;
    formEl = fixture.debugElement.query(By.css('ngTabby'));
    ngTabbyInstance = formEl.injector.get(NgTabbyDirective);

    fixture.detectChanges();
  });







});
