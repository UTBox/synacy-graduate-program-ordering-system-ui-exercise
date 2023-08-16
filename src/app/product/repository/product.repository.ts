import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IProduct} from "../model/product.model";

@Injectable({providedIn: "root"})
export class ProductRepository {

    private readonly baseUrl: string = 'application/json';
    private readonly CONTENT_TYPE: string = 'application/json';
    private readonly headers;

    constructor(private httpClient: HttpClient) {
        this.headers = new HttpHeaders({
            'Content-Type': this.CONTENT_TYPE
        });
    }

    public getProducts(max: number, page: number) {
        const getProductsUrl: string = this.baseUrl + '/product?max' + max + '&page=' + page;
        return this.httpClient.get(getProductsUrl, {headers: this.headers});

    }

    public createProduct(requestBody: IProduct) {
        console.log(requestBody)
        const createProductUrl: string = this.baseUrl + '/product';
        return this.httpClient.post(createProductUrl, requestBody, {headers: this.headers})
            // .subscribe({
            //     next: (data) => {
            //         console.log('success');
            //     },
            //     error: (error) => {
            //         console.log('error', error);
            //     }
            // })

    }
}
