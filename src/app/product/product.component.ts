import {Component, OnInit} from '@angular/core';
import {ProductService} from "./service/product.service";
import {PageResponse} from "./model/page.response.model";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    public productsInPage: any = {};
    public readonly MAX_LIMIT:number = 5;

    constructor(private productService: ProductService) {
    }

    public addProduct() {
        console.log('add product');
    }
    ngOnInit() {
        this.initializeProducts()

    }

    private initializeProducts() {
        this.productService.fetchProducts(this.MAX_LIMIT, 2)
            .subscribe({next: (data:PageResponse): void => {
                    console.log('Response', data);
                    this.productsInPage = data;
                }});
    }
}
