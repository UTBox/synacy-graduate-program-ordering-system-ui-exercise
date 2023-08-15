import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

import {ProductComponent} from './product/product.component';
import {AppRoutingModule} from "./app-routing.module";
import { DeviceComponent } from './device/device.component';


@NgModule({
  declarations: [
      AppComponent,
      ProductComponent,
      DeviceComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
