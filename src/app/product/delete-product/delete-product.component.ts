import { Component } from '@angular/core';
import {ProductService} from "../service/product.service";
import {RouterService} from "../service/router-service";
import {IProduct} from "../model/product.model";
import {FormControl, FormGroup} from "@angular/forms";
import {AlertState} from "../../shared/alert/state.enum";


@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {

  public deleteProductForm: FormGroup;
  protected readonly AlertState = AlertState;
  public successMessage: string = ''
  public errorMessage: string = ''




  constructor(private productService: ProductService, private routerService: RouterService) {
    const product: IProduct = this.routerService.getQueryParams().product;
    this.deleteProductForm = new FormGroup({
      id: new FormControl(product.id),
      name: new FormControl(product.name),
      description: new FormControl(product.description),
      quantity: new FormControl(product.productQuantity),
      unitPrice: new FormControl(product.unitPrice)
    });
  }

  public deleteProduct() {
    const id = this.deleteProductForm.get('id')?.value;
    if (id !== null) {
      this.productService.deleteProduct(id).subscribe({
        next: (data) => {
          console.log('Product deleted', data);
          this.successMessage = 'Product successfully deleted';
        },
        error: (err) => {
        console.error('An error occurred while deleting', err);
        this.errorMessage = 'An error occurred while deleting the product, please try again.';
      }
      });
    }
  }

}
