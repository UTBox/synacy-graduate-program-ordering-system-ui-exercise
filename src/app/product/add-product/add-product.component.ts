import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {IProduct} from "../model/product.model";
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  public addProductForm: FormGroup;

  constructor(private productService: ProductService, private router: Router) {
    this.addProductForm = new FormGroup<any>({
      name: new FormControl(''),
      description: new FormControl(''),
      unitPrice: new FormControl(0),
      unitQuantity: new FormControl(0),
    })
  }

  public onSubmit() {
    console.log(this.addProductForm.getRawValue());
    const formValue:IProduct = this.addProductForm.getRawValue()

    this.productService.saveProduct(formValue)
      .subscribe({next: () => {
          this.router.navigate(['/product']);
        }});
  }
}
