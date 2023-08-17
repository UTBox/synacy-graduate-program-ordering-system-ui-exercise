import {Component, OnInit} from '@angular/core';
import {ProductService} from "./service/product.service";
import {PageResponse} from "./model/page-response.model";
import {IProduct} from "./model/product.model";
import {RouterService} from "./service/router.service";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public isLoading: boolean = false;
  public productsInPage: any = {};
  public readonly MAX_LIMIT: number = 2;
  constructor(private productService: ProductService, private routerService: RouterService) {
  }

  ngOnInit(): void {
    this.initializeProducts();
  }

  private async initializeProducts() {

    this.isLoading = true;

    this.productsInPage = await lastValueFrom(this.productService.fetchProducts(this.MAX_LIMIT, 1));

    this.isLoading = false;
  }

  public editProduct(product: any) {
    console.log('edit product', product);
    this.routerService.navigate('edit', {'product': product});
  }
}
