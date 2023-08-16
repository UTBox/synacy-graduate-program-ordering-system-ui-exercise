import {Injectable} from "@angular/core";
import {ProductRepository} from "../repository/product.repository";
import {Observable} from "rxjs";
import {IProduct} from "../model/product.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class RouterService {

  constructor(private router: Router) {
  }

  public navigate(url: any, queryParams?: any) {
    return this.router.navigate([url], {state: {queryParams: queryParams}});
  }

  public getQueryParams() {
    if (window.history.state) {
      return window.history.state.queryParams;
    }
  }
}
