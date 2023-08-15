import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {AddProductComponent} from "./product/add/add-product.component";

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: 'add',
        component: AddProductComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'product'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
