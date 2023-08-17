import {Component, OnInit} from '@angular/core';
import {ProductService} from "./service/product.service";
import {PageResponse} from "./model/page-response.model";
import {RouterService} from "./service/router.service";
import {IProduct} from "./model/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  public productsInPage: PageResponse = {
    content: [],
    pageNumber: 0,
    totalCount: 0
  };

  public MAX_LIMIT: number = 15;
  constructor(private productService: ProductService, private routerService: RouterService) {
  }

  ngOnInit(): void {
    this.initializeProducts();
  }

  private initializeProducts(): void{
    this.productService.fetchProducts(this.MAX_LIMIT, 1)
      .subscribe({ next: (data: PageResponse) => {

        console.log('Response:' , data);

        this.productsInPage = data;
      }})
  }

  public addProduct() {
    console.log("add product");
  }

  public editProduct(product: any){
    console.log(product);
    this.routerService.navigate('/product/edit', {'product': product});
  }
}
