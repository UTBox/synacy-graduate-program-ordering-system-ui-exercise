import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({providedIn: "root"})
export class ProductRespository{

  private readonly CONTENT_TYPE : string ='application/json';
  private readonly headers: HttpHeaders;

  constructor(private httpClient: HttpClient){
    this.headers = new HttpHeaders({
      'Content-Type': this.CONTENT_TYPE
    })
  }

  public getProduct(){
    const getProduct : string = 'api/v1/product'
    return this.httpClient.get(getProduct);
  }
}
