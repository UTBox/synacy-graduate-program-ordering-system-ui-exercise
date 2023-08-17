import {Component, OnInit} from '@angular/core';
import {ProductService} from "./service/product.service";
import {PageResponse} from "./model/page-response.model";
import {RouterService} from "./service/router.service";

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

  public MAX_LIMIT: number = 5;
  public page : number = 1;
  constructor(private productService: ProductService, private routerService: RouterService) {}

  ngOnInit(): void {
    this.initializeProducts();
  }

  private initializeProducts(): void{
    this.productService.fetchProducts(this.MAX_LIMIT, this.page)
      .subscribe({ next: (data: PageResponse) => {
        this.productsInPage = data;
      }})
  }
  next(){
    this.page += 1;
    this.initializeProducts();
  }

  back(){
    this.page -= 1;
    this.initializeProducts();
  }

  public addProduct() {
    console.log("add product");
  }

  public editProduct(product: any){
    console.log(product);
    this.routerService.navigate('/product/edit', {'product': product});
  }

  public deleteProduct(product: any){
    this.routerService.navigate('product/delete', {'product':product});
  }


}
