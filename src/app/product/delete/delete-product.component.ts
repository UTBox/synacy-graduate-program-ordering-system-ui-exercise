import {Component} from '@angular/core';
import {AlertState} from "../../shared/alert/state.enum";
import {ProductService} from "../service/product.service";
import {RouterService} from "../service/router.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {

  public errorMessage: any = ''
  public successMessage: any = ''
  protected readonly alertState = AlertState

  constructor(private productService: ProductService, private routerService: RouterService) {
  }

  onDelete() {
    this.productService.removeProduct(this.routerService.getQueryParams().product.id).subscribe(
      () => {
        this.successMessage = 'Product removed successfully.';
        // Perform any additional actions after successful deletion
      },
      (error) => {
        this.errorMessage = 'Failed to remove product. Please try again.';
        console.error(error);
      }
    );
  }
}
