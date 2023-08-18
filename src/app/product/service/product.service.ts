import {Injectable} from "@angular/core";
import {ProductRepository} from "../repository/product.repository";
import {Observable} from "rxjs";
import {IProduct} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(private productRepository: ProductRepository) {
  }

  public fetchProducts(max : number, page : number): Observable<any>{
    return this.productRepository.getProducts(max, page);
  }

  public saveProduct(RequestBody : IProduct){
    return this.productRepository.createProduct(RequestBody);
  }

  public editProduct(requestBody: IProduct){
    return this.productRepository.editProduct(requestBody);
  }

  public deleteProduct(id : number){
    return this.productRepository.deleteProduct(id);
  }
}
