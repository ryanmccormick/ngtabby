import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgTabbyDirective } from './ng-tabby.directive';

export const ngTabbyComponents = [NgTabbyDirective];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ngTabbyComponents],
  declarations: [ngTabbyComponents]
})
export class NgTabbyModule { }
