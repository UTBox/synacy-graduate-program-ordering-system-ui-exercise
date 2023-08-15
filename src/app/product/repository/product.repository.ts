import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class ProductRepository {

  private readonly CONTENT_TYPE = 'application/json';
  private readonly headers;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': this.CONTENT_TYPE
    })
  }

  public getProducts(max: number, page: number) {
    const getProductsUrl = 'api/v1/products?max=' + max + '&page=' + page;
    return this.httpClient.get(getProductsUrl, {headers: this.headers});
  }
}
