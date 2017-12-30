import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgTabbyDirective } from './ng-tabby.directive';

/**
 * Components that are both declared and exported to be used by modules
 * that import the NgTabbyModule.
 * @type {NgTabbyDirective[]}
 */
export const ngTabbyComponents = [NgTabbyDirective];

/**
 * NgTabbyModule: Main Entrypoint for using the NgTabbyDirective.
 * This module is to be imported into any feature module that needs to use
 * the ngTabby directive functionality.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ngTabbyComponents],
  declarations: [ngTabbyComponents]
})
export class NgTabbyModule { }
