import {Component} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {RouterService} from "../service/router.service";
import {IProduct} from "../model/product.model";
import {AlertState} from "../../shared/alert/state.enum";

@Component({
    selector: 'app-edit.product',
    templateUrl: './edit.product.component.html',
    styleUrls: ['./edit.product.component.css']
})
export class EditProductComponent {
    public editProductForm: FormGroup;
    public successMessage: string = '';
    public errorMessage: string = '';
    protected readonly AlertState = AlertState;

    constructor(private productService: ProductService, private routerService: RouterService) {
        const product: IProduct = this.routerService.getQueryParams().product;

        this.editProductForm = new FormGroup({
            id: new FormControl(product.id),
            name: new FormControl(product.name),
            description: new FormControl(product.description),
            unitPrice: new FormControl(product.unitPrice),
            productQuantity: new FormControl(product.productQuantity)
        })
    }

    public editProduct() {
        const productToSave = this.editProductForm.getRawValue()
        this.productService.editProduct(productToSave)
            .subscribe({
                next: (data) => {
                    console.log('Product successfully updated', data);
                    this.successMessage = 'Product successfully updated';

                }, error: (err: any) => {
                    console.error('Error updating product', err);
                    this.errorMessage = 'An error occurred while updating product, please try again'
                }
            });
    }
}
