import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { SandboxComponent } from './sandbox.component';
import { NgTabbyModule } from 'ng-tabby';

/**
 * Shared Sandbox Components.
 * @type {SandboxComponent[]}
 */
export const sharedComponents = [SandboxComponent];

/**
 * SandboxModule main entrypoint.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgTabbyModule
  ],
  exports: [sharedComponents],
  declarations: [sharedComponents],
})
export class SandboxModule { }
