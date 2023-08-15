import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IProduct} from "../model/product.model";

@Injectable({providedIn: 'root'})
export class ProductRepository{

  private readonly baseUrl = '/api/v1'

  private readonly CONTENT_TYPE : string ='application/json';
  private readonly headers;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': this.CONTENT_TYPE
    })
  }

  public getProducts(max: number, page: number){
    const getProductsUrl : string = 'api/v1/product?max=' + max + '&page' + page;
    return this.httpClient.get<any>(getProductsUrl, {headers: this.headers})
  }
  public createProduct(requestBody: IProduct){
    console.log(requestBody);
    const createProductUrl = this.baseUrl + '/product';
    return this.httpClient.post(createProductUrl, requestBody,  { headers: this.headers })
  }
}
