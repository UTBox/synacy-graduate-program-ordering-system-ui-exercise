import { Component } from '@angular/core';
import {ProductRepository} from "../repository/product.repository";
import {IProduct} from "../model/product.model";
import {ProductService} from "../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {RouterService} from "../service/router.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  addProductForm: FormGroup

  constructor(private productService: ProductService, private routerService: RouterService) {
    const product: IProduct = this.routerService.getQueryParams().product
    this.addProductForm = new FormGroup<any>({
      id : new FormControl(product.id),
      name : new FormControl(product.name),
      description: new FormControl(product.description),
      quantity : new FormControl(product.quantity),
      unitPrice : new FormControl(product.unitPrice)
    })
  }

  public onSubmit() {
    const productToSave = this.addProductForm.getRawValue();
    this.productService.updateProduct(productToSave).subscribe({next: (data) => {
        console.log('Product updated successfully:', data);
        this.routerService.navigate(['/product']).then(error => {
          console.error('Error updating product:', error);});
      }});
  }
}
