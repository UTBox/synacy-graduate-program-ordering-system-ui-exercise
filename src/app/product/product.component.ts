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

  public productsInPage: any = {};
  private readonly MAX_LIMIT: number = 3
  currentPage: number = 1;
  totalPages: any;


  constructor(private productService: ProductService, private routerService: RouterService) {
  }

  public editProduct(product: any) {
    console.log('edit product', product);
    this.routerService.navigate('/product/edit', {'product': product})
  }

  public removeProduct(product: any) {
    this.routerService.navigate('/product/delete', {'product': product})
  }

  ngOnInit() {
    this.initializeProducts()
  }

  private initializeProducts() {
    this.productService.fetchProducts(this.MAX_LIMIT, this.currentPage)
      .subscribe({
        next: (data: PageResponse) => {
          console.log('Response:', data);
          this.productsInPage = data;
          this.totalPages = Math.ceil(data.totalCount / this.MAX_LIMIT);
        }
      })
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.initializeProducts();
    }
  }
}
