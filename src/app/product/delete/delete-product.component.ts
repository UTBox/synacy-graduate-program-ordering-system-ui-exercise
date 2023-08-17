import {Component, Input} from '@angular/core';
import {ProductService} from "../service/product.service";
import {RouterService} from "../service/router.service";
import {IProduct} from "../model/product.model";
import {PageState} from "../page-state.enum";

@Component({
  selector: 'app-delete',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {

  @Input() isShow: any = true;

  @Input() state: PageState = PageState.ACTIVE;

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
