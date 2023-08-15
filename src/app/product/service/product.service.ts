import {Injectable} from "@angular/core";
import {ProductRepository} from "../repository/product.repository";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private productRepository: ProductRepository) {
  }

  public fetchProducts(max: number, page: number): Observable<any> {
    return this.productRepository.getProducts(max, page);
  }
}

