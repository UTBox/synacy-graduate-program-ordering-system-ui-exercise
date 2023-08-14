import {Component, OnInit} from '@angular/core';
import {RouterService} from "../../service/router/router.service";
import {IProduct} from "../product-list/model/product.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cart: IProduct[] = [];
  public cartGroupedProducts: any = [];
  constructor(private routerService: RouterService) {
    this.cart = this.routerService.getQueryParams().cart;
  }

  ngOnInit() {
    this.cartGroupedProducts = this.cart.reduce((products: any[], item) => {
      const { id } = item;
      const index = products.findIndex(product => product[0]?.id === id);
      if (index === -1) {
        products.push([item]);
      } else {
        products[index].push(item);
      }
      return products;
    }, []);

    console.log(this.cartGroupedProducts);
  }


  public goBack() {
    this.routerService.navigate('/', { cart: this.cart })
  }
}
