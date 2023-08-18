import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";
import {AlertState} from "../../shared/alert/state.enum";

@Component({
    selector: 'app-add',
    templateUrl: './add.product.component.html',
    styleUrls: ['./add.product.component.css']
})
export class AddProductComponent {
    public addProductForm: FormGroup;
    public successMessage: string = '';
    public errorMessage: string = '';
    protected readonly AlertState = AlertState;

    constructor(private productService: ProductService, private router: Router) {
        this.addProductForm = new FormGroup<any>({
                name: new FormControl(''),
                description: new FormControl(''),
                productQuantity: new FormControl(),
                unitPrice: new FormControl()
            }
        )
    }

    public onSubmit() {
        console.log(this.addProductForm.getRawValue());
        const formValue = this.addProductForm.getRawValue();
        this.productService.savedProduct(formValue)
            .subscribe({
                next: (data) => {
                    console.log('Product successfully Added', data);
                    this.router.navigate(['/product']);
                    this.successMessage = 'Product successfully Added';
                },

                error: (err: any) => {
                    console.error('Error adding product', err);
                    this.errorMessage = 'An error occurred while adding product, please try again'
                }
            });
    }
}
