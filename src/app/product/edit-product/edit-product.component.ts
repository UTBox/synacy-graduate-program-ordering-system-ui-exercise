import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";
import {IProduct} from "../model/product.model";
import {RouterService} from "../service/router.service";
import {AlertState} from "../../shared/alert/state.enum";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  protected readonly AlertState = AlertState;
  public successMessage: string = '';
  public errorMessage: string = '';
  public editProductForm: FormGroup;
  constructor(private productService: ProductService, private routerService: RouterService, private router: Router) {

    const product : IProduct = this.routerService.getQueryParams().product;

    this.editProductForm = new FormGroup<any>({
      id: new FormControl(product.id),
      name: new FormControl(product.name),
      description: new FormControl(product.description),
      unitPrice: new FormControl(product.unitPrice),
      productQuantity: new FormControl(product.productQuantity)
    })
  }

  public editProduct() {
    const productToSave = this.editProductForm.getRawValue();

    this.productService.editProduct(productToSave)
      .subscribe({next:(data) => {
        console.log('Product Updated', data);
        // this.router.navigate(['/products']);
          this.errorMessage = ''
          this.successMessage = "Product Successfully Updated!"

      }, error: (err) => {
        console.log('Error occurred when updating', err);
          this.successMessage = ''
          this.errorMessage = "An Error occurred when updating!"
    }
      })
  }
}
