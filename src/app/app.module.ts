import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './user/product-list/product-list.component';
import { CartComponent } from './user/cart/cart.component';
import {ViewProductComponent} from "./admin/products/view-product/view-product.component";
import {EditProductComponent} from "./admin/products/edit-product/edit-product.component";
import {ProductsComponent} from "./admin/products/products.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    ProductsComponent,
    ViewProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
