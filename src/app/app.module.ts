import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from "@angular/common/http";
import { ButtonComponent } from './shared/button/button.component';
import { AddProductComponent } from './add-product/add-product.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EditProductComponent } from './edit-product/edit-product.component';
import { AlertComponent } from './shared/alert/alert.component';
import {DeleteProductComponent} from "./delete-product/delete-product.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ButtonComponent,
    AddProductComponent,
    EditProductComponent,
    AlertComponent,
    DeleteProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
