import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductRepository {

  private readonly CONTENT_TYPE = 'application/json';
  private readonly headers;
  private readonly baseUrl = 'api/v1';

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': this.CONTENT_TYPE
    })
  }

  public getProducts(max: number, page: number): Observable<any> {
    const getProductsUrl = this.baseUrl + '/product?max=' + max + '&page=' + page;
    return this.httpClient.get<any>(getProductsUrl, {headers: this.headers});
  }

  public createProduct(requestBody: IProduct) {
    console.log('create product:', requestBody);
    const createProductUrl = this.baseUrl + '/product';
    return this.httpClient.post(createProductUrl, requestBody, {headers: this.headers});
  }

  public editProduct(requestBody: IProduct) {
    console.log('edit product:', requestBody);
    const editProductUrl = this.baseUrl + '/product/' + requestBody.id;
    console.log(editProductUrl);
    return this.httpClient.put<any>(editProductUrl, requestBody, {headers: this.headers});
  }
}
