import {Component, Input} from '@angular/core';
import {AlertState} from "../../shared/alert/state.enum";
import {ProductService} from "../service/product.service";
import {RouterService} from "../service/router.service";
import {IProduct} from "../model/product.model";

@Component({
  selector: 'app-delete',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {

  @Input() isShow: any = true;

  @Input() state: AlertState = AlertState.INFO;

  public productParams: IProduct;

  constructor(private productService: ProductService, private routerService: RouterService) {
    this.productParams = routerService.getQueryParams().product;
  }

  // public cancelDelete() {
  //   window.location.reload();
  // }

  public deleteProduct() {
    console.log('deleting');

    this.productService.deleteProduct(this.productParams)
      .subscribe({
        next: (data) => {
          console.log('successfully deleted', data)
          this.routerService.navigate('/product')
        },
        error: (err) => {
          console.log('delete error', err)
        }
      });
  }
}
