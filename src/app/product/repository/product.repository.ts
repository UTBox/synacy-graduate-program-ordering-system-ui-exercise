import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({providedIn: "root"})
export class ProductRepository {

  private readonly CONTENT_TYPE: string = 'application/json';
  private readonly headers;

  constructor(private http: HttpClient) {

    this.headers = new HttpHeaders({
      'Content-Type': this.CONTENT_TYPE
    });
  }

  public getProducts() {
    const getProductsUrl: string = 'api/vi/product'
    return this.http.get(getProductsUrl, {headers: this.headers}).toPromise();

  }
}
