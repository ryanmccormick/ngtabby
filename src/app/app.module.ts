import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SandboxModule } from './sandbox/sandbox.module';
import { AppComponent } from './app.component';
import { NgTabbyModule } from 'ng-tabby';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgTabbyModule,
    SandboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
