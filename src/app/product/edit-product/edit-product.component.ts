import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";
import {IProduct} from "../model/product.model";
import {RouterService} from "../service/router-service";
import {AlertState} from "../../shared/alert/state.enum";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  public editProductForm: FormGroup;
  protected readonly AlertState = AlertState;
  public successMessage: string = ''
  public errorMessage: string = ''


  constructor(private productService: ProductService, private routerService: RouterService) {
    const product: IProduct = this.routerService.getQueryParams().product;
    this.editProductForm = new FormGroup({
      id: new FormControl(product.id),
      name: new FormControl(product.name),
      description: new FormControl(product.description),
      quantity: new FormControl(product.productQuantity),
      unitPrice: new FormControl(product.unitPrice)
    });
  }


  public editProduct(){
    const productToSave = this.editProductForm.getRawValue();

    this.productService.editProduct(productToSave).subscribe({ next:(data) => {
      console.log('product saved', data);
      this.successMessage = 'Product Successfully updated';
      }, error: (err) => {
      console.error('An error occurred while updating', err);
      this.errorMessage = 'An error occurred while updating the product, please try again.';
      }
    })
  }

  onSubmit() {
    console.log(this.editProductForm.getRawValue());
    const formValue: IProduct = this.editProductForm.getRawValue();

    this.productService.editProduct(formValue)
      .subscribe({
        next: () => {
          this.routerService.navigate('/product/edit', formValue);
        }
      });
  }

}
