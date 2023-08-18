import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {DeleteProductComponent} from "./delete-product/delete-product.component";

const routes: Routes = [
  {
    path: 'product',
    children: [
      {path: '', component: ProductComponent},
      {path: 'add', component: AddProductComponent},
      {path: 'edit', component: EditProductComponent},
      {path: 'delete', component: DeleteProductComponent}
    ]
  },
  { path: '**', redirectTo: 'product'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
