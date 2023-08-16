import {Component, OnInit} from '@angular/core';
import {ProductService} from "./service/product.service";
import {PageResponse} from "./model/page-response.model";
import {IProduct} from "./model/product.model";
import {RouterService} from "./service/router-service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  public productsInpage:any = {};
  public readonly MAX_LIMIT: number = 5;
   constructor(private productService: ProductService, private routerService:RouterService) {
  }
  public addProduct(){
    console.log('add product')
  }

  ngOnInit(): void {
     this.initializeProducts()
  }
  private initializeProducts(){
     this.productService.fetchProducts(this.MAX_LIMIT, 1).subscribe({next:(data: PageResponse) => {console.log('Response', data);
     this.productsInpage = data;
     }});
  }


  public editProduct(product: any){
     console.log('edit product', product);
     this.routerService.navigate('/product/edit', {'product': product})
  }

}


