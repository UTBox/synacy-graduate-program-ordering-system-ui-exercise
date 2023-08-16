import {IProduct} from "./product.model";

export  interface PageResponse {
    totalCount: number;
    page: number;
    content:IProduct[];
}
