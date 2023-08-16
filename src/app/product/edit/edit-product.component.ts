import { Component } from '@angular/core';
import {IProduct} from "../model/product.model";
import {ProductService} from "../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {RouterService} from "../service/router.service";
import {AlertState} from "../../shared/alert/state.enum";

@Component({
  selector: 'app-edit',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  protected readonly alertState = AlertState
  addProductForm: FormGroup
  public successMessage: any = ''
  public errorMessage: any = ''

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

  onSubmit() {
    const productToSave = this.addProductForm.getRawValue();
    this.productService.updateProduct(productToSave).subscribe({next: (data) => {
        console.log('Product updated successfully:', data);
        //this.routerService.navigate(['/product']);
        this.successMessage = 'Updated Successfully'
      }, error: (err) => {
      this.errorMessage = 'An error occurred'
      }
    });
  }
}
