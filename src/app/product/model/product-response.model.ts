import {IProduct} from "./product.model";


export interface PageResponse{
  totalCount: number
  pageNumber: number
  content: IProduct[]
}
