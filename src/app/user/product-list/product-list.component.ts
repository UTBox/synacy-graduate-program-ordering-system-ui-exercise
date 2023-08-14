import {Component, OnInit} from '@angular/core';
import {IProduct} from "./model/product.model";
import {RouterService} from "../../service/router/router.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  public productList: IProduct[] = [];

  public cart: IProduct[] = [];

  constructor(private routerService: RouterService) {
    console.log(this.routerService.getQueryParams());
    this.cart = this.routerService.getQueryParams()?.cart || [];
  }

  ngOnInit() {
    this.productList = [
      {
        id: 1,
        name: 'Product 1',
        description: 'Test description',
        price: 5
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Test description',
        price: 10
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'Test description',
        price: 15
      },
      {
        id: 4,
        name: 'Product 4',
        description: 'Test description',
        price: 20
      },
      {
        id: 5,
        name: 'Product 5',
        description: 'Test description',
        price: 25
      },
      {
        id: 6,
        name: 'Product 6',
        description: 'Test description',
        price: 30
      }
    ];
  }

  public addToCart(product: IProduct) {
    this.cart.push(product);

    console.log(this.cart)
  }

  public goToCart() {
    this.routerService.navigate('/cart', {cart: this.cart});
  }

}
