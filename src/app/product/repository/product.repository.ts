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
    console.log(requestBody);
    const createProductUrl = this.baseUrl + '/product';
    return this.httpClient.post(createProductUrl, requestBody, {headers: this.headers});
      // .subscribe({
      //   next: (data) => {
      //     console.log('success', data)
      //   },
      //   error: (error) => {
      //     console.log('err', error)
      //   }
      // })
  }
}
