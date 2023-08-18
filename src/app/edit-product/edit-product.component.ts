import { Component } from '@angular/core';
import {RouterService} from "../service/router.service";
import {FormControl, FormGroup} from "@angular/forms";
import {IProduct} from "../product/model/product.model";
import {ProductService} from "../product/service/product.service";
import {AlertState} from "../shared/alert/state.enum";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  public message: string = ''

  protected readonly AlertState = AlertState;
  public successMessage: string = '';
  public errorMessage: string = '';

  public editProductForm: FormGroup;
  constructor(private productService: ProductService, private routerService: RouterService) {
    const product: IProduct = this.routerService.getQueryParams().product;

    this.editProductForm = new FormGroup<any>({
      id: new FormControl(product.id),
      name: new FormControl(product.name),
      description: new FormControl(product.description),
      productQuantity: new FormControl(product.productQuantity),
      unitPrice: new FormControl(product.unitPrice)
    })
  }

  public editProduct(){
    const productToSave = this.editProductForm.getRawValue();

    this.productService.editProduct(productToSave)
      .subscribe({next: (data) =>{
        console.log('Product successfully updated: ', data);

        this.successMessage = 'Product successfully updated!';
    }, error: (err)=>{
        this.errorMessage = 'An error occurred while updating the product details';
    }});


  }

  onSubmit(){
    console.log(this.editProductForm.getRawValue());
    const formValue: IProduct = this.editProductForm.getRawValue();

    this.productService.editProduct(formValue)
      .subscribe({
        next:() => {
          this.routerService.navigate('/product/edit', formValue);
    }});
  }
}
