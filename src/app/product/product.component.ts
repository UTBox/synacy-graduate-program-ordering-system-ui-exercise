import {Component, OnInit} from '@angular/core';
import {ProductService} from "./service/product.service";
import {PageResponse} from "./model/page-response.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  public actionsClass = 'actions'
  public productsInPage: any = {};
  public MAX_LIMIT: number = 15;
  constructor(private productService: ProductService) {
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
}
