import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";
import {RouterService} from "../service/router.service";
import {IProduct} from "../model/product.model";
import {AlertState} from "../../shared/alert/state.enum";

@Component({
  selector: 'app-edit',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  public editProductForm: FormGroup;
  public productParams: IProduct;

  protected readonly AlertState = AlertState;
  public message: string = '';
  public successMessage ='';
  public errorMessage = '';

  constructor(private productService: ProductService, private routerService: RouterService) {
    this.productParams = routerService.getQueryParams().product;
    console.log('qparam', this.productParams);

    this.editProductForm = new FormGroup<any>( {
      id: new FormControl(this.productParams.id),
      name: new FormControl(this.productParams.name),
      description: new FormControl(this.productParams.description),
      productQuantity: new FormControl(this.productParams.productQuantity),
      unitPrice: new FormControl(this.productParams.unitPrice)
    });
  }

  public onSubmit() {
    const formValue = this.editProductForm.getRawValue();
    console.log('submit edits', formValue);

    this.productService.editProduct(formValue)
      .subscribe({
        next: (data) => {
          console.log('update success!', data);
          this.successMessage = 'Success';
          this.errorMessage = '';
          // this.routerService.navigate('/product')
        },
        error: (err) => {
          this.successMessage = '';
          this.errorMessage = 'Failed';
          console.error('update failed!');
        }
      });
  }

}
