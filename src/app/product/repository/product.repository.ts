import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../model/product.model";

@Injectable({providedIn: "root"})
export class ProductRepository {

  private readonly CONTENT_TYPE : string ='application/json';
  private readonly headers: HttpHeaders;
  private readonly baseUrl = 'api/v1';

  constructor(private httpClient: HttpClient){
    this.headers = new HttpHeaders({
      'Content-Type': this.CONTENT_TYPE
    });
  }

  public getProducts(max: number, page: number): Observable<any>{
    const getProductsUrl : string = 'api/v1/product?max=' + max + '&page=' + page;
    return this.httpClient.get<any>(getProductsUrl, {headers: this.headers});
  }

  public createProduct(requestBody: IProduct){
    console.log(requestBody);
    const createProductUrl = this.baseUrl + '/product';
    console.log(createProductUrl);

    return this.httpClient.post<any>(createProductUrl, requestBody, {headers: this.headers});
      // .subscribe({
      //   next: (data) => {
      //     console.log('success', data);
      //   },
      //   error: (error) => {
      //     console.log('err', error);
      //   }
      // });
  }

  public editProduct(requestBody: IProduct){
    console.log(requestBody);
    const editProductUrl = this.baseUrl + '/product/' + requestBody.id;

    return this.httpClient.put<any>(editProductUrl, requestBody, {headers: this.headers});
  }

  public deleteProduct(productId: number){

    const deleteProductUrl = this.baseUrl + '/product/' + productId
    return this.httpClient.delete<any>(deleteProductUrl, {headers: this.headers});
  }
}
