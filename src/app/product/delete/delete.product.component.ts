import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {RouterService} from "../service/router.service";
import {IProduct} from "../model/product.model";
import {AlertState} from "../../shared/alert/state.enum";

@Component({
    selector: 'app-delete',
    templateUrl: './delete.product.component.html',
    styleUrls: ['./delete.product.component.css']
})
export class DeleteProductComponent {

    public deleteProductForm: FormGroup;
    public successMessage: string = '';
    public errorMessage: string = '';
    protected readonly AlertState = AlertState;

    constructor(private productService: ProductService, private routerService: RouterService) {
        const product: IProduct = this.routerService.getQueryParams().product;
        this.deleteProductForm = new FormGroup({
            id: new FormControl(product.id),
            name: new FormControl(product.name),
            description: new FormControl(product.description),
            unitPrice: new FormControl(product.unitPrice),
            productQuantity: new FormControl(product.productQuantity)
        })

    }
    public deleteProduct() {
        const productToDelete = this.deleteProductForm.getRawValue()
        this.productService.deleteProduct(productToDelete)
            .subscribe({
                next: (data) => {
                    console.log('Product successfully deleted', data);
                    this.successMessage = 'Product successfully deleted';

                }, error: (err: any) => {
                    console.error('Error deleting product', err);
                    this.errorMessage = 'An error occurred while deleting product, please try again'
                }
            });
    }


}



