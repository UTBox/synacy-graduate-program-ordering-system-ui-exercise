import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {ProductListComponent} from "./user/product-list/product-list.component";
import {CartComponent} from "./user/cart/cart.component";
import {ProductsComponent} from "./admin/products/products.component";
import {ViewProductComponent} from "./admin/products/view-product/view-product.component";
import {EditProductComponent} from "./admin/products/edit-product/edit-product.component";

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'admin',
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'products/:productId', component: ViewProductComponent
      },
      {
        path: 'products/:productId/edit', component: EditProductComponent
      }
    ]
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
