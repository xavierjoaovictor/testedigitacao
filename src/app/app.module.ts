import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TeslaBatteryModule } from './tesla-battery/tesla-battery.module';
import { InterRHModule } from './interRH/interRH.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TeslaBatteryModule,
    InterRHModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
