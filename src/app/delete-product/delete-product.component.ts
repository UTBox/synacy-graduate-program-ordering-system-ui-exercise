import { Component } from '@angular/core';
import {IProduct} from "../product/model/product.model";
import {ProductService} from "../product/service/product.service";
import {RouterService} from "../service/router.service";
import {FormControl, FormGroup} from "@angular/forms";
import {AlertState} from "../shared/alert/state.enum";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {

  protected readonly AlertState = AlertState;
  public successMessage: string = '';
  public errorMessage: string = '';

  public productId: number;

  constructor(private productService: ProductService, private routerService: RouterService) {
    this.productId = this.routerService.getQueryParams().id;

  }

  public deleteProduct(){

    this.productService.deleteProduct(this.productId)
      .subscribe({next: (data) =>{
          console.log('Product successfully updated: ', data);

          this.successMessage = 'Product successfully deleted!';
        }, error: (err)=>{
          this.errorMessage = 'An error occurred while deleting the product';
        }});
  }

}
