import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {IProduct} from "../product/model/product.model";
import {ProductService} from "../product/service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  public addProductForm: FormGroup;
  constructor(private productService: ProductService, private router: Router) {
    this.addProductForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      productQuantity: new FormControl (''),
      unitPrice: new FormControl(''),
    });
  }

  public onSubmit(){
    console.log(this.addProductForm.getRawValue());
    const formValue: IProduct = this.addProductForm.getRawValue();

    this.productService.saveProduct(formValue)
      .subscribe({next: () => {
        this.router.navigate(['/product']);
        }})
  }
}
