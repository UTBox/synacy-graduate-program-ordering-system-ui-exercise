import {Injectable} from "@angular/core";
import {ProductRepository} from "../repository/product.repository";
import {Observable} from "rxjs";
import {IProduct} from "../model/product.model";


@Injectable({
  providedIn: "root"
})

export class ProductService {
  constructor(private productRepository: ProductRepository) {
  }

  public fetchProducts(max:number, page: number):Observable<any> {
    return this.productRepository.getProducts(max, page);

  }
  public savedProduct(requestBody:IProduct){
        return this.productRepository.createProduct(requestBody);
    }
    public editProduct(requestBody:IProduct){
    return this.productRepository.editProduct(requestBody);
    }
    public deleteProduct(requestBody:IProduct){
    return this.productRepository.deleteProduct(requestBody);
    }

}
