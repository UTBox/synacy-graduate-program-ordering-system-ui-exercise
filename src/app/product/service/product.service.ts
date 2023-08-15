import {Injectable} from "@angular/core";
import {ProductRepository} from "../repository/product.repository";

@Injectable({
  providedIn: "root"
})

export class ProductService {
  constructor(private productRepository: ProductRepository) {
  }

  public fetchProducts() {
    return this.productRepository.getProducts();
  }
}
