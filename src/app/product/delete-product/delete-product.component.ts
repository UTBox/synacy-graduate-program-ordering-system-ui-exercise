import { Component } from '@angular/core';
import {ProductService} from "../service/product.service";
import {IProduct} from "../model/product.model";
import {RouterService} from "../service/router.service";
import {FormControl, FormGroup} from "@angular/forms";
import {AlertState} from "../../shared/alert/state.enum";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {

  protected readonly AlertState = AlertState;
  public successMessage: string = '';
  public errorMessage: string = '';
  constructor(private productService: ProductService, private routerService: RouterService) {

  }

  public deleteProduct() {
    this.productService.deleteProduct(this.routerService.getQueryParams().product.id)
      .subscribe({next: (data) => {
          console.log('Product Delete')
          this.errorMessage = ''
          this.successMessage = "Product Successfully DELETED!"
      }, error: (err) => {
        console.log(err);
          this.successMessage = ''
          this.errorMessage = "An Error occurred when updating!"
        }
      })
  }
}
