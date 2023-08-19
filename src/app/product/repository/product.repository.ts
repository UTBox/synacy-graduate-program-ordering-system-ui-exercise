import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IProduct} from "../model/product.model";

@Injectable({providedIn: 'root'})
export class ProductRepository {

  private readonly baseUrl = 'api/v1';
  private readonly CONTENT_TYPE = 'application/json';
  private readonly headers;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': this.CONTENT_TYPE
    })
  }

  public getProducts(max: number, page: number) {
    const getProductsUrl = this.baseUrl + '/products?max=' + max + '&page=' + page;
    return this.httpClient.get(getProductsUrl, {headers: this.headers});
  }

  public createProduct(requestBody: IProduct) {
    const createProductUrl = this.baseUrl + '/product';
    return this.httpClient.post<any>(createProductUrl, requestBody, {headers: this.headers});
  }

  public updateProduct(updatedProduct: IProduct) {
    const updateProductUrl = this.baseUrl + '/product/' + updatedProduct.id;
    return this.httpClient.put<any>(updateProductUrl, updatedProduct, {headers: this.headers});
  }

  public removeProduct(removeProduct: number) {
    const removeProductUrl = this.baseUrl + '/product/' + removeProduct;
    return this.httpClient.delete(removeProductUrl, {headers: this.headers})
  }
}
