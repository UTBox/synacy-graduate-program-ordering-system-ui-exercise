import {Component, OnInit} from '@angular/core';
import {ProductService} from "./service/product.service";
import {PageResponse} from "./model/page-response.model";
import {RouterService} from "./service/router.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public actionClass: string = 'actions';
  public productsInPage: any = {};
  private readonly MAX_LIMIT: number = 8


  constructor(private productService: ProductService, private routerService: RouterService) {
  }

  public editProduct(product: any) {
    console.log('edit product', product);
    this.routerService.navigate('/product/edit', {'product': product})
  }

  ngOnInit() {
    this.initializeProducts()
  }

  private initializeProducts() {
    this.productService.fetchProducts(this.MAX_LIMIT, 1)
      .subscribe({
        next: (data: PageResponse) => {
          console.log('Response:', data);
          this.productsInPage = data;
        }
      })
  }
}
