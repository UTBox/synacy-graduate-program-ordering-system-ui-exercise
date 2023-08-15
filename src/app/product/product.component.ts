import {Component, OnInit} from '@angular/core';
import {ProductService} from "./service/product.service";
import {IProduct} from "./model/product.model";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    public products: IProduct[] = [];

    constructor(private productService: ProductService) {
    }

    public addProduct() {
        console.log('add product');
    }

    ngOnInit() {

    }

    private initializeProducts() {
        this.productService.fetchProducts()
            .then((data: any): void => {
                console.log(data)
            }, () => {

            });
    }
}
