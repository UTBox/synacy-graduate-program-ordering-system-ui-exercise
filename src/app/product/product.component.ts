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
export class ProductComponent implements OnInit {
  public productsInpage: any = {};
  public MAX_LIMIT: number = 3;
  currentPage = 1;
  pageSize = 3;
  totalPages: any = {};

  constructor(private productService: ProductService, private routerService: RouterService) {}

  public addProduct() {
    console.log('add product');
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  private fetchProducts(){
    this.productService.fetchProducts(this.MAX_LIMIT, this.currentPage).subscribe({
      next: (data: PageResponse) => {
        console.log('Response', data);
        this.productsInpage = data;
        this.totalPages = Math.ceil(data.totalCount / this.MAX_LIMIT);
        console.log('Total Pages:', this.totalPages);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }

  public editProduct(product: any) {
    console.log('edit product', product);
    this.routerService.navigate('/product/edit', { 'product': product });
  }

  public deleteProduct(product: any) {
    console.log('delete product', product);
    this.routerService.navigate('/product/delete', { 'product': product });
  }
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchProducts();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchProducts();
    }
  }
}


