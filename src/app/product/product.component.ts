import {Component, OnInit} from '@angular/core';
import {ProductService} from "./service/product.service";
import {IProduct} from "./model/product.model";
import {RouterService} from "../service/router.service";
import {PageResponse} from "./model/product-response.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  private page: number = 1;
  private next: any;
  private previous: any;

  public productsInpage: PageResponse = {
    content: [],
    pageNumber: 0,
    totalCount: 0
  };

  public readonly MAX_LIMIT: number = 10;


  constructor(private productService: ProductService, private routerService: RouterService) {
  }

  public addProduct(){
    console.log('add product');
  }

  ngOnInit() {
    this.initializeProducts();
  }

  public nextPage(){
    this.page += 1;
    return this.page
  }

  public previousPage(){
    if(this.page==0){
      this.page = 1;
    }
    else{
      this.page += 1;
    }

    return this.page;
  }

  private initializeProducts(){
    this.productService.fetchProducts(this.MAX_LIMIT, this.page).subscribe({next: (data: any) => {
        console.log('Response', data);

        this.productsInpage = data;

      }});
  }

  public editProduct(product: any){
    this.routerService.navigate('/product/edit', {'product': product})
  }

  public deleteProduct(id: any){
    this.routerService.navigate('/product/delete', {'id': id})
  }

}


