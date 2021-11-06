import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CesiumMapDirective } from './cesium-map.directive';
import {CesiumService} from "./cesium.service";

@NgModule({
  declarations: [
    AppComponent,
    CesiumMapDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [CesiumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
