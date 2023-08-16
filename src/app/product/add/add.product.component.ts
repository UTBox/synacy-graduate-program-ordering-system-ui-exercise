import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-add',
    templateUrl: './add.product.component.html',
    styleUrls: ['./add.product.component.css']
})
export class AddProductComponent {
    public addProductForm: FormGroup;


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
        // console.log(this.addProductForm.getRawValue());
        const formValue = this.addProductForm.getRawValue();
        this.productService.savedProduct(formValue)
            .subscribe({
                next: (data) => {
                    this.router.navigate(['/product'])


                }
            });
    }
}
