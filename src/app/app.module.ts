import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgTabbyModule } from './ng-tabby/ng-tabby.module';
import { SandboxModule } from './sandbox/sandbox.module';
import { AppComponent } from './app.component';

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
