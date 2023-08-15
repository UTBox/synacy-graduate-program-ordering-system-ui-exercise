import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductRepository {

  private readonly CONTENT_TYPE = 'application/json';
  private readonly headers;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': this.CONTENT_TYPE
    })
  }

  public getProducts(max: number, page: number): Observable<any> {
    const getProductsUrl = 'api/v1/product?max=' + max + '&page=' + page;
    return this.httpClient.get<any>(getProductsUrl, {headers: this.headers});
  }
}
