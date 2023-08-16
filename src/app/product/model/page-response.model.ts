import {IProduct} from "./product.model";

export interface PageResponse {
  content: IProduct[],
  pageNumber: number,
  totalCount: number
}
