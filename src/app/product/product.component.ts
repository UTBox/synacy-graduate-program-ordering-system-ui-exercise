import {Component, OnInit} from '@angular/core';
import {ProductService} from "./service/product.service"
import {PageResponse} from "./model/page-response.model";
import {IProduct} from "./model/product.model";
import {RouterService} from "./service/router.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productsInPage: PageResponse = {
    content: [],
    pageNumber: 0,
    totalCount: 0
  };
  public readonly MAX_LIMIT = 20;
  public message: string = '';
  public deleteMessage: boolean = false;
  constructor(private productService: ProductService, private routerService: RouterService) {
  }
  public addProduct() {
    console.log("add product");
  }

  ngOnInit(): void {
    this.initializeProducts()
  }

  private initializeProducts(): void {
    this.productService.fetchProducts(this.MAX_LIMIT, 1)
      .subscribe({ next: (data: PageResponse) =>  {
        console.log('Response:', data);
        this.productsInPage = data;
        }})
  }

  public editProduct(product: any) {
    console.log('edit product', product);
    this.routerService.navigate('/product/edit', {'product': product});
  }

  public deleteProduct(product: any) {
    console.log('delete product', product);
    this.deleteMessage = true;
    this.routerService.navigate('/product/delete', {'product': product});
  }
}
