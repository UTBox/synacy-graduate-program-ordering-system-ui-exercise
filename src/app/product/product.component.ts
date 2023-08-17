import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "./service/product.service"
import {PageResponse} from "./model/page-response.model";
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

  @Input() isShowPrev = false;
  @Input() isShowNext = true;
  @Input() state = 'page1';

  public pages: any;

  public readonly MAX_LIMIT = 5;
  public pageNumber = 1;
  public totalPages = 0;

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
    this.productService.fetchProducts(this.MAX_LIMIT, this.pageNumber)
      .subscribe({
        next: (data: PageResponse) =>
        {
          console.log('Response:', data);
          this.productsInPage = data;
          this.createPageNav()
          if (this.totalPages < 2) {
            this.isShowNext = false;
          }
        }
      })
  }

  private fetchPagedProducts(): void {
    this.productService.fetchProducts(this.MAX_LIMIT, this.pageNumber)
      .subscribe({
        next: (data: PageResponse) =>
        {
          console.log('Response:', data);
          this.productsInPage = data;
        }
      })
  }

  private createPageNav() {
    this.totalPages = Math.ceil(this.productsInPage.totalCount/this.productsInPage.content.length);
    this.pages = Array.from(Array(this.totalPages).keys()).map(x => x+1);
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

  public prevPage() {
    this.pageNumber -= 1;
    this.initializeProducts();
    this.isShowNext = true;
    if (this.pageNumber == 1) {
      this.isShowPrev = false;
    }
  }

  public nextPage() {
    this.pageNumber += 1;
    this.fetchPagedProducts();
    this.isShowPrev = true;
    if (this.pageNumber == this.totalPages) {
      this.isShowNext = false;
    }
  }

  public navPage(page: number) {
    this.pageNumber = page;
    this.fetchPagedProducts();
    this.isShowPrev = this.pageNumber != 1;
    this.isShowNext = this.pageNumber != this.totalPages;
  }
}
